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
      try {
        form.parse(req, async function (err, fields, files) {
          const pinataFile = await pinata.pinFromFS(files.file.filepath)
          const user = await supabaseServerClient.auth.api.getUser(req.headers.authorization.slice(7))

          const result = await supabaseServerClient.from('files').insert({
            id: pinataFile.IpfsHash,
            user: user.user.id,
            size: pinataFile.PinSize,
            type: files.file.mimetype,
            name: files.file.originalFilename,
          });
          return res.status(201).send(result)
        })
      } catch (e) {
        console.log(e)
        return res.status(500).send(e)
      }
    }
  }
}
