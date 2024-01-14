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
        res.status(500).json({error: 'failed to get all hobbies'});
    }
});

// add new hobby
router.post('/', async(req, res) => {
    try {
        const {hobby} = req.body;

        if (!hobby) {
            throw new Error("hobby must be mandatory");
        }

        const SQL = "INSERT INTO hobbies SET ?";

        const result = await connection.query(SQL, {hobby: hobby});

        if (result.effectedRows === 0) {
            res.status(400).json({error: "Not found"});
        } else {
            console.log(result);
            res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Unable to update hobby'});
    }
})

// update existing hobby
router.put('/:hobby_id', async(req, res)=>{
    try{
        const hobby_id = req.params.hobby_id;
        const {hobby} = req.body;
        const SQL = 'UPDATE hobbies SET name=? WHERE hobby_id=?';

        const result = await connection.query(SQL, [hobby_id]);

        if(result.affectedRows === 0){
            console.log(result);
            res.status(400).json({error: "hobby cannot be updated"});
        }else{
            res.status(200).json(result);
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Failed to Update hobby"});
    }
});

module.exports = router;