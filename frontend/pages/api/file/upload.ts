import { formidable } from "formidable";
import { pinata } from "../../../utils/server/pinataServer";

export const config = {
  api: {
    bodyParser: false
  }
};

/**
 * For uploading images to Pinata
 * @param req
 * @param res
 */
const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    console.log(files.file)
    const pinataFile = await pinata.pinFromFS(files.file.filepath)
    return res.status(201).send(pinataFile.IpfsHash);
  });
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
      ? console.log("PUT")
      : req.method === "DELETE"
        ? console.log("DELETE")
        : req.method === "GET"
          ? console.log("GET")
          : res.status(404).send("");
};
