const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/', (req, res)=> {
    const getalluser = "SELECT * FROM `user`";

    connection.query(getalluser, function(err, result) {
        if (err) {
            console.log(err);
            res.send("Unable to get Hobby Data");
        } else {
            res.send(result);
        }
    });
});

module.exports = router;