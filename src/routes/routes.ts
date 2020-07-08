import express from 'express'

const routes = express.Router()

routes.post('/', (req, res) => {
  const data = req.body
  return res.json({ data:[
      {
        message: 'received'
      }
    ]
  })
})

export default routes
