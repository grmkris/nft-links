import React from "react";
import {useWizard} from "react-use-wizard";
import ImagePrev from "../ImagePrev";


export default function CreateNftStep2SelectImage(props: {createNftForm, setCreateNftForm}) {

  const { handleStep } = useWizard();

  // Async function
  handleStep(async () =>
    console.log(props.createNftForm.selectedImage)
  );

  return (
    <div className="flex w-full flex-col items-center space-y-3 h-[500px] max-h-[500px]">

          <ImagePrev />


        <div className="divider m-auto">OR</div>

        <div className="grid place-items-center w-full ">
          <label
            className="cursor-pointer	rounded-full px-2 py-3  text-center font-bold text-indigo-500 underline decoration-indigo-500 decoration-2 underline-offset-2  sm:w-1/3 md:w-1/2"
            htmlFor="image-selector-modal"
          >
            Pick from album
          </label>
        </div>
      </div>
  );
}