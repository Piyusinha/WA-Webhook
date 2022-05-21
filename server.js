const dotenv = require('dotenv')
dotenv.config()
const { initMongo } = require('./config/MongoDbConfig')
initMongo()
const { initServer } = require('./config/FastifyServer')
initServer()

  