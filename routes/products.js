const express = require('express');
const router = express.Router();

const {getAllUsers} = require('../controllers/products');
const {getAlltesting} = require('../controllers/products');


router.route("/").get(getAllUsers);
router.route("/testing").get(getAlltesting);

module.exports = router;