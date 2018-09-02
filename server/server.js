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

  socket.emit('welcome', generateMessage('Admin', 'Welcom to the chat app'));
  socket.broadcast.emit('userJoined', generateMessage('Admin', 'New user joined'));

  // socket.emit('newEmail', {
  //   from: 'mike@example.com',
  //   text: 'Hey broooow',
  //   createdAt: 234
  // });
  //
  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // })


  // socket.emit('newMessage', {
  //   from: 'Arhutr',
  //   text: 'Hi brow!',
  //   createdAt: 1234
  // });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   test: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', function () {
    console.log('User disconnected');
  });

});


server.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
