const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const simplessChema = new Schema({
    cpf: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    nascimento: {
        type: String,
        required: true
    },
    estado_civil: {
        type: String,
        required: true
    },
    nit: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    lotacao: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true
    },
    endereco: {
        type: Object,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    dependentes: {
        type: String,
        required: true
    },
    tipoRequerimento: {
        type: String,
        required: true
    },
    observacao: {
        type: String,
        required: true
    },
});
module.exports = pfSimples = mongoose.model('Simples', simplessChema);
