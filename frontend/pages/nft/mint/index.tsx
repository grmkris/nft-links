import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ImagePrev from '../../../components/nft/ImagePrev'
import CreateNFTLayout from '../../../components/layout/CreateNFTLayout'
import {useFiles} from "../../../hooks/useFiles";
import Image from "next/image";
import {toast} from "react-toastify";
import {useUser} from "@supabase/supabase-auth-helpers/react";
import {useQueryClient} from "react-query";
import {supabaseClient} from "@supabase/supabase-auth-helpers/nextjs";

export type NftModel = {
  title?: string
  description?: string
  image?: string
  additionalMetadata?: string
}

/**
 * Creating NFT works in multiple steps.
 * 1. User fills information about nft metadata (title, description, image, additional json metadata)
 * 1.1 If image is not yet on ipfs, user can upload it
 * 2. User uploads nft metadata to ipfs
 * 3. User selects on which blockchain to mint nfts
 */


function CreateNFT() {
  const {data: ipfsFiles, isLoading: isLoadingFiles, error: isErrorLoadingFiles} = useFiles()
  const {accessToken} = useUser()
  const [nftMetadata, setNftMetadata] = useState<NftModel>({
    title: '',
    description: '',
    image: "",
    additionalMetadata: '',
  })
  const { user } = useUser()
  const [createNftForm, setCreateNftForm] = useState<{
    metadata: string,
    active: boolean,
    selectedBlockchain: string,
    amount: number
  }>({
    metadata: '',
    active: false,
    selectedBlockchain: '',
    amount: 0
  })
  const queryClient = useQueryClient()

  const uploadToServer = async () => {
    const body = new FormData()
    body.append('json', JSON.stringify(nftMetadata))
    const result = await axios.post('/api/ipfs/upload', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    console.log(result)
    if (result.data.error) {
      toast.error(result.data.error.message)
      return
    }
    toast.info('Metadata uploaded to IPFS, hash: ' + result.data.data[0].id)
    setCreateNftForm({
      ...createNftForm,
      metadata: result.data.data[0].id
    })
    await queryClient.invalidateQueries('files')
  }

  const handleChangeNftMetadata = (e) =>
    setNftMetadata((prevState) => ({...prevState, [e.target.name]: e.target.value}))

  const handleChangeCreateNftForm = (e) =>
    setCreateNftForm((prevState) => ({...prevState, [e.target.name]: e.target.value}))

  const getData = async () => {
    const response = await axios.get('/api/nft')
    console.log(response)
  }

  useEffect(() => {
    getData()
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(createNftForm)
    const result = await supabaseClient.from("nfts").insert({
      metadata: createNftForm.metadata,
      limit: createNftForm.amount,
      active: createNftForm.active,
      chain: createNftForm.selectedBlockchain,
      user: user.id
    })
    console.log(result)
    toast.info('NFT minted', result)

  }

  return (
    <CreateNFTLayout>
      <form onSubmit={submitHandler}>
        <input type="checkbox" id="image-selector-modal" className="modal-toggle"/>
        <label htmlFor="image-selector-modal" className="modal modal-bottom sm:modal-middle cursor-pointer">
          <label className="modal-box relative bg-white" htmlFor="">
            <h3 className="text-lg font-bold">Select one of your uploaded images</h3>
            <div className="h-full ">
              <div className="flex flex-wrap">
                {isLoadingFiles ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="spinner"></div>
                  </div>
                ) : isErrorLoadingFiles ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="text-red-500">{isErrorLoadingFiles}</div>
                  </div>
                ) : (
                  <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                    {ipfsFiles.data.map((file) => (
                      <div className="carousel-item hover:opacity-80 hover:cursor-pointer" key={file.id}>
                        <Image onClick={() => {
                          setNftMetadata({...nftMetadata, image: file.id})
                          console.log(nftMetadata)
                          document.getElementById('image-selector-modal').click()
                        }} src={`https://cloudflare-ipfs.com/ipfs/${file.id}`}
                               width={200}
                               height={200}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </label>
        </label>

        <div className="flex w-full flex-col justify-center md:flex-row md:py-12 md:px-6 ">
          <div className="order-last flex w-full flex-col items-center space-y-3 md:order-first md:w-1/2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Enter Title"
                className="input input-bordered input-primary w-full max-w-xs bg-white"
                onChange={handleChangeNftMetadata}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-primary bg-white"
                placeholder="Describe your NFT"
                onChange={handleChangeNftMetadata}
              ></textarea>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">Additional Metadata</span>
              </label>
              <textarea
                className="textarea textarea-primary bg-white"
                placeholder="Additional JSON metadata"
                name="additionalMetadata"
                onChange={handleChangeNftMetadata}
              ></textarea>
            </div>

            <div className="w-full max-w-xs">
              <label
                className="w-full btn btn-primary my-2"
                onClick={async () => {
                  await uploadToServer()
                }}
              >
                Create metadata
              </label>
            </div>
            <label className="btn btn-ghost" >{createNftForm.metadata}</label>
            <div className="divider"></div>

            <div className="form-control w-full max-w-xs grid grid-cols-2">
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">Active</span>
                </label>
                <input
                  name="active"
                  type="checkbox"
                  className="toggle-primary toggle"
                  onChange={handleChangeCreateNftForm}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">Amount</span>
                </label>
                <input
                  name="amount"
                  type="number"
                  placeholder="Amount"
                  className="input input-bordered input-primary w-full max-w-xs bg-white"
                  onChange={handleChangeCreateNftForm}
                />
              </div>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">Blockchain</span>
              </label>
              <select
                name="selectedBlockchain"
                className="select select-primary w-full max-w-xs bg-white"
                placeholder={'props.placeholder'}
                value={createNftForm.selectedBlockchain}
                onChange={handleChangeCreateNftForm}
              >
                <option value={0} disabled>
                  Select Blockchain
                </option>
                <option>Ethereum</option>
                <option>Polygon</option>
              </select>
            </div>

            <div className="w-full max-w-xs">
              <button
                className="mt-8 w-full btn btn-primary"
                type="submit"
              >
                Create NFT
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col space-y-4 md:w-1/2">
            <ImagePrev/>

            <div className="divider m-auto w-1/2">OR</div>

            <div className="grid place-items-center ">
              <label
                className="w-3/4 cursor-pointer	rounded-full px-2 py-3  text-center font-bold text-indigo-500 underline decoration-indigo-500 decoration-2 underline-offset-2  sm:w-1/3 md:w-1/2"
                htmlFor="image-selector-modal"
              >
                Pick from album
              </label>
            </div>
          </div>
        </div>
      </form>
    </CreateNFTLayout>
  )
}

export default CreateNFT
