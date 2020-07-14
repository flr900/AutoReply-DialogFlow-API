import {Request, Response} from 'express'
import dialogFlowResponseService from '../services/DialogFlowIntegrationService'

interface IRequest {
  senderMessage: string,
  senderName: string
}

export default class MessageReceiverController {
  public async receiveMessage (req: Request, res: Response){
      const {senderMessage, senderName}: IRequest = req.body
       const dialogFlowResponse = await dialogFlowResponseService(senderMessage)
      return res.json({ data:[
          {
            message: dialogFlowResponse.data.queryResult?.fulfillmentText
          }
        ]
      })

  }
}
