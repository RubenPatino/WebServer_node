const express = require('express');
const app = express();
const hbs = require('hbs');


app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let paLabras = texto.split(' ');

    paLabras.forEach((pal, idx) => {
        paLabras[idx] = pal.charAt(0).toUpperCase() + pal.slice(1).toLowerCase();
    });

    return paLabras.join(' ');

});

app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('index', {
        title: 'Index',
        nombre: 'rapaFull'
    });
});
app.get('/about', function(req, res) {

    res.render('about', {
        title: 'About',
        nombre: 'Mi uchito del alma.'

    });
});
app.listen(3000);