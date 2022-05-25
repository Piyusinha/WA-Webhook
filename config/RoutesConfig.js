const webhookRoutes = require('../routes/WebhookRoutes');
const webSocketRoutes = require('../routes/WebSocketRoute')
exports.initAllRoutes = (fastify) => {
	webhookRoutes.forEach((route, index) => {
		fastify.route(route);
	});
	webSocketRoutes.forEach((route,index) => {
		fastify.route(route)
	})
};
