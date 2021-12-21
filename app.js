const http = require('http');

const server = http.createServer(function(request, response){
   if(request.method === 'POST' && request.url === '/tasks'){
       response.end('You just made a POST to add a task')
   }else if(request.method === 'GET' && request.url === '/tasks'){
       response.end('You just made a GET to add all task')
   }else if(request.method === 'PUT' && request.url === '/tasks'){
    response.end('You just made a PUT to modify a task')
   }else if(request.method === 'DELETE' && request.url === '/tasks'){
   response.end('You just made a DELETE to delete a task') 
   }else {
    response.end('This endpoint doesnt exist')
   }

});
server.listen(4000, function() {
      console.log('Server has started to run');

});