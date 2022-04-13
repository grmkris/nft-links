import 'react-loading-skeleton/dist/skeleton.css'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useQueryClient } from 'react-query'
import { useUser } from '@supabase/supabase-auth-helpers/react'

export const GroupsModal = () => {

  const [inputs, setInputs] = useState<{
    name
    description
    image
  }>({
    name: '',
    description: '',
    image: ''
  })
  const { user } = useUser()
  const queryCache = useQueryClient()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // create group through supabase client
    const result = await supabaseClient.from('groups').insert({
      creator: user.id,
      name: inputs.name,
      description: inputs.description,
      image: inputs.image
    })
    if (result.error) {
      toast.error(result.error.message)
    } else {
      toast.success(`Group ${inputs.name} created!`)
      await queryCache.invalidateQueries('groups')
      // close the modal after successful creation
      document.getElementById('my-modal-6')?.click()
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  return (
    <div>
      <label htmlFor="my-modal-6" className="btn modal-button">Create new group</label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle"/>
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form className={'form-control'} onSubmit={handleSubmit}>
              <label>Group name</label>
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Group name"
                type="text"
                name="name"
                value={inputs.name || ''}
                onChange={handleChange}
              />
              <label>Description</label>
              <textarea
                className="textarea textarea-bordered w-full max-w-xs"
                name="description"
                placeholder="Description"
                value={inputs.description || ''}
                onChange={handleChange}
              />
              <div className="modal-action">
                <button data-dismiss="my-modal-6" className="btn" type={'submit'}>Create</button>
                <label htmlFor="my-modal-6" className="btn" >Close</label>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
