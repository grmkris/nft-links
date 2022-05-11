import { NextApiRequest, NextApiResponse } from 'next'
import {supabaseServerClient} from "../../../utils/server/supabaseServer";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { uuid } = req.query
  if (!uuid) {
    res.status(400).json({
      error: 'Missing address'
    })
    return
  }
  // get nfts information from supabase client
  const nft = await supabaseServerClient.from('nfts').select('*').match({
    id: uuid,
  })
  return res.status(200).json(nft);
}
