const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

let productList = [{id: 1, name: "iPhone", description: "Apple iPhone 13 Pro Max - 128 GB - Graphite", price: 700, quantity: 70},
{id: 2, name: "Smart Watch", description: "Fitbit Versa 2 Smartwatch", price: 200, quantity: 9},
{id: 3, name: "Wireless Headphones", description: "Sennheiser HD 450BT Wireless Headphones - Black", price: 100, quantity: 4},
{id: 4, name: "Macbook", description: "Macbook Air 13'' Laptop - Apple M1 Chip - 16Gb Memory - 1Tb Ssd - Space Gray", price: 800, quantity: 4},
{id: 5, name: "Mac Mini", description: "Mac Mini - 3.0GHz Intel Core i5 - 8GB Ram - 256GB SSD - Apple", price: 1000, quantity: 15},
{id: 6, name: "Eye Glasses", description: "Eye Glasses", price: 700, quantity: 6}];



app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
}));


app.use(express.urlencoded({extended:true}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.use((req, res, next) => {
    if(!req.session.list)
        req.session.list = [];
    next();
});

app.get('/', (req, res) => {
   
    res.render('shop', {productList});
});

app.get('/product', (req, res) => {
    const id = parseInt(req.query.id);
    const item =productList.find(e => e.id === id);

    res.render('product', {item, count: req.session.list.length});
});

app.post('/addToCart', (req, res) => {
    const {name, price} = req.body.data;
    let item = productList.find(e => e.name === name && e.quantity > 0);
    
    if(item){
        const { list } = req.session; 
        const current = list.find(e => e.name === name);
        if(current){
            current.quantity ++;
            current.price += parseInt(price)
        } else 
            list.push({name, quantity: 1, price: parseInt(price)});

        item.quantity --;
        res.send(JSON.stringify(list.length));

    } else {
        console.log('Item out of stock!');
        res.send('');
    }
});

app.get("/cart", (req, res) => {
    const { list } = req.session;
    res.render('shoppingcart', {items: list});
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})

