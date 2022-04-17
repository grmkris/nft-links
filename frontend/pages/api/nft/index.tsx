import { NextApiRequest, NextApiResponse } from 'next'
import { pinata } from '../../../utils/server/pinataServer'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    default:
    case 'GET': {
      const filter = {
        hashContains: 'QmWDrAa6UfDLBEzTr5aSrbJcJivqxXMu9zucYqTs5oAbYN'
      }
      const response = await pinata.pinList(filter)

      if (response) {
        res.status(200).json(response)
      }
    }
    case 'POST': {
      console.log(req.body)
      //const {} = req.body

      res.status(200).json({ hey: 'hey' })
    }
  }
}
