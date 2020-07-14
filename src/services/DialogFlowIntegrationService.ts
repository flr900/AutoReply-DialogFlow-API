import {google} from 'googleapis'
import { uuid } from 'uuidv4';

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

return dialogFlowResponse

}
