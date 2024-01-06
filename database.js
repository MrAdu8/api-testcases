const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin123',
    database: 'advait',

});

connection.connect(function(err) {
    if (!!err) {
        console.log(err);
    } else {
        console.log("Database connected Successfully :0");
    }
    
});

module.exports = connection;