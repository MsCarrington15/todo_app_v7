const todo = require('../models/todo');

function insertTodo(req, res){ 
    console.log(req.body)
    todo.create(req.body)
   
   .then(function(data){
       res.status(200).json({success:true, message:'Data has been created',data:data});
    })
    .catch(function(error){
        res.status(401).json('Not created' +error.message);
    });

}

function updateTodoById(req, res){
    const { id } = req.params;
    const {isCompleted}=req.body;
    todo.findByIdAndUpdate(id,{isCompleted:isCompleted})
    .then(function(){
        res.status(200).json({success: true, message: 'its succefully updated'});
    })
    .catch(function(err){
        console.log('Cant delete todo: ', err.message);
        res.status(404).json({success: false, message: 'Cant update try again. Try again'})
    })

}

function deleteTodoById(req, res){
    const { id } = req.params;
    todo.findByIdAndDelete(id)
    .then(function(){
        res.status(200).json({success: true, message: 'Todo is deleted successfully'});
    })
    .catch(function(err){
        console.log('Cant delete todo: ', err.message);
        res.status(404).json({success: false, message: 'Todo cant delete. Try again'})
    })
}

function getTodoById(req, res){
    const {id}=req.params;
    todo.findById(id)
  
    .then(function(data){
        res.status(200).json({
            success: true, data});
    })
    .catch(function(err){
        res.status(404).json({
            success: false, error: 'Cant get data: '+err.message});
    });
   
}



function getAllTodos(req, res){
      todo.find({})
      .then(function(data){
          res.status(200).json({
              success: true, data})
      })
      .catch(function(err){
          res.status(404).json({
              success: false, error: 'Cant get data: '+err.message})
      })
}
module.exports = {
    insertTodo, updateTodoById, deleteTodoById, getTodoById, getAllTodos
}