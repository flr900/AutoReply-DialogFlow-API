import express from 'express'
import Auth from '../middlewares/auth'

import Oauth2Routes from './auth.routes'
import MessageController from '../controllers/MessageController'

const routes = express.Router()
const messageController = new MessageController()

routes.post('/', Auth , messageController.receiveMessage)
// routes.get('/oauth2callback',(req, res) => {

//   res.json({message:'catioro'})
// })

export default routes
