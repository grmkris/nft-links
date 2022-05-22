import {useWizard, Wizard} from "react-use-wizard";
import React, {useState} from "react";
import CreateNftStep1Metadata from "./CreateNftStep1Metadata";
import CreateNftStep2SelectImage from "./CreateNftStep2SelectImage";
import CreateNftStep3Config from "./CreateNftStep3Config";
import {NftModel} from "../../../model/nftModel";
import {FastForwardIcon, RewindIcon} from "@heroicons/react/solid";

export default function CreateNftWizard() {

  const [nftMetadata, setNftMetadata] = useState<NftModel>({
    title: '',
    description: '',
    image: ''
  })
  const [createNftForm, setCreateNftForm] = useState<{
    metadata: string,
    active: boolean,
    selectedBlockchain: string,
    amount: number,
  }>({
    metadata: '',
    active: false,
    selectedBlockchain: '',
    amount: 0
  })


  return (
    <div className="flex w-full flex-col items-center space-y-3">
      <Wizard startIndex={0} footer={<Footer/>} header={<Header/>}>
        <CreateNftStep1Metadata setCreateNftForm={setCreateNftForm} createNftForm={createNftForm}
                                setNftMetadata={setNftMetadata} nftMetadata={nftMetadata}/>
        <CreateNftStep2SelectImage setCreateNftForm={setCreateNftForm} createNftForm={createNftForm}
                                   setNftMetadata={setNftMetadata} nftMetadata={nftMetadata}/>

        <CreateNftStep3Config setCreateNftForm={setCreateNftForm} createNftForm={createNftForm}/>

      </Wizard>
    </div>
  );
}

const Header = () => {
  const {
    activeStep
  } = useWizard();
  return (
    <div className={"items-center flex flex-col mt-4"}>
      <ul className="steps btn-group">
        <li className={"step step-primary"}>Create metadata</li>
        <li className={activeStep >= 1 ? "step step-primary" : "step"}>Select image</li>
        <li className={activeStep >= 2 ? "step step-primary" : "step"}>Configure NFT</li>
        <li className={activeStep >= 3 ? "step step-primary" : "step"}>Finish</li>
      </ul>
      <div className="divider"></div>
    </div>
  )
}
const Footer = () => {
  const {
    nextStep,
    previousStep,
    isLoading,
    isLastStep,
    isFirstStep,
  } = useWizard();

  return (

    <div className={"items-center flex flex-col max-w-2xl w-full"}>
      <div className="btn-group grid grid-cols-2 m-2 w-4/5">
        <button
          className={'btn-primary btn'}
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          <RewindIcon className={"h-4"}/>
          Back
        </button>
        <button
          className={'btn-primary btn'}
          onClick={() => nextStep()} disabled={isLoading || isLastStep}>
          Next
          <FastForwardIcon className={"h-4"}/>
        </button>
      </div>
    </div>
  );
};