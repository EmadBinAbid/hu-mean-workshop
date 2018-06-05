//Application dependencies
const Joi = require('joi');
const express = require('express');
const app = express();

//Http Requests
app.get('/', (req, res) => 
{
    res.send("Hello");
});


//Creating a Node server
const port = 3000;
app.listen(port, () => 
{
    console.log(`Node server listening on port ${port}...`);
});