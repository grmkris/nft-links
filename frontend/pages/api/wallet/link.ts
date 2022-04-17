import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from "crypto"
import { supabaseServerClient } from "../../../utils/server/supabaseServer";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const {query: { address } } = request;
  console.log(address);
  const user = await supabaseServerClient.auth.api.getUser(request.headers.authorization.slice(7))

  // check in supabase table user_wallet if address is already linked
  let userWallet = await supabaseServerClient.from('user_wallet').select('*').match({wallet: address, signed_nonce: true});

  // wallet already linked to an account
  if (userWallet.data.length !== 0)
    return response.status(400).json({
      error: 'Wallet already linked to an account'
    })

  // wallet has not been successfully linked to any account, initiate link
  const nonce = crypto.randomUUID();
  // check if user already tried to link this wallet
  userWallet = await supabaseServerClient.from('user_wallet').select('*').match({wallet: address, user_id: user.user.id});
  if (userWallet.data.length === 0) {
    // user has not tried to link this wallet yet, create new entry
    await supabaseServerClient.from('user_wallet').insert({
      user_id: user.user.id,
      wallet: address,
      nonce: nonce
    });
  } else {
    // user has already tried to link this wallet but not succeeded, update nonce
    await supabaseServerClient.from('user_wallet').update({
      nonce: nonce
    }).match({
      user_id: user.user.id,
      wallet: address
    });
  }
  return response.status(200).json({nonce: nonce});

}