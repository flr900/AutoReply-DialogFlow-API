import express from 'express'
import Auth from '../middlewares/auth'

import MessageController from '../controllers/MessageController'

const routes = express.Router()
const messageController = new MessageController()

routes.get('/oauth2callback', messageController.receiveMessage)

export default routes

'/oauth2callback', (req, res) => {
  const authCode = req.query.code
  console.log(`> [youtube-robot] Consent given: ${authCode}`)

  res.send('<h1>Thank you!</h1><p>Now close this tab.</p>')
