import 'react-loading-skeleton/dist/skeleton.css';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { useQueryClient } from 'react-query';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { PencilIcon, PlusIcon } from '@heroicons/react/solid';
import { definitions } from 'types/database';

export const GraphProjectModal = (props: {
  graphProject?: { name: string; description: string; repository: string; chain: string };
}) => {
  const [inputs, setInputs] = useState<{
    name;
    description;
    repository;
    chain;
  }>({
    name: props.graphProject?.name ? props.graphProject.name : '',
    description: props.graphProject?.description ? props.graphProject.description : '',
    repository: props.graphProject?.repository ? props.graphProject.repository : '',
    chain: props.graphProject?.chain ? props.graphProject.chain : '',
  });
  const { user } = useUser();
  const queryCache = useQueryClient();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // create group through supabase client
    const result = await supabaseClient
      .from<definitions['graph_projects']>('graph_projects')
      .insert({
        repository: inputs.repository,
        name: inputs.name,
        description: inputs.description,
        chain: inputs.chain,
        user_id: user.id,
      });
    if (result.error) {
      toast.error(result.error.message);
    } else {
      // register new graph project in graph node

      toast.success(`Project ${inputs.name} created!`);
      await queryCache.invalidateQueries('graph_projects');
      // close the modal after successful creation
      document.getElementById('graph-projects-modal')?.click();
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <label htmlFor='graph-projects-modal' className='btn btn-primary'>
        {props.graphProject ? (
          <PencilIcon className={'h-5 w-5'} />
        ) : (
          <PlusIcon className={'h-5 w-5'} />
        )}
      </label>
      <input type='checkbox' id='graph-projects-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h2 className={'text-2xl'}>Create a graph project</h2>
          <form className={'form-control'} onSubmit={handleSubmit}>
            <label className={'label'}>Project name</label>
            <input
              className='input input-bordered text-base'
              placeholder='Project name'
              type='text'
              name='name'
              value={inputs.name || ''}
              onChange={handleChange}
            />
            <label className={'label'}>Description</label>
            <textarea
              className='textarea textarea-bordered text-base-content'
              name='description'
              placeholder='Description'
              value={inputs.description || ''}
              onChange={handleChange}
            />
            <label className={'label'}>Chain</label>
            <input
              className='input input-bordered text-base'
              type='text'
              name='chain'
              placeholder='Chain'
              value={inputs.chain || ''}
              onChange={handleChange}
            />
            <label className={'label'}>Repository</label>
            <input
              className='input input-bordered text-base'
              type='text'
              name='repository'
              placeholder='Repository'
              value={inputs.repository || ''}
              onChange={handleChange}
            />
            <div className='modal-action'>
              <label htmlFor='graph-projects-modal' className='btn btn-secondary'>
                Close
              </label>
              <button
                data-dismiss='graph-projects-modal'
                className='btn btn-primary'
                type={'submit'}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
