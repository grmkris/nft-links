import {formidable} from 'formidable'
import xlsx from 'node-xlsx';
import {NextApiRequest, NextApiResponse} from 'next'
import * as fs from "fs";

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
          if (files.file) {
            let sum = 0;
            try {
              const workSheetsFromFile = xlsx.parse(fs.readFileSync(files.file?.filepath));
              workSheetsFromFile.forEach((x, index) => {
                console.log("Reading sheet:", index)
                x.data.map((element: [], index) => {
                  console.log("Reading row:", index)
                  element.map((data, index) => {
                    if (index === 1){
                      sum += +data
                    }
                  })
                })
              })
              return res.status(201).send({claimed: sum>=10, sum: sum})
            } catch (e) {
              console.log(e)
              return res.status(500).send(e)
            }
          }
        })
      } catch (e) {
        console.log(e)
        return res.status(500).send(e)
      }
    }
  }
}
