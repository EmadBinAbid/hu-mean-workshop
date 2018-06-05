//Application dependencies
var Todo = require('./models/todo.mongoose.js');

var Joi = require('joi');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connecting to Mongoose
mongoose.connect('mongodb://localhost/todo');
var db = mongoose.connection;

var app = express();

//Middlewares
app.use(express.json());

/*Http Requests*/

//addTodo
app.post('/todo', (req, res) =>
{
    Todo.addTodo(req.body, function(err, todo)
    {
       if(err)
       {
        res.status(404).send("Error getting todos");
        return;
       }
       res.json(todo);
    });
});

//deleteTodo
app.delete('/todo/:id', (req, res) => 
{
    Todo.deleteTodo(req.params.id, function(err, todo)
    {
        if(err)
        {
            res.status(404).send("Error getting todo.");
            return;
        }
        res.json(todo);
    });
});

//updateTodo
app.put('/todo/:id', (req, res) => 
{
    Todo.updateTodo(req.params.id, req.body, {}, function(err, todo)
    {
        if(err)
        {
            res.status(404).send("Error getting todo.");
            return;
        }
        res.json(todo);
    });
});

//getTodos
app.get('/todo', (req, res) => 
{
    Todo.getTodos(function(err, todos)
    {
       if(err)
       {
           res.status(404).send("Error getting todos");
           return;
       }
       res.json(todos);
    });
});

//getTodoById
app.get('/todo/:id', (req, res) =>
{
    Todo.getTodoById(req.params.id, function(err, todo)
    {
        if(err)
        {
            res.status(404).send("Error getting todo.");
            return;
        }
        res.json(todo);
    });
});


//Creating a Node server
var port = 3000;
app.listen(port, () =>
{
    console.log(`Node server listening on port ${port}...`);
});