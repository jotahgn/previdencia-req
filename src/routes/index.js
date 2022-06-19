const express = require('express');
const aposentadoria = require('./rota_aposentadoria');

const apiRouter = express.Router();

apiRouter.use('/aposentadoria', aposentadoria);

module.exports = apiRouter;