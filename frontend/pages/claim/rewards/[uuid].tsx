import React, {useEffect, useRef, useState} from "react";
import {supabaseServerClient} from "../../../utils/server/supabaseServer";
import Layout from "../../../components/layout/Layout";
import NftCard from "../../../components/nft/NftCard";
import {ClipboardCopyIcon, TableIcon} from "@heroicons/react/solid";
import {PhotographIcon} from "@heroicons/react/outline";
import {toast} from "react-toastify";
import axios from "axios";
import {useUser} from "@supabase/supabase-auth-helpers/react";
import {useQueryClient} from "react-query";
import { CopyToClipboard } from 'react-copy-to-clipboard'

export async function getServerSideProps({query}) {
  // Fetch data from external API
  console.log("getting serverside props for claim rewards page");
  const uuid = query.uuid;
  if (!uuid) {
    return {
      props: {
        error: "No uuid provided",
      },
    };
  }
  // get nfts information from supabase client, from from reward_program inner join  reward_group reward_nft

  const reward_program = await supabaseServerClient.from('reward_program')
    .select(`
      *,
      reward_groups(*, groups(*, user_groups(*))),
      reward_nft(*, nft(*))
    `).match({
      id: uuid,
    })

  const data = reward_program.data

  // Pass data to the page via props
  return {props: {data}}
}

const ViewReward = ({data}) => {
  const { accessToken } = useUser()
  const [file, setFile] = useState()
  const [fileIpfsHash, setFileIpfsHash] = useState()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>()
  const filePickerRef = useRef<HTMLInputElement>(null)
  const queryClient = useQueryClient()

  useEffect(() => {
    if (!file) {
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  const uploadToServer = async () => {
    const body = new FormData()
    body.append('file', file)
    const result = await axios.post('/api/reward/xlsx', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    console.log(result)
    if (result.data.error) {
      toast.error(result.data.error.message)
      return
    }
    toast.info('File uploaded to IPFS, hash: ' + result.data.data[0].id)
    setFileIpfsHash(result.data.data[0].id)
    await queryClient.invalidateQueries('files')
  }

  const pickFileHandler = () => {
    filePickerRef.current?.click()
  }

  const pickedHandler = (event: React.FormEvent<HTMLInputElement>) => {
    let pickedFile
    if (
      (event.target as HTMLInputElement).files &&
      (event.target as HTMLInputElement).files.length === 1
    ) {
      pickedFile = (event.target as HTMLInputElement).files[0]
      setFile(pickedFile)
    } else {
      setPreviewUrl(null)
    }
  }

  return (
    <Layout>
      <div>{data.map((element, index) => {
        return (
          <div key={index}>

            <div className="m-10 grid place-items-center">
                <div className={"prose"}>
                  <h1>{element.name}</h1>
                  <p>{element.description}</p>
                  <p>Created: {new Date(element.created_at).toLocaleString()}</p>
                  <p>Condition: {element.reward_nft[0]?.condition}</p>
                </div>
              <>
                <label
                  htmlFor="file-upload-modal"
                  className="btn btn-primary m-auto w-2/3 md:m-0 md:w-1/3"
                  onClick={()=>{console.log("asdf")}}
                >
                  Claim
                </label>
                <input type="checkbox" id="file-upload-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h2 className={'text-2xl'}>Upload new excel</h2>
                    <>
                      <div className="relative mx-auto my-8 w-full hover:cursor-pointer">
                        <input
                          ref={filePickerRef}
                          className="hidden"
                          type="file"
                          accept=".xlsx"
                          onChange={pickedHandler}
                        />
                        <div
                          className={`m-auto flex h-[440px] max-w-md items-center rounded-lg bg-gray-50 p-5 shadow-2xl dark:bg-slate-700`}
                          onClick={pickFileHandler}
                        >
                            <div className="flex w-full flex-col items-center justify-center space-y-2">
                              <TableIcon className="h-20 w-20" />
                              <p className="w-full text-center">Please pick an excel file</p>
                              <p className="w-2/3 text-center text-xs text-gray-400">
                                File must be .xlsx format
                              </p>
                            </div>
                        </div>
                      </div>
                      {previewUrl && !fileIpfsHash && (
                        <label className={'btn btn-secondary'} onClick={() => uploadToServer()}>
                          <PhotographIcon className="mr-2 h-6 w-6" />
                          Upload to ipfs
                        </label>
                      )}
                      {previewUrl && fileIpfsHash && (
                        <CopyToClipboard text={fileIpfsHash}>
                          <div
                            className={'btn btn-outline truncate'}
                            onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
                          >
                            {' '}
                            <ClipboardCopyIcon className="w-6" /> {fileIpfsHash}
                          </div>
                        </CopyToClipboard>
                      )}
                    </>
                    <label htmlFor="file-upload-modal" className="btn btn-primary btn-block mt-2">
                      Close
                    </label>
                  </div>
                </div>
              </>
            </div>
            <div className="divider text-lg text-success">Reward</div>
            <div className="grid place-items-center">
              {data[0]?.reward_nft[0] && <NftCard nft={data[0]?.reward_nft[0].nft}/>}
            </div>
      </div>
      )
      })}</div>
    </Layout>
  );
};

export default ViewReward;