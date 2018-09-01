const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newEmail', {
  //   from: 'mike@example.com',
  //   text: 'Hey broooow',
  //   createdAt: 234
  // });
  //
  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // })


  socket.emit('newMessage', {
    from: 'Arhutr',
    text: 'Hi brow!',
    createdAt: 1234
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  })

  socket.on('disconnect', function () {
    console.log('User disconnected');
  });

});


server.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
