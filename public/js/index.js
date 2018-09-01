
var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.on('welcome', function (message) {
    console.log(message);
  });

  socket.on('userJoined', function (message) {
    console.log(message);
  });
//   socket.emit('createEmail', {
//     to: 'jen@example.com',
//     text: 'This is arthur'
//   });

  // socket.emit('createMessage', {
  //   from: 'Arthur',
  //   message: 'wassup'
  // });
});

socket.on('newMessage', function (message) {
  console.log('You have a new message', message);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});



//
// socket.on('newEmail', function (email) {
//   console.log('New Email', email);
// });
