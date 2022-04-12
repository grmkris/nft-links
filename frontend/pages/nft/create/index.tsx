import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout/Layout'
import axios from 'axios'

function CreateNFT() {
  const [ipfsFiles, setIpfsFiles] = useState([])

  const getData = async () => {
    const response = await axios.get('/api/nft')
    setIpfsFiles(response.data.rows)
    console.log(response)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log('ipfsFiles', ipfsFiles)

  /* const getAlbumImages = async () => {
    const response = await axios.get()
  } */

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
          <div className="rounded-lg bg-gray-50 p-5 shadow-2xl">
            <div className="h-72 border-4 border-dashed p-3 hover:border-gray-300 hover:bg-gray-100">
              <label className="mb-2 inline-block text-gray-500">
                Upload Image(jpg,png,svg,jpeg)
              </label>
              <div className="flex w-full items-center justify-center">
                <label className="flex w-full flex-col ">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-400 group-hover:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Select a photo
                    </p>
                  </div>
                  <input type="file" className="opacity-0" />
                </label>
              </div>
            </div>
          </div>

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
              type="text"
              placeholder="Enter NFT Title"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold text-slate-700">NFT Description</span>
            </label>
            <textarea
              className="textarea textarea-primary"
              placeholder="Describe your NFT"
            ></textarea>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold text-slate-700">NFT Title</span>
            </label>
            <select className="select select-primary w-full max-w-xs">
              <option defaultChecked disabled>
                Select Blockchain for your NFT
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
            <textarea className="textarea textarea-primary" placeholder="Metadata"></textarea>
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
