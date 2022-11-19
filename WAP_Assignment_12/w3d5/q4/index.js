const express = require('express');
const path = require('path');
const serverrequest3 = express();

serverrequest3.use(express.urlencoded({extended: true}));
serverrequest3.use('/css', express.static(path.join(__dirname, 'css')));

serverrequest3.get('/', (req, res) => {
    
    const date = new Date();
    const hour = date.getHours();

    const style = (hour >= 6 && hour < 18) ? 'day' : 'night';

   
    res.send(`
        <DOCTYPE html>
        <html lang="en">
            <head>
                <title>Express Question 4</title>
                <link rel="stylesheet" href="/css/${style}.css">
            </head>
            <body>
                <form action="/result" method="post">
                    <label>Name</label>
                    <input type="text" id="name" name="name">
                    <label >Agee</label>
                    <input type="number" id="age" name="age">
                    <input type="submit" value="Submit Query">
                </form>
            </body>
        </html>
    `);
});

serverrequest3.post('/result', (req, res) => {
    const { name, age } = req.body;

    res.redirect(303, `/output?name=${name}&age=${age}`); //default code is 302 and it works without 303 mentioned
});


serverrequest3.get('/output', (req,res) => {
    let name = req.query.name;
    let age = req.query.age;
    if(!name){
        name = "person";
    }  
    if(!age){
        age = "16";
    }
    res.send(`Welcome ${name} Your age is ${age}`);
});

serverrequest3.listen(3000, () => {
    console.log('serverrequest3 running on port 3000');
})
