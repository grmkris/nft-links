import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout/Layout'
import axios from 'axios'
import ImagePreview from '../../../components/nft/ImagePreview'

function CreateNFT() {
  const [ipfsFiles, setIpfsFiles] = useState([])
  const [nftFormFields, setNftFormFields] = useState({
    nftTitle: '',
    nftDescription: '',
    nftBlockchain: '',
    nftMetadata: ''
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

  console.log('ipfsFiles', ipfsFiles)

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
                <div className="m-3 h-32 w-32 border-2">Picture 1</div>
                <div className="m-3 h-32 w-32 border-2">Picture 1</div>
                <div className="m-3 h-32 w-32 border-2">Picture 1</div>
                <div className="m-3 h-32 w-32 border-2">Picture 1</div>
                <div className="m-3 h-32 w-32 border-2">Picture 1</div>
                <div className="m-3 h-32 w-32 border-2">Picture 1</div>
                <div className="m-3 h-32 w-32 border-2">Picture 1</div>
                <div className="m-3 h-32 w-32 border-2">Picture 1</div>
                <div className="m-3 h-32 w-32 border-2">Picture 1</div>
              </div>
            </div>
          </div>
        </label>
      </label>

      <div className="m-auto flex w-full flex-col justify-center bg-white p-5 md:flex-row lg:w-3/4">
        <div className="flex w-full flex-col space-y-4 px-12">
          <ImagePreview />

          <div className="divider">OR</div>

          <div className="grid place-items-center ">
            <label
              className="w-1/3 cursor-pointer rounded-full bg-indigo-500 px-2 py-3 text-center text-white hover:bg-indigo-800"
              htmlFor="my-modal-4"
            >
              Pick from album
            </label>
          </div>

          <div className="grid max-h-72 grid-cols-4 overflow-y-auto">
            {ipfsFiles.map((file) => (
              <div key={file.metadata.name} className="m-3 h-32 w-32 border-2">
                {file.metadata.name}
              </div>
            ))}
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
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
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

          <div>
            <button className="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateNFT
