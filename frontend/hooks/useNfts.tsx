import { useQuery } from "react-query";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

export const useNfts = () => {
  return useQuery("nfts", async () =>
    // get groups with their members from the supabase database
    await supabaseClient.from("nfts").select("*")
  );
};