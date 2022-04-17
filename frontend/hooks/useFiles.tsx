import { useQuery } from "react-query";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

export const useFiles = () => {
  return useQuery("files", async () =>
    // get groups with their members from the supabase database
    await supabaseClient.from("files").select("*")
  );
};