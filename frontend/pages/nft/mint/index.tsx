import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {nftModel} from '../../../model/nftModel'
import ImagePrev from '../../../components/nft/ImagePrev'
import CreateNFTLayout from '../../../components/layout/CreateNFTLayout'
import {useFiles} from "../../../hooks/useFiles";
import Image from "next/image";

function CreateNFT() {
  const {data: ipfsFiles, isLoading: isLoadingFiles, error: isErrorLoadingFiles} = useFiles()
  const [nftFormFields, setNftFormFields] = useState<nftModel>({
    nftTitle: '',
    nftDescription: '',
    nftBlockchain: '',
    nftMetadata: '',
    nftImage: {}
  })

  const handleChange = (e) =>
    setNftFormFields((prevState) => ({...prevState, [e.target.name]: e.target.value}))

  const getData = async () => {
    const response = await axios.get('/api/nft')
    console.log(response)
  }

  useEffect(() => {
    getData()
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    const body = new FormData()
    body.append('file', nftFormFields.nftImage as Blob)

    const response = await axios.post('/api/nft/create', body)
    console.log(response)
  }

  console.log('nftFormFields', nftFormFields)

  return (
    <CreateNFTLayout>
      <form onSubmit={submitHandler}>
        <input type="checkbox" id="image-selector-modal" className="modal-toggle"/>
        <label htmlFor="image-selector-modal" className="modal cursor-pointer">
          <label className="modal-box relative bg-white" htmlFor="">
            <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
            <div className="w-5/6  rounded-lg bg-gray-50 p-5 shadow-2xl ">
              <div className="h-full ">
                <label className="mb-2 inline-block text-gray-500">Select previous images</label>
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
                    <div className="grid max-h-72 grid-cols-4 overflow-y-auto">
                      {ipfsFiles.data.map((file) => (
                        <div key={file.id} className="m-3 h-32 w-32 border-2">
                          <Image src={`https://cloudflare-ipfs.com/ipfs/${file.id}`} width={32} height={32} alt={file.name}/>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </label>
        </label>

        <div className="flex w-full flex-col justify-center  md:flex-row md:py-12 md:px-6 ">
          <div className="order-last flex w-full flex-col items-center space-y-3 md:order-first md:w-1/2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">NFT Title</span>
              </label>
              <input
                name="nftTitle"
                type="text"
                placeholder="Enter NFT Title"
                className="input input-bordered input-primary w-full max-w-xs bg-white"
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">NFT Description</span>
              </label>
              <textarea
                name="nftDescription"
                className="textarea textarea-primary bg-white"
                placeholder="Describe your NFT"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">Amount</span>
              </label>
              <input
                name="nftAmount"
                type="number"
                placeholder="Enter NFT Amount"
                className="input input-bordered input-primary w-full max-w-xs bg-white"
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">NFT Blockchain</span>
              </label>
              <select
                name="nftBlockchain"
                className="select select-primary w-full max-w-xs bg-white"
                placeholder={'props.placeholder'}
                value={nftFormFields.nftBlockchain}
                onChange={handleChange}
              >
                <option value={0} disabled>
                  Select Blockchain
                </option>
                <option>Ethereum</option>
                <option>Polygon</option>
                <option>Blabla</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">NFT Metadata</span>
              </label>
              <textarea
                className="textarea textarea-primary bg-white"
                placeholder="Metadata"
                name="nftMetadata"
                onChange={handleChange}
              ></textarea>
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
