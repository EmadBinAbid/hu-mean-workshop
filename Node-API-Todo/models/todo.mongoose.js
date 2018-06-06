//Application dependencies
var mongoose = require('mongoose');

//Todo Schema
var todoSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        description:
        {
            type: String,
            required: true
        }
    }
);

var Todo = mongoose.model('Todo', todoSchema);

/*Functions to handle Http requests*/

exports.addTodo = function(todoObject, callback)
{
    Todo.create(todoObject, callback);
}

exports.deleteTodo = function(id, callback)
{
    var query = { _id: id};
    Todo.remove(query, callback);
}

exports.updateTodo = function(id, updatedTodo, options, callback)
{
    var query = { _id: id };
    var update;
    
    if(updatedTodo.name && updatedTodo.description)
    {
        update = {
            name: updatedTodo.name,
            description: updatedTodo.description
        };
    }
    else if(updatedTodo.name && !updatedTodo.description)
    {
        update = {
            name: updatedTodo.name
        };
    }
    else if(!updatedTodo.name && updatedTodo.description)
    {
        update = {
            description: updatedTodo.description
        };
    }

    Todo.findOneAndUpdate(query, update, options, callback);
}

exports.getTodos = function(callback)
{
    Todo.find(callback);   
}

exports.getTodoById = function(id, callback)
{
    Todo.findById(id, callback);
}