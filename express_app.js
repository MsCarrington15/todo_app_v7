require('dotenv').config();
const express = require('express');   //express is our server
const mongoose = require('mongoose');    // helps server connects to database thru url path
const todoController = require('./controllers/todoController');
const server = express();
//const mongo_db_url = ''
        //   const mongodb_db_url="mongodb://localhost/todos_db"                    // url helps connect database

server.use(express.json());


server.listen(4000, function(){
    console.log('Server has started to run in express');
    mongoose.connect(process.env.ATLAS_URL)
    .then(function(){
        console.log('DB is connected');
        server.get('/todos', todoController.getAllTodos);
        server.post('/todos',todoController.insertTodo);
        server.get('/todos/:id',todoController.getTodoById);
        server.put('/todos/:id',  todoController.updateTodoById);
        server.delete('/todos/:id', todoController.deleteTodoById);

    })
    
    .catch(function(error){
        console.log('DB is not connected:',error.message);

    });
});