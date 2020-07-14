export default interface IDialogFlowResponse{
  data: Array<{
    message:{
      data:{
        fulfillmentText:string,
        intentDetectionConfidence: number
      }
    }
  }>
}
