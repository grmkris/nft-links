import nextConnect from 'next-connect'
import multiparty from 'multiparty'

const middleware = nextConnect()

middleware.use(async (req, res, next) => {
  const form = new multiparty.Form()

  await form.parse(req, function (err, fields, files) {
    console.log(req)
    req.body = fields
    req.files = files
    next()
  })
})

export default middleware
