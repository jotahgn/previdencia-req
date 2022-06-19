const express = require('express');
const apiRoutes = express.Router();
var bodyParser = require('body-parser')

// var { cpf, nome, rg, nascimento, observacao, nit, cargo, lotacao, estado_civil, matricula, cep, rua, numero, bairro, cidade, estado, email, telefone, celular, dependentes, tipoRequerimento } = data;

apiRoutes.post('/new_application', (req, res) => {
    try {
        const body = req.body
        console.log(body)
        if(!body || (!body.nome) || (!body.cpf) || (!body.rg) || (!body.nascimento) ) return res.json({ status: false, message: 'É necessário passar os parâmetros corretamente'}).status(400)
        res.json({ body })
    } catch (error) {
        console.log(error)
        res.json({ status: false, message: 'É necessário passar os parâmetros corretamente'}).status(400)
    }
});

module.exports = apiRoutes;