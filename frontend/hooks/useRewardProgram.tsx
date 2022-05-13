import { useQuery } from "react-query";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

export const useRewardProgram = () => {
  return useQuery("rewardProgram", async () =>
    // get groups with their members from the supabase database
    await supabaseClient.from("reward_program").select("*")
  );
};