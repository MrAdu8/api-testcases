const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

const products_routes = require('./routes/products');

app.get("/", (req, res) =>{
    res.send("This is basic express api");
});

app.use('/users/data', products_routes);

const start = async () =>{
    try {
        app.listen(PORT, ()=>{
            console.log(`You are connected to ${PORT} port`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();