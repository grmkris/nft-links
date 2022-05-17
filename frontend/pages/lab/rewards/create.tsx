import React, {useState} from "react";
import LabLayout from '../../../components/layout/LabLayout'
import {useUser} from "@supabase/supabase-auth-helpers/react";
import {supabaseClient} from "@supabase/supabase-auth-helpers/nextjs";
import {useNfts} from "../../../hooks/useNfts";
import {useGroups} from "../../../hooks/useGroups";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

function CreateReward() {
  const router = useRouter();
  const {user} = useUser()
  const {data, isLoading} = useNfts()
  const {data: groupData } = useGroups()
  const [createRewardForm, setCreateRewardForm] = useState<{
    name: string,
    description: string,
    condition: string,
    reward: string,
    group: string,
  }>({
    name: '',
    description: '',
    condition: undefined,
    reward: undefined,
    group: undefined,
  })

  const handleChangeRewardForm = (e) =>
    setCreateRewardForm((prevState) => ({...prevState, [e.target.name]: e.target.value}))

  const submitHandler = async (e) => {
    e.preventDefault()
    // create reward program
    const result_reward_program = await supabaseClient.from('reward_program').insert({
      name: createRewardForm.name,
      description: createRewardForm.description,
      owner: user.id
    })
    // insert into reward_nft table
    const rewardProgramId = result_reward_program.data
    const result_reward_nft = await supabaseClient.from('reward_nft').insert({
      nft: createRewardForm.reward,
      reward_program: rewardProgramId[0].id,
      condition: createRewardForm.condition,
    })
    // insert into reward_groups table
    const result_reward_groups = await supabaseClient.from('reward_groups').insert({
      reward_program: rewardProgramId[0].id,
      group: createRewardForm.group,
    })
    if (result_reward_program.status === 201 && result_reward_nft.status === 201 && result_reward_groups.status === 201) {
      toast.success('Reward program created successfully')
      router.push('/lab/rewards')
    } else {
      toast.error('Reward program creation failed')
      console.log('result_reward_program', result_reward_program)
      console.log('result_reward_nft', result_reward_nft)
      console.log('result_reward_groups', result_reward_groups)
    }
  }

  return (
    <LabLayout>
      <form onSubmit={submitHandler}>

        <div className="flex w-full flex-col justify-center md:flex-row md:py-12 md:px-6 ">

          <div className="form-control grid grid-cols-2">
            <div className={"col-span-2"}>
              <label className="label">
                <span className="label-text font-semibold text-secondary">Name</span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                onChange={handleChangeRewardForm}
              />
            </div>
            <div className={"col-span-2 w-full"}>
              <label className="label">
                <span className="label-text font-semibold text-secondary">Description</span>
              </label>
              <textarea
                name="description"
                className="input input-bordered w-full h-28"
                onChange={handleChangeRewardForm}
              />
            </div>

            <div className="col-span-2 w-full min-w-full">
              <label className="label">
                <span className="label-text font-semibold text-secondary">Reward</span>
              </label>
              <select
                name="reward"
                className="select select-secondary w-full max-w-xs"
                placeholder={'props.placeholder'}
                value={createRewardForm.reward}
                onChange={handleChangeRewardForm}
                defaultValue={0}
              >
                <option value={0} disabled>
                  Select a reward
                </option>
                {isLoading ? <option>Loading...</option> : data.data &&
                 data.data.map((nft) => (
                  <option key={nft.id} value={nft.id}>
                    {nft.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-2 w-full min-w-full">
              <label className="label">
                <span className="label-text font-semibold text-secondary">Groups</span>
              </label>
              <select
                name="group"
                className="select select-secondary w-full max-w-xs"
                placeholder={'props.placeholder'}
                onChange={handleChangeRewardForm}
                defaultValue={0}
              >
                <option value={0} disabled>
                  Select a group
                </option>
                {isLoading ? <option>Loading...</option> : groupData?.data &&
                  groupData.data.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-span-2 w-full min-w-full">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">Condition</span>
              </label>
              <select
                name="condition"
                className="select select-secondary w-full max-w-xs bg-white"
                placeholder={'props.placeholder'}
                value={createRewardForm.condition}
                onChange={handleChangeRewardForm}
                defaultValue={0}
              >
                <option value={0} disabled>
                  Select condition
                </option>
                <option>Excel</option>
                <option>Event</option>
                <option>Social media</option>
                <option>Referral</option>
                <option>Other</option>
              </select>
            </div>

            <div className="w-full max-w-xs">
              <button className="btn btn-secondary mt-8 w-full" type="submit">
                Create Reward Program
              </button>
            </div>
          </div>
        </div>
      </form>
    </LabLayout>
  )
}

export default CreateReward;