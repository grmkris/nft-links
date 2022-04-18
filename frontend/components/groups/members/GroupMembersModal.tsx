import 'react-loading-skeleton/dist/skeleton.css'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useQueryClient } from 'react-query'
import { PencilIcon, PlusIcon } from "@heroicons/react/solid";

export const GroupMembersModal = (props : { member: {created_at : Date, user_id: string, group_id: string, name: string, email: string}, group_id: string }) => {

  const [inputs, setInputs] = useState<{
    email: string,
    name: string,
    group_id: string,
  }>({
    name: props.member?.name ? props.member.name : '',
    email: props.member?.email ? props.member.email : '',
    group_id: props.member?.group_id ? props.member.group_id : '',
  })
  const queryCache = useQueryClient()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // create group through supabase client
    console.log({
      email: inputs.email,
      name: inputs.name,
      group_id: props.group_id,
    })
    const result = await supabaseClient.from('user_groups').insert({
      email: inputs.email,
      name: inputs.name,
      group_id: props.group_id,
    })
    if (result.error) {
      toast.error(result.error.message)
    } else {
      toast.success(`Member added to the group!`)
      await queryCache.invalidateQueries('groups')
      // close the modal after successful creation
      document.getElementById('add-edit-member-modal')?.click()
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  return (
    <>
      <label htmlFor="add-edit-member-modal" className="btn btn-primary">{props.member? <PencilIcon className={"w-5 h-5"}/> :<PlusIcon className={"w-5 h-5"}/>}</label><input
        type="checkbox" id="add-edit-member-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h2 className={"text-2xl"}>Add member to a group</h2>
            <form className={"form-control"} onSubmit={handleSubmit}>
              <label className={"label"}>Member name</label>
              <input
                className="input input-bordered text-base"
                placeholder="Member name"
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange} />
              <label className={"label"}>Member email</label>
              <input
                type={"email"}
                className="textarea textarea-bordered text-base-content"
                name="email"
                placeholder="Email"
                value={inputs.email || ""}
                onChange={handleChange} />
              <div className="modal-action">
                <label htmlFor="add-edit-member-modal" className="btn btn-secondary">Close</label>
                <button data-dismiss="groups-modal" className="btn btn-primary" type={"submit"}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}
