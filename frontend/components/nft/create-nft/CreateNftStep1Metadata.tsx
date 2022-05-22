import {toast} from "react-toastify";
import React from "react";
import {useWizard} from "react-use-wizard";
import axios from "axios";
import {useUser} from "@supabase/supabase-auth-helpers/react";
import {useQueryClient} from "react-query";

export default function CreateNftStep1Metadata(props: {createNftForm, setCreateNftForm, nftMetadata, setNftMetadata}) {

  const { accessToken } = useUser()
  const { handleStep } = useWizard();
  const queryClient = useQueryClient()

  const uploadToServer = async () => {
    const toastId = toast.info('Uploading to server...', {
      position: "top-right",
      isLoading: true,
    })
    const body = new FormData()
    body.append('json', JSON.stringify(props.nftMetadata))
    const result = await axios.post('/api/ipfs/upload', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    console.log(result)
    await toast.dismiss(toastId)
    if (result.data.error) {
      toast.error(result.data.error.message)
      return
    }
    toast.info('Metadata created')
    props.setCreateNftForm({
      ...props.createNftForm,
      metadata: result.data.data[0].id
    })
    await queryClient.invalidateQueries('files')
  }

  // Async function
  handleStep( async () => {
    if (props.createNftForm.metadata !== '') {
      return
    }
    await uploadToServer()
  });


  const handleChangeNftMetadata = (e) =>
    props.setNftMetadata((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))

  return (
    <div className="flex w-full flex-col items-center space-y-3 h-[500px] max-h-[500px]">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-semibold text-secondary">Title</span>
        </label>
        <input
          name="title"
          type="text"
          placeholder="Enter Title"
          className="input input-bordered w-full"
          onChange={handleChangeNftMetadata}
          value={props.nftMetadata.title}
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-semibold text-secondary">Description</span>
        </label>
        <textarea
          name="description"
          className="input input-bordered w-full"
          placeholder="Describe your NFT"
          onChange={handleChangeNftMetadata}
          value={props.nftMetadata.description}
        ></textarea>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-semibold text-secondary  ">Additional Metadata</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Additional JSON metadata"
          name="additionalMetadata"
          onChange={handleChangeNftMetadata}
          value={props.nftMetadata.additionalMetadata ? props.nftMetadata.additionalMetadata : ''}
        ></textarea>
      </div>
    </div>
  );
}