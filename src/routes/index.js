const express = require('express');
const apiRoutes = require('./routes_api');

const apiRouter = express.Router();

apiRouter.use('/', apiRoutes);

module.exports = apiRouter;