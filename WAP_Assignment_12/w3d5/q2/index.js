const express = require('express');
const serverrequest = express();

//middleware
serverrequest.use(express.urlencoded({extended:true}));

serverrequest.get('/', (req, res) => {

    //response form
    res.send(`
        <form action="/result" method="post">
            <label>Name</label>
            <input type="text" id="name" name="name">
            <label >Age</label>
            <input type="number" id="age" name="age">
            <input type="submit" value="Submit Query">
        </form>
    `);
});

serverrequest.post('/result', (req, res) => {
    
    const { name, age } = req.body;

    res.send(`Welcome ${name} Your age is ${age}`);
});

serverrequest.listen(3000, () => {
    console.log('Serverrequest running on port 3000');
})

//test: http://localhost:3000/?name=Gilbert&age=31