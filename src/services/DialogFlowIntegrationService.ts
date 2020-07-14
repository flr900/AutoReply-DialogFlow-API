import {google} from 'googleapis'
import { uuid } from 'uuidv4';
import AppError from '../errors/AppError'

const sessionId = uuid()
const dialogFlow = google.dialogflow({version: 'v2'})

export default async function SendMessage(message: string){

  const dialogFlowResponse = await dialogFlow.projects.agent.sessions.detectIntent({
  session: `projects/${process.env.PROJECT_ID}/agent/sessions/${sessionId}`,
  requestBody:{
    "queryInput": {
      "text": {
        "text": message,
        "languageCode": "pt-BR"
      }
    }
  }
}).then(dialogFlowresponse => dialogFlowresponse).catch((err) => console.log(err))

if(!dialogFlowResponse) {
  throw new AppError('Void message', 204)
}
return dialogFlowResponse

}
