const cors = require('../config/middlewares/cors')

module.exports = app => {
  app.disable('x-powered-by')
  app.use(cors)
}
