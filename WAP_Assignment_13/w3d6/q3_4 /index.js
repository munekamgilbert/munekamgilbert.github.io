//Gilbert Muneka Mumbere
const express = require("express");
const path = require('path');
const app = express();

let productList =  [{id: 1, name: "iPhone", description: "Apple iPhone 13 Pro Max - 128 GB - Graphite", price: 700, quantity: 70},
                    {id: 2, name: "Smart Watch", description: "Fitbit Versa 2 Smartwatch", price: 200, quantity: 9},
                    {id: 3, name: "Wireless Headphones", description: "Sennheiser HD 450BT Wireless Headphones - Black", price: 100, quantity: 4},
                    {id: 4, name: "Macbook", description: "Macbook Air 13'' Laptop - Apple M1 Chip - 16Gb Memory - 1Tb Ssd - Space Gray", price: 800, quantity: 4},
                    {id: 5, name: "Mac Mini", description: "Mac Mini - 3.0GHz Intel Core i5 - 8GB Ram - 256GB SSD - Apple", price: 1000, quantity: 15},
                    {id: 6, name: "Eye Glasses", description: "Eye Glasses", price: 700, quantity: 6}];

let shoppingCart = new Map();

//middleware
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    //response
    res.render('shop', {productList});
});

app.get('/product', (req, res) => {
    const id = parseInt(req.query.id);
    const item =productList.filter(e => e.id === id)[0];

    res.render('product', {item});
});

app.post('/addToCart', (req, res) => {
    const {name, price} = req.body;
    let item = productList.find(e => e.name === name && e.quantity > 0);

    if(item){
        //Checking to see if item is already in shopping cart
        if(shoppingCart.has(name)){
            let item = shoppingCart.get(name);
            item.quantity ++;
            item.price += parseInt(price);
        } else {
            let item = {name, quantity: 1, price: parseInt(price)};
            shoppingCart.set(name, item);
        }

        item.quantity --;

        res.redirect(303, "/cart");
    } else
        console.log('Item out of stock!');
});

app.get("/cart", (req, res) => {
    res.render('shoppingcart', {items: [...shoppingCart.values()]});
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
})


