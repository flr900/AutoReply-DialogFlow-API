import admin from 'firebase-admin'
import Functions from 'firebase-functions'
import cors, { CorsOptions } from 'cors'
import serviceAccount from '../credentials/credentials.json'
import { SessionsClient } from 'dialogflow'

const credential: any = serviceAccount

const corsOptions: CorsOptions = {
  origin: true
}

  admin.initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL: "https://pizzaria-encontro-qlyrco.firebaseio.com"
  })

  exports.dialogflowGateway = Functions.https.onRequest((req, res) => {
    cors()

  })
