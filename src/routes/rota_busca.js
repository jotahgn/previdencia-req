const express = require('express');
const cep_query = require('cep-promise')
const apiRoutes = express.Router();
var bodyParser = require('body-parser')
const path = require('path');
// const pfAposentadoria = require('../database/models/aposentadoria.model')

apiRoutes.post('/buscar', async (req, res) => {
    try {
        const body = req.body
        console.log(body)
    } catch (error) {
        console.log(error)
        res.json({ status: false, message: 'É necessário passar os parâmetros corretamente' }).status(400)
    }
});

module.exports = apiRoutes;