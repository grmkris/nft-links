import "react-loading-skeleton/dist/skeleton.css";
import React, { useState } from "react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import { toast } from "react-toastify";
import { GroupsTable } from "./GroupsTable";
import {  useQueryClient } from "react-query";

export const GroupsSettings = () => {
  const [inputs, setInputs] = useState<{
    name
    description
    image
  }>({
    name: "",
    description: "",
    image: ""
  });
  const { user } = useUser();
  const queryCache = useQueryClient()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // create group through supabase client
    const result = await supabaseClient.from("groups").insert({
      creator: user.id,
      name: inputs.name,
      description: inputs.description,
      image: inputs.image
    });
    if (result.error) {
      toast.error(result.error.message);
    } else {
      toast(`Group ${inputs.name} created!`);
      await queryCache.invalidateQueries("groups");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <div className="card m-2 max-w-prose bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Manage your groups</h2>
          <p className="card-text">You can create and manage your groups here.</p>
          {
            // form to create a group with name, description, and image
            <form className={"form-control w-full max-w-xs"} onSubmit={handleSubmit}>
              <label>Group name</label>
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Group name"
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
              <label>Description</label>
              <textarea
                className="textarea textarea-bordered w-full max-w-xs"
                name="description"
                placeholder="Description"
                value={inputs.description || ""}
                onChange={handleChange}
              />
              <div className="text-center">
                <button className="btn btn-primary" type={"submit"}>
                  Create a group
                </button>
              </div>
            </form>
          }
        </div>
      </div>
      <GroupsTable />
    </>
  );
};
