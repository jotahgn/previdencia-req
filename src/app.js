const express = require('express');
var hbs = require('express-handlebars');

require('dotenv').config();

const app = express();
const porta = process.env.PORT || 80;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(porta, () => console.log({ status: 'server running :)' }));