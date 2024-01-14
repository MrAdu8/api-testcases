const express = require('express');
const router = express.Router();
const connection = require('../database');

//get all hobby data 
router.get('/', async(req, res) =>{
    try {
        const SQL = "SELECT * FROM hobbies";

        const result = await connection.query(SQL);

        if (result.affectedRows === 0) {
            result.status(400).json({error: 'hobbies connection is not done'});
        } else {
            console.log(result)
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(500).json({error: 'failed to get all User'});
    }
});

module.exports = router;