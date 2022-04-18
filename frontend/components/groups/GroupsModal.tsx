import 'react-loading-skeleton/dist/skeleton.css'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useQueryClient } from 'react-query'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { PencilIcon, PlusIcon } from "@heroicons/react/solid";

export const GroupsModal = (props: {group?: {name: string, description: string, image: string}}) => {

  const [inputs, setInputs] = useState<{
    name
    description
    image
  }>({
    name: props.group?.name ? props.group.name : '',
    description: props.group?.description ? props.group.description : '',
    image: props.group?.image ? props.group.image : '',
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
      document.getElementById('groups-modal')?.click()
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  return (
    <>
      <label htmlFor="groups-modal" className="btn btn-primary">{props.group? <PencilIcon className={"w-5 h-5"}/> :<PlusIcon className={"w-5 h-5"}/>}</label><input
        type="checkbox" id="groups-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h2 className={"text-2xl"}>Create a group</h2>
            <form className={"form-control"} onSubmit={handleSubmit}>
              <label className={"label"}>Group name</label>
              <input
                className="input input-bordered text-base"
                placeholder="Group name"
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange} />
              <label className={"label"}>Description</label>
              <textarea
                className="textarea textarea-bordered text-base-content"
                name="description"
                placeholder="Description"
                value={inputs.description || ""}
                onChange={handleChange} />
              <div className="modal-action">
                <label htmlFor="groups-modal" className="btn btn-secondary">Close</label>
                <button data-dismiss="groups-modal" className="btn btn-primary" type={"submit"}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}
