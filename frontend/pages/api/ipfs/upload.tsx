import { formidable } from 'formidable'
import { NextApiRequest, NextApiResponse } from 'next'
import { pinata } from '../../../utils/server/pinataServer'
import {supabaseServerClient} from "../../../utils/server/supabaseServer";

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    default:
    case 'POST': {
      const form = new formidable.IncomingForm()
      form.parse(req, async function (err, fields, files) {
        const pinataFile = await pinata.pinFromFS(files.file.filepath)
        const user = await supabaseServerClient.auth.api.getUser(req.headers.authorization.slice(7))

        await supabaseServerClient.from('media').insert({
          id: pinataFile.IpfsHash,
          user: user.user.id,
          size: pinataFile.PinSize
        });

        return res.status(201).send(pinataFile)
      })
    }
  }
}
