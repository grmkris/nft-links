import React from 'react';
import { useWizard } from 'react-use-wizard';

export default function CreateNftStep1Config(props: { createNftForm; setCreateNftForm }) {
  const { handleStep } = useWizard();

  // Async function
  handleStep(async () => {
    console.log(props.createNftForm.config);
  });

  const handleChangeCreateNftForm = (e) =>
    props.setCreateNftForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  return (
    <div className='flex w-full flex-col items-center space-y-3'>
      <div className='form-control grid w-full max-w-xs grid-cols-2'>
        <div>
          <label className='label'>
            <span className='label-text font-semibold text-primary'>Active</span>
          </label>
          <input
            name='active'
            type='checkbox'
            className='checkbox checkbox-primary'
            onChange={handleChangeCreateNftForm}
            value={props.createNftForm.active}
          />
        </div>

        <div>
          <label className='label'>
            <span className='label-text font-semibold text-primary'>Amount</span>
          </label>
          <input
            name='amount'
            type='number'
            placeholder='Amount'
            className='input input-bordered input-primary w-full max-w-xs'
            onChange={handleChangeCreateNftForm}
            value={props.createNftForm.amount}
          />
        </div>
      </div>

      <div className='form-control w-full max-w-xs'>
        <label className='label'>
          <span className='label-text font-semibold text-primary'>Blockchain</span>
        </label>
        <select
          name='selectedBlockchain'
          className='select select-primary w-full max-w-xs'
          placeholder={'props.placeholder'}
          value={props.createNftForm.selectedBlockchain}
          onChange={handleChangeCreateNftForm}
        >
          <option value={0} disabled>
            Select Blockchain
          </option>
          <option>ICP(Dfinity)</option>
          <option>Ethereum</option>
          <option>Polygon</option>
        </select>
      </div>
    </div>
  );
}
