const express = require('express');
var hbs = require('express-hbs');

require('dotenv').config();

const app = express();
const porta = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static('public'));

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use('/', async (req, res) => {
  res.json({ porta: porta })
});

app.listen(porta, () => console.log({ status: 'server running :)' }));