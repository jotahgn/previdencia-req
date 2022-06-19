const express = require('express');
const cep_query = require('cep-promise')
const apiRoutes = express.Router();
var bodyParser = require('body-parser')

apiRoutes.post('/new_application', async (req, res) => {
    try {
        const body = req.body
        console.log(body)
        if(!body || (!body.nome) || (!body.cpf) || (!body.rg) || (!body.nascimento) ) return res.json({ status: false, message: 'É necessário passar os parâmetros corretamente'}).status(400)
        var { cpf, nome, rg, nascimento, observacao, nit, cargo, lotacao, estado_civil, matricula, cep, numero, email, telefone, dependentes, tipoRequerimento } = req.body;
        var info = await cep_query(cep)
        res.json({ cpf, nome, rg, nascimento, observacao, nit, cargo, lotacao, estado_civil, matricula, endereco: { info, numero}, email, telefone, dependentes, tipoRequerimento })
    } catch (error) {
        console.log(error)
        res.json({ status: false, message: 'É necessário passar os parâmetros corretamente'}).status(400)
    }
});

module.exports = apiRoutes;