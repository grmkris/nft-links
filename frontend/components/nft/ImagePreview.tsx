import React, { useRef, useState, useEffect, ChangeEvent } from 'react'

const ImageUpload = () => {
  const [file, setFile] = useState()
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
    filePickerRef.current!.click()
  }

  const pickedHandler = (event: any) => {
    console.log('trigger')
    let pickedFile
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0]
      setFile(pickedFile)
    } else {
      setPreviewUrl(null)
    }
  }
  return (
    <div className="flex h-80 justify-center">
      <input
        ref={filePickerRef}
        className="hidden"
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      <div onClick={pickImageHandler}>
        {previewUrl ? (
          <img
            src={previewUrl ? previewUrl.toString() : undefined}
            alt="Preview"
            className="h-full w-full self-center border-4 p-2"
            style={{
              objectFit: 'cover'
            }}
          />
        ) : (
          <div className="h-80 rounded-lg bg-gray-50 p-5 shadow-2xl">
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
        )}
      </div>
    </div>
  )
}

export default ImageUpload
