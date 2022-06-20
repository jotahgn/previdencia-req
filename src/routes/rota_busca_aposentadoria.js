const express = require('express');
const cep_query = require('cep-promise')
const apiRoutes = express.Router();
var bodyParser = require('body-parser')
const path = require('path');
const pfAposentadoria = require('../database/models/aposentadoria.model')
const pfSimples = require('../database/models/simples.model')

apiRoutes.get('/busca_aposentadoria/:cpf', async (req, res) => {
    try {
        const cpf = req.params.cpf
        const validaDocumentoAposentadoria = await pfAposentadoria.findOne({ cpf: cpf });
        if (!validaDocumentoAposentadoria) {
            return res.json({ status: false, error: 'Não foi encontrado nenhum requerimento para o documento informado.' }).status(400);
        }
        res.json({
            status: true,
            message: 'Requerimento encontrado!',
            infos: validaDocumentoAposentadoria
        })
    } catch (error) {
        console.log(error)
        res.json({ status: false, message: 'É necessário passar os parâmetros corretamente' }).status(400)
    }
});

module.exports = apiRoutes;