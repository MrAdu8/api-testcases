const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Admin123',
    database: 'users',
    connectionLimit: 10
});

connection.connect(function(err){
    if(!!err) {
        console.log(err);
    }
    else{
        console.log("Connected to Database Perfectly");
    }
});

module.exports = connection;