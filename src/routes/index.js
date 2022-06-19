const express = require('express');
const aposentadoria = require('./rota_aposentadoria');
const simples = require('./rota_simples');

const apiRouter = express.Router();

apiRouter.use('/aposentadoria', aposentadoria);
apiRouter.use('/simples', simples);

module.exports = apiRouter;