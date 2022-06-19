var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/reqsystem').then((result) => {
    console.log({ status: true, message: 'Conectado ao banco de dados com sucesso :D' })
}).catch((err) => {
    console.log('não foi possivel se conectar ao banco de dados.')
});