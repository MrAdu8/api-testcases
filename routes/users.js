const express = require('express');
const router = express.Router();
const conn = require('../database');
const connection = require('../database');


router.get('/hi', (req, res)=> {
    res.send("api is working correctly :)");
});

router.get('/', (req, res)=> {
    const getalluser = "SELECT * FROM `users`";

    connection.query(getalluser, function(err, result) {
        if (err) {
            console.log(err);
            res.send("Unable to get Users Data");
        } else {
            res.send(result);
        }
    });
});

module.exports = router;