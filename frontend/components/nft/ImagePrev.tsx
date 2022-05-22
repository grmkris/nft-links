import React, { useRef, useState, useEffect } from 'react'
import { PhotographIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ClipboardCopyIcon } from '@heroicons/react/solid'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { useQueryClient } from 'react-query'

const ImageUpload = (props: { onFileSelected?: (pickedFile: string) => void }) => {
  const { accessToken } = useUser()
  const [file, setFile] = useState()
  const [fileIpfsHash, setFileIpfsHash] = useState()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>()
  const queryClient = useQueryClient()

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

  const uploadToServer = async () => {
    const body = new FormData()
    body.append('file', file)
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
    toast.info('File uploaded to IPFS, hash: ' + result.data.data[0].id)
    setFileIpfsHash(result.data.data[0].id)
    if (props.onFileSelected) {
      props.onFileSelected(result.data.data[0].id)
    }
    await queryClient.invalidateQueries('files')
  }

  const pickImageHandler = () => {
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
    <>
      <div className="items-center flex flex-col hover:cursor-pointer">
        <input
          ref={filePickerRef}
          className="hidden"
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={pickedHandler}
        />
        <div
          className={`w-full flex h-[340px] items-center rounded-lg bg-gray-50 p-5 shadow-2xl bg-neutral mx-2`}
          onClick={pickImageHandler}
        >
          {previewUrl ? (
            <Image
              layout={'fill'}
              src={previewUrl ? previewUrl.toString() : undefined}
              alt="Preview"
              className="h-[315px] rounded-lg"
            />
          ) : (
            <div className="flex w-full flex-col items-center justify-center space-y-2 text-accent">
              <PhotographIcon className="h-20 w-20" />
              <p className="w-full text-center">Please pick an image</p>
              <p className="w-2/3 text-center text-xs">
                Image must be in format .jpg, .jpeg or .png
              </p>
            </div>
          )}
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
  )
}

export default ImageUpload
