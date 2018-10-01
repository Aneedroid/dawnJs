const express = require('express');
const routes = require('./routes/route');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
// const router = new Router();
// app.use(routes.routes());

app.engine('.html', exphbs({
    defaultLayout: 'layout',
    extname: '.html'
}));
app.set('view engine', '.html');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/hello', (req, res) => {
    return res.render('home');
});

module.exports = app;