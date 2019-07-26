const express = require('express');
const path = require('path');
const expressEdge = require('express-edge');

const mongoose = require('mongoose');

const app = new express();

mongoose.connect('mongodb://localhost/node-js-blog');

app.use(express.static('public'));
app.use(expressEdge);
app.set('views', `${__dirname}/views`);

var routes = {
    '/': 'index',
    '/index': 'index',
    '/about': 'about',
    '/contact': 'contact',
    '/post': 'post'
};

Object.keys(routes).map((key) => {
    app.get(key, (request, response) => {
        response.render(routes[key]);
    });
});

app.listen(4000, () => {
    console.log('App listening on port 4000');
});