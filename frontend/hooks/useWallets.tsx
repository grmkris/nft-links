import { useQuery } from "react-query";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

export const useWallets = () => {
  return useQuery("linked-wallet-list", async () =>
    await supabaseClient.from("user_wallet").select("*")
  );
};