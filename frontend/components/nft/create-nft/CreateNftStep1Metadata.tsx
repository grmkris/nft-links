import React from "react";
import {useWizard} from "react-use-wizard";

export default function CreateNftStep1Metadata(props: {createNftForm, setCreateNftForm, nftMetadata, setNftMetadata}) {

  const { handleStep } = useWizard();

  // Async function
  handleStep( async () => {
    console.log(props.nftMetadata)
  });


  const handleChangeNftMetadata = (e) =>
    props.setNftMetadata((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))

  return (
    <div className="flex w-full flex-col items-center space-y-3 h-[500px] max-h-[500px] shadow-xl">
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