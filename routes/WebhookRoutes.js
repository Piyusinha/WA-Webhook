const Whatsapp =  require('../whatsapp-webhook/WhatsappWebhook')
const webhookRoutes = [
    {
      method: 'POST',
      url: '/webhook',
      handler: Whatsapp.postWebhook
    },
    {
      method: 'GET',
      url: '/webhook',
      handler: Whatsapp.getWebhook
    }
  ]
module.exports = webhookRoutes