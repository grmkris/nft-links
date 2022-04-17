import React, { useRef, useState, useEffect } from 'react'
import { PhotographIcon } from '@heroicons/react/outline'

type ImagePrevProps = {
  setNftFormFields: (prevState) => void
}

const ImageUpload = ({ setNftFormFields }: ImagePrevProps) => {
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
    setNftFormFields((prevState) => ({ ...prevState, nftImage: pickedFile }))
  }
  return (
    <div className="relative m-auto w-full">
      <input
        ref={filePickerRef}
        className="hidden"
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      <div
        className={`m-auto flex h-[440px] max-w-md items-center rounded-lg bg-gray-50 p-5 shadow-2xl`}
        onClick={pickImageHandler}
      >
        {previewUrl ? (
          <img
            src={previewUrl ? previewUrl.toString() : undefined}
            alt="Preview"
            className="h-[415px] rounded-lg"
          />
        ) : (
          <div className="flex w-full flex-col items-center justify-center">
            <PhotographIcon className="h-20 w-20" />
            <p className="mt-2 w-full text-center">Please pick an image</p>
            <p className="text-sm text-gray-400">Image must be in format .jpg, .jpeg or .png</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageUpload
