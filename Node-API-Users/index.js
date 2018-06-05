//Application dependencies
const user = require('./user.js');

const Joi = require('joi');
const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

/*Http Requests*/

//addUser
app.post('/user', (req, res) => 
{
    user.addUser(req.body);
    res.status(200).send(req.body);
});

//deleteUser
app.delete('/user/:id', (req, res) => 
{
    deleteUser = user.deleteUser(req.params.id);
    if(deleteUser === false)
    {
        res.status(404).send("User with requested id is not found.");
        return;
    }
    res.status(200).send(deleteUser);
});

//updateUser
app.put('/user/:id', (req, res) => 
{
    updateUser = user.updateUser(req.params.id, req.body);
    if(updateUser === false)
    {
        res.status(404).send("Error updating the user!");
        return;
    }
    res.status(200).send(updateUser);
});

//getUsers
app.get('/user', (req, res) => 
{
    res.status(200).send(user.getUsers());
});

//getUserById
app.get('/user/:id', (req, res) => 
{
    getUserById = user.getUserById(req.params.id);
    if(getUserById === false)
    {
        res.status(404).send("User with requested id is not found.");
        return;
    }
    res.status(200).send(getUserById);
});


//Creating a Node server
const port = 3000;
app.listen(port, () => 
{
    console.log(`Node server listening on port ${port}...`);
});