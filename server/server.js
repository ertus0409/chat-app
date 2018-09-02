const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
  console.log('New user connected');

  //Welcome user self
  socket.emit('newMessage', generateMessage('Admin', 'Welcom to the chat app'));
  //Broadcast others about the join
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));


  //
  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    //Generating and sending message to everyone including self
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
  });




  socket.on('disconnect', function () {
    console.log('User disconnected');
  });

});


server.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
