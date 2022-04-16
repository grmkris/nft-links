import { useQuery } from "react-query";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

export const useGroups = () => {
  return useQuery("groups", async () =>
    // get groups with their members from the supabase database
    await supabaseClient.from("groups").select("*, user_groups(*)")
  );
};