import express from 'express'
import Auth from '../middlewares/auth'

const routes = express.Router()

routes.post('/', Auth ,(req, res) => {
  const data = req.body
  return res.json({ data:[
      {
        message: 'received'
      }
    ]
  })
})

export default routes
