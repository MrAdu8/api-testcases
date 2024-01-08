const express = require('express');
const router = express.Router();
const connection = require('../database');

//Generic method which handles queries
// function queryPromise(sql, values=[]){
//     return new Promise((resolve, reject)=>{
//         connection.query(sql, values, (error, result)=>{
//             if(error){
//                 reject(error);
//             }
//             else{
//                 resolve(result);
//             }
//         })
//     });
// }


/* CRUD operation */

// get all users
router.get('/', (req, res)=> {
    const getalluser = "SELECT * FROM `user`";

    connection.query(getalluser, function(err, result) {
        if (err) {
            console.log(err);
            res.send("Unable to get Users Data");
        } else {
            res.send(result);
        }
    });
});

// 
router.post('/', async(req, res)=>{
    try{
        const {firstName, lastName} = req.body;
        console.log(req.body)

        if (!firstName || !lastName) {
            throw new Error("name is mandatory");
        }
        
        // const sub = [user_id, name];
        const SQL = "INSERT INTO user SET ? ";

        const result = await connection.query(SQL, {name : firstName + lastName });

        if(result.affectedRows === 0){
            res.status(400).json({error: 'User id already has been used'});
        }else{
            console.log(result)
            res.status(200).json({value: firstName})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Failed to Update User'});
    }
});



// update existing user
router.put('/:user_id', async(req, res)=>{
    try{
        const user_id = req.params.user_id;
        const {name} = req.body;
        const SQL = 'UPDATE user SET name=? WHERE user_id=?';

        const result = await queryPromise(SQL, [name, user_id]);

        if(result.affectedRows === 0){
            console.log(result);
            res.status(400).json({error: 'User is Not present'});
        }else{
            res.status(200).json({value: name})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Failed to Update User'});
    }
});

// delete 1 user
router.delete('/:user_id([0-9]{1})', async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const SQL = "DELETE FROM user WHERE user_id=?";
        const result = await queryPromise(SQL, [user_id]);

        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Unable to Find user' });
        } else {
            res.status(200).json({ msg: 'Done' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Unable to delete user' });
        console.log(err);
    }
});



module.exports = router;