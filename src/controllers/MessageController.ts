import {Request, Response} from 'express'

interface IRequest {
  senderMessage: string,
  senderName: string
}

export default class MessageReceiverController {
  public receiveMessage (req: Request, res: Response){
      const {senderMessage, senderName}: IRequest = req.body

      return res.json({ data:[
          {
            message: req.body //`received ${senderMessage} from ${senderName}`
          }
        ]
      })

  }
}
