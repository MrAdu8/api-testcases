const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT = process.env.PORT || 3001;

const con = require('./database');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

const products_routes = require('./routes/users');

app.use('/users', products_routes); 

app.get("/", (req, res) =>{
    res.send("This is basic express api");
});

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