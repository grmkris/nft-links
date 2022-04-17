import type { NextApiRequest, NextApiResponse } from 'next'
import {supabaseServerClient} from "../../../utils/server/supabaseServer";
import { utils } from 'ethers'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const {body: {address, signedNonce}} = request;
  console.log(signedNonce);
  const user = await supabaseServerClient.auth.api.getUser(request.headers.authorization.slice(7))

  // find the user's wallet in user_wallet table
  console.log('userid', user.user.id)
  console.log('address', address)
  const wallet = await supabaseServerClient.from('user_wallet').select('*').match({
    user_id: user.user.id,
    wallet: address
  })

  console.log('wallet', wallet);
  // if the wallet doesn't exist, return error
  if (!wallet) {
    response.status(404).json({
      error: 'Wallet not found'
    })
    return
  }

  // check if signedNonce is nonce signed by address
  console.log('signedNonce', signedNonce)
  console.log('wallet.data[0].nonce', wallet.data[0].nonce)
  const recoveredAddress = utils.verifyMessage(wallet.data[0].nonce, signedNonce)

  // The signature verification is successful if the address found with
  console.log('recoveredAddress', recoveredAddress);
  if (recoveredAddress.toLowerCase() !== wallet.data[0].wallet.toLowerCase()) {
    return response.status(400).send({
      error: 'Signature verification failed'
    })
  }

  // if the signature is verified, update the wallet's signedNonce
  console.log('Wallet found, updating signedNonce');
  const supabaseResponse = await supabaseServerClient.from('user_wallet').update({
    signed_nonce: signedNonce
  }).match({
    user_id: user.user.id,
  })

  return response.status(200).json(supabaseResponse)

}