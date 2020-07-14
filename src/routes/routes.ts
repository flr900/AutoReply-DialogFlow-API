import express from 'express'
import Auth from '../middlewares/auth'

import MessageController from '../controllers/MessageController'

const routes = express.Router()
const messageController = new MessageController()

routes.post('/', Auth , messageController.receiveMessage)

export default routes
