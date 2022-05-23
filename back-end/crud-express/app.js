var express = require('express');
require('./bd/mongoConection');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var users = require('./routes/users');
// let students = require('./routes/student/StudentRouteMongo');
let students = require('./routes/student/StudentRouteMongo');
// let professors = require('./routes/professor/ProfessorRoute');
let professors = require('./routes/professor/ProfessorRouteMongo');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use('/api/v1/users', users);
app.use('/crud/students/', students);
app.use('/professor/crud/', professors);

module.exports = app;
