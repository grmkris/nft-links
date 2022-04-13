import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout/Layout'
import axios from 'axios'
import ImagePreview from '../../../components/nft/ImagePreview'
import { nftModel } from '../../../model/nftModel'
import { FileUploader } from 'react-drag-drop-files'

function CreateNFT() {
  const [ipfsFiles, setIpfsFiles] = useState([])
  const [nftFormFields, setNftFormFields] = useState<nftModel>({
    nftTitle: '',
    nftDescription: '',
    nftBlockchain: '',
    nftMetadata: '',
    nftImage: {}
  })

  const handleChange = (e) =>
    setNftFormFields((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))

  const getData = async () => {
    const response = await axios.get('/api/nft')
    setIpfsFiles(response.data.rows)
    console.log(response)
  }

  useEffect(() => {
    getData()
  }, [])

  const submitHandler = async () => {
    const response = await axios.post('/api/nft', nftFormFields)
    console.log(response)
  }

  const handleChange2 = (file) => {
    console.log(file)
  }

  console.log('nftFormFields', nftFormFields)

  return (
    <Layout headerTitle={'Create NFT'}>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-white" htmlFor="">
          <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
          <div className="w-5/6  rounded-lg bg-gray-50 p-5 shadow-2xl ">
            <div className="h-full ">
              <label className="mb-2 inline-block text-gray-500">Select previous images</label>

              <div className="grid max-h-72 grid-cols-4 overflow-y-auto">
                {ipfsFiles.map((file) => (
                  <div key={file.metadata.name} className="m-3 h-32 w-32 border-2">
                    {file.metadata.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </label>
      </label>

      <div className="flex w-full flex-col justify-center bg-white md:flex-row md:py-12 md:px-6 2xl:px-48">
        <div className="flex w-full flex-col space-y-4 md:w-1/2">
          <ImagePreview setNftFormFields={setNftFormFields} />

          <FileUploader handleChange={handleChange2} name="file">
            hey hey
          </FileUploader>

          <div className="divider m-auto w-1/2">OR</div>

          <div className="grid place-items-center ">
            <label
              className="w-3/4 cursor-pointer rounded-full bg-indigo-500 px-2 py-3 text-center text-white hover:bg-indigo-800 sm:w-1/3 md:w-1/2"
              htmlFor="my-modal-4"
            >
              Pick from album
            </label>
          </div>
        </div>
        <div className="flex w-full flex-col items-center space-y-3 md:w-1/2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold text-slate-700">NFT Title</span>
            </label>
            <input
              name="nftTitle"
              type="text"
              placeholder="Enter NFT Title"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={handleChange}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold text-slate-700">NFT Description</span>
            </label>
            <textarea
              name="nftDescription"
              className="textarea textarea-primary"
              placeholder="Describe your NFT"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold text-slate-700">NFT Blockchain</span>
            </label>
            <select
              name="nftBlockchain"
              className="select select-primary w-full max-w-xs"
              placeholder={'props.placeholder'}
              value={nftFormFields.nftBlockchain}
              onChange={handleChange}
            >
              <option value={0} disabled>
                Select Blockchain
              </option>
              <option>Etherium</option>
              <option>Polygon</option>
              <option>Blabla</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold text-slate-700">NFT Metadata</span>
            </label>
            <textarea
              className="textarea textarea-primary"
              placeholder="Metadata"
              name="nftMetadata"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="w-1/2">
            <button
              className="mt-8  w-full rounded bg-emerald-400 px-2 py-3 text-white hover:bg-emerald-600"
              onClick={submitHandler}
            >
              Save NFT to IPFS
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateNFT
