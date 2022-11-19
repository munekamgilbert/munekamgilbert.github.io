const express = require('express');
const path = require('path');
const serverrequest2 = express();

serverrequest2.use(express.urlencoded({extended:true}));

serverrequest2.use('/css', express.static(path.join(__dirname, 'css')));
//serverrequest2.use();

serverrequest2.get('/', (req, res) => {
   
    const date = new Date();
    const hour = date.getHours();

    const style = (hour >= 6 && hour < 18) ? 'day' : 'night';

    res.send(`
        <DOCTYPE html>
        <html lang="en">
            <head>
                <title>Express Question 3</title>
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

serverrequest2.post('/result', (req, res) => {
    const { name, age } = req.body;

    res.send(`Welcome ${name} Your age is ${age}`);
});

serverrequest2.listen(3000, () => {
    console.log('serverrequest2 running on port 3000');
})