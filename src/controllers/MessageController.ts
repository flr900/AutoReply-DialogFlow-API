import {Request, Response} from 'express'

interface IRequest {
  senderMessage: string,
  senderName: string
}

export default class MessageReceiverController {
  public receiveMessage (req: Request, res: Response){
      const {senderMessage, senderName}: IRequest = req.body

      const request = req.body

      return res.json({ data:[
          {
            message: request //`received ${senderMessage} from ${senderName}`
          }
        ]
      })

  }
}
