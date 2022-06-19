const express = require('express');
const apiRoutes = express.Router();

apiRoutes.post('/new_application', (req, res) => {
    const body = req.body
    
});

module.exports = apiRoutes;