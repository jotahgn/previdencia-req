const express = require('express');
const cep_query = require('cep-promise')
const apiRoutes = express.Router();
var bodyParser = require('body-parser')
const path = require('path');
const pfAposentadoria = require('../database/models/aposentadoria.model')

apiRoutes.post('/new_application', async (req, res) => {
    try {
        const body = req.body
        if (!body || (!body.nome) || (!body.cpf) || (!body.rg) || (!body.nascimento)) return res.json({ status: false, message: 'É necessário passar os parâmetros corretamente' }).status(400)
        var { cpf, nome, rg, nascimento, observacao, nit, cargo, lotacao, estado_civil, matricula, cep, numero, email, telefone, dependentes, tipoRequerimento } = req.body;
        var info = await cep_query(cep)

        // validando se cpf já está cadastrado no banco de dados
        const validaDocumento = await pfAposentadoria.findOne({ cpf: cpf });
        if (validaDocumento) return res.json({ status: false, erro: "Documento já possui requerimento de aposentadoria" }).status(400);

        try {
            const nova_pessoa_fisica = new pfAposentadoria({
                cpf: cpf,
                nome: nome,
                rg: rg,
                nascimento: nascimento,
                observacao: observacao,
                nit: nit,
                cargo: cargo,
                lotacao: lotacao,
                estado_civil: estado_civil,
                matricula: matricula,
                endereco: { info: info, numero: numero },
                email: email,
                telefone: telefone,
                dependentes: dependentes,
                tipoRequerimento: 'Aposentadoria'
            });
            await nova_pessoa_fisica.save();
            res.json(nova_pessoa_fisica);
            return;
        } catch (err) {
            console.log(err)
        }
    } catch (error) {
        console.log(error)
        res.json({ status: false, message: 'É necessário passar os parâmetros corretamente' }).status(400)
    }
});

module.exports = apiRoutes;