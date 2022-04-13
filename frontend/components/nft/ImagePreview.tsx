import React, { useRef, useState, useEffect } from 'react'
import { TrashIcon } from '@heroicons/react/solid'
import { FileUploader } from 'react-drag-drop-files'

type ImagePreviewProps = {
  setNftFormFields: (nftFormFields: any) => void
}

const ImageUpload = ({ setNftFormFields }: ImagePreviewProps) => {
  const [file, setFile] = useState<any>()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>()

  const filePickerRef = useRef<HTMLInputElement>(null)

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

  const pickImageHandler = () => {
    console.log('clicked')
    filePickerRef.current!.click()
  }

  const pickedHandler = (event: any) => {
    console.log('trigger')
    let pickedFile
    if (event.target?.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0]
      setFile(pickedFile)
      setNftFormFields((nftFormFields) => ({ ...nftFormFields, nftImage: pickedFile }))
    } else {
      setPreviewUrl(null)
    }
  }

  const removeFileHandler = () => {
    setFile(null)
    setPreviewUrl(null)
  }

  console.log('file', file)

  return (
    <div className="h-42 w-full">
      <input
        ref={filePickerRef}
        className="hidden"
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      <div>
        {previewUrl ? (
          <>
            <div className="flex flex-col justify-between px-2 py-2 sm:flex-row">
              <div className="mr-5 truncate text-base text-black">
                Uploaded picture title:{' '}
                <span className="underline decoration-rose-500 underline-offset-4">
                  {file.name}
                </span>
              </div>
              <div>
                <button
                  onClick={removeFileHandler}
                  className="flex w-32 justify-center rounded bg-rose-300 px-1 py-2 text-xs font-semibold text-black hover:bg-rose-800 hover:text-white"
                >
                  <TrashIcon className="mr-1 h-4 w-4" />
                  Remove this file
                </button>
              </div>
            </div>

            <div
              className="group relative bg-gradient-to-br from-blue-500 via-gray-500 to-rose-400"
              onClick={pickImageHandler}
            >
              <div className="group-hover:opacity-75">
                <img
                  src={previewUrl ? previewUrl.toString() : undefined}
                  alt="Preview"
                  className="max-h-lg cover w-full cursor-pointer self-center p-1"
                />
              </div>
            </div>
          </>
        ) : (
          <FileUploader handleChange={pickedHandler} name="file">
            <div className="m-auto h-80 max-w-md rounded-lg bg-gray-50 p-5 shadow-2xl">
              <div className="h-72 rounded border-4 border-dashed p-3 hover:border-gray-300 hover:bg-gray-100 ">
                <div className="flex items-center justify-center">
                  <label className="mt-10 flex flex-col">
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
                      <p className="mt-2 w-40 break-words text-center text-xs sm:w-full">
                        Upload is possible only for images of type .jpg, .jpeg, .png
                      </p>
                    </div>
                    <input type="file" className="opacity-0" />
                  </label>
                </div>
              </div>
            </div>
          </FileUploader>
        )}
      </div>
    </div>
  )
}

export default ImageUpload
