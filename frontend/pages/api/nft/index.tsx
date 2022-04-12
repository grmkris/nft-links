import { NextApiRequest, NextApiResponse } from 'next'
import { pinata } from '../../../utils/server/pinataServer'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    default:
    case 'GET': {
      const filter = {
        hashContains: 'QmWDrAa6UfDLBEzTr5aSrbJcJivqxXMu9zucYqTs5oAbYN'
      }
      const response = await pinata.pinList(filter)

      res.status(200).json(response)
    }
  }
}
