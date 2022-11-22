'use strict';

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(cookieParser('my scret'));
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', function(req, res) {
    let arr = [];
    for(const item in req.cookies){
        const obj = {key: item, value: req.cookies[item]};
        arr.push(obj);
    }

    res.locals.list = arr;
    res.render('form');
});

app.get('/clear', (req, res) => {
  
    for(const item in req.cookies){
        res.clearCookie(item);
    }
    res.redirect('back');
});

app.post('/', (req, res) => {
    const { key, value } = req.body;

    res.cookie(key, value);
    res.redirect(303, '/');
});

app.listen(4080, () =>{
    console.log('App listening at port 4080');
});

