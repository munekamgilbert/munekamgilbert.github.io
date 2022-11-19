

const express = require('express');
const path = require('path');
const serverrequest = express();

//middleware
serverrequest.use(express.urlencoded({extended:true}));
serverrequest.set('view engine', 'ejs');
serverrequest.set('views', path.join(__dirname, 'view'));

serverrequest.get('/', (req, res) => {
    //response form
    res.render(`form`);
});

serverrequest.post('/result', (req, res) => {
    
    const { name, age } = req.body;
    res.render('display',{name, age});
    // res.send(`Welcome ${name} Your age is ${age}`);
});

serverrequest.listen(3000, () => {
    console.log('Serverrequest running on port 3000');
})

//test: http://localhost:3000/?name=Gilbert&age=31