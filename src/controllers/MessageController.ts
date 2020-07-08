import {Request, Response} from 'express'

interface IRequest {
  senderMessage: string,
  senderNam: string
}

export default class MessageReceiverController {
  public receiveMessage (req: Request, res: Response){
      const {senderMessage, senderNam}: IRequest = req.body

      const request = req.body

      return res.json({ data:[
          {
            message: request
          }
        ]
      })

  }
}
