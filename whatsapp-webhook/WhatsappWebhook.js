exports.postWebhook = async (req,res,next) => {
    let body = req.body;
  
  // Check the Incoming webhook message
  console.log("Incoming webhook: " + JSON.stringify(req.body));
  
  // Validate the webhook
  if(req.body.object){
    res.sendStatus(200);
  } else {
    // Return a '404 Not Found' if event is not from a whatsApp API
    res.sendStatus(404);
  }
}
exports.getWebhook = async(req,res,next) => {
    const VERIFY_TOKEN = "hello";
  
    // Parse params from the webhook verification request
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
    // Check if a token and mode were sent
    if (mode && token) {
    
      // Check the mode and token sent are correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Respond with 200 OK and challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);
      }
    }
}