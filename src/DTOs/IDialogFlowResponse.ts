export default interface IDialogFlowResponse{
  data:{
    queryResult:{
     fulfillmentText:string,
     intentDetectionConfidence: number,
    } | undefined
  }
}
