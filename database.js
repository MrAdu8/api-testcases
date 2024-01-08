const mysql = require('mysql');
const util = require('util')


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin123',
    database: 'users',

});

connection.connect(function(err) {
    if (!!err) {
        console.log(err);
    } else {
        console.log("Database connected Successfully :0");
    }
    
});

connection.query = util.promisify(connection.query)

module.exports = connection;