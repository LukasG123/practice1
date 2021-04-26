var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

// Connect to mongodb (test database).
db = connect('mongodb://localhost:27017/test');


// On connection.
