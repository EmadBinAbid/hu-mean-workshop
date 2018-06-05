//Application dependencies
var Joi = require('joi');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

//Middlewares


/*Http Requests*/


//Creating a Node server
var port = 3000;
app.listen(port, () =>
{
    console.log(`Node server listening on port ${port}...`);
});