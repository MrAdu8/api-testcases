const express = require('express');
const router = express.Router();

const {addUser} = require('../controllers/products');
const {getAlltesting} = require('../controllers/products');


router.route("/").put(addUser);
router.route("/testing").get(getAlltesting);

module.exports = router;