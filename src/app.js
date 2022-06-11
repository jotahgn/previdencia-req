const express = require('express');
const exphbs = require('express-handlebars');

require('dotenv').config();

const app = express();
const porta = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static('public'));
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

 app.use('/', async (req, res) => {
    res.json({ porta: porta})
 });

app.listen(porta, () => console.log(`SERVIDOR INICIADO, RODANDO NA PORTA [ ${porta} ]`));