import express from 'express'

const routes = express.Router()

routes.post('/', (req, res) => {
  console.log(req)
  const data = req.body
  return res.json({ data:[
      {
        message: 'received'
      }
    ]
  })
})

export default routes
