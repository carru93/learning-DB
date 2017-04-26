var express = require('express');
var mysql = require('mysql');
var app = express();
var path = require('path');

var connection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'root',
    database: 'pets'
});

connection.connect(function (err) {
    if(err){
        console.log('Error connecting to DB: '+err.message);
        return;
    }
    console.log('Connected');


});

connection.end(function (err) {
    console.log('Disconnected from the DB')
});

connection.query('SELECT * FROM cats WHERE id = \'1\';', function (err, data) {
    if (err) {
     throw err;
    }

    console.log('Data recived\n'+data);
});