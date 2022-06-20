const express = require('express');
const apiRouter = express.Router();

apiRouter.use('/aposentadoria', require('./rota_aposentadoria'))
apiRouter.use('/simples', require('./rota_simples'))
apiRouter.use('/', require('./rota_busca_simples'))
apiRouter.use('/', require('./rota_busca_aposentadoria'))

module.exports = apiRouter;