const fastify = require('fastify')({
    logger: true,
    trustProxy: true
})
const path = require('path');
const { WAsocket } = require('../socketcontrollers/WAsocket');
const { initAllRoutes } = require('./RoutesConfig');
const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 5000, '0.0.0.0')
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
exports.initServer = () => {

    fastify.register(require('fastify-websocket'));

    fastify.get('/', async (request, reply) => {
        return reply.send({ message: "Server Online" })
    })
    initAllRoutes(fastify)
    start()
} 