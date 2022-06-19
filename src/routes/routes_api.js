const express = require('express');
const apiRoutes = express.Router();

apiRoutes.get('/a', (req, res) => {
    res.json({ status: true})
});

module.exports = apiRoutes;