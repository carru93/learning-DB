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
    if(err) {
        console.log('Error connecting to DB: ' + err.message);
        return;
    }
    console.log('Connected');



    //console.log('the first line of the table is:\n'+query('SELECT * FROM cats WHERE id = 1;'));

});

function query(req, callback) {
    connection.query(req, function (err, data) {
        if (typeof(callback) === "function")
            callback(data);
    });
}

query('SELECT * FROM cats WHERE id = 1;', function(err, data){
    console.log(err);
});


connection.end(function (err) {
    console.log('Disconnected from the DB');
});