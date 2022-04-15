import { useQuery } from "react-query";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

// all wallets with signedNonce that belong to user
export const useWallets = () => {
  return useQuery("linked-wallet-list", async () =>
    // find user_wallet where signed_nonce is not null
    await supabaseClient.from("user_wallet").select("*").neq("signed_nonce", null)
  );
};