import { useState } from 'react'
import axios from 'axios'
/**
 * # MY ACCOUNT GOOGLE PLAY:
 * @see {@link https://play.google.com/store/apps/developer?id=dzino Google Play}
 */

export default function FileUpload() {
  const [image, setImage] = useState(null)
  const [createObjectURL, setCreateObjectURL] = useState(null)

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0]

      setImage(i)
      setCreateObjectURL(URL.createObjectURL(i))
    }
  }

  const uploadToServer = async (event) => {
    const body = new FormData()
    body.append('file', image)
    const response = await axios.post('/api/nft/create', body)
  }

  return (
    <div>
      <div>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button className="btn btn-primary" type="submit" onClick={uploadToServer}>
          Send to server
        </button>
      </div>
    </div>
  )
}
