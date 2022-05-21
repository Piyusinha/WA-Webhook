const webhookRoutes = require('../routes/WebhookRoutes');
exports.initAllRoutes = (fastify) => {
	webhookRoutes.forEach((route, index) => {
		fastify.route(route);
	});
};
