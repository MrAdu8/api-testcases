const mysql = require('mysql');

const customer = new mysql.Schema({
    name: {
        type: String,
        required: [true, 'name must be provided'],
    }
});

module.exports = mysql.model('User', customer);