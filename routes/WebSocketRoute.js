const WhatsappWAsocket =  require('../socketcontrollers/WAsocket')
const authenticate = require('../utils/auth')
const webSocketRoutes = [
    {
      method: 'GET',
      url: '/wasocket',
      websocket: true,
      preHandler: authenticate,
      handler: WhatsappWAsocket.WAsocket
    }
  ]
module.exports = webSocketRoutes