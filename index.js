const express = require('express');
const path = require('path');
const expressEdge = require('express-edge');

const app = new express();

const express = require('express');

app.use(express.static('public'));
app.use(expressEdge);

app.set('views', `${__dirname}/views`);

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/index', (request, response) => {
    response.render('index');
});

app.get('/about', (request, response) => {
    response.render('about');
});

app.get('/contact', (request, response) => {
    response.render('contact');
});

app.get('/post', (request, response) => {
    response.render('post')
});

app.listen(4000, () => {
    console.log('App listening on port 4000');
});