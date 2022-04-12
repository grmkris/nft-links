import { NextApiRequest, NextApiResponse } from 'next'
import { pinata } from '../../../utils/server/pinataServer'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    default:
    case 'GET': {
      const response = await pinata.testAuthentication()

      res.status(200).json({ msg: response })
    }
  }
}
