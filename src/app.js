const express = require('express');
var hbs = require('express-handlebars');
const apiRoutes = require('./routes/index');
var bodyParser = require('body-parser')

const pfAposentadoria = require('./database/models/aposentadoria.model')
const pfSimples = require('./database/models/simples.model')


require('dotenv').config();
require('./database/db/index')

const app = express();
const porta = process.env.PORT || 80;
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json())
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRoutes);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.get('/', async (req, res) => {
  pfAposentadoria.count({}, function (err, count) {
    var countAposentadoria = count;
    pfSimples.count({}, function (err, count) {
      var countSimples = count;
      res.render(
        'home',
        {
          countAposentadoria: countAposentadoria,
          countSimples: countSimples
        }
      );
    })
  })


})


app.get('*', (req, res) => {
  res.render('404')
})

app.listen(porta, () => console.log({ status: 'server running :)' }));