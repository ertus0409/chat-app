
var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});
socket.on('disconnect', function () {
  console.log('Disconnected from server');
});


//Listening newMessage and showing them to users
socket.on('newMessage', function (message) {
  console.log('You have a new message', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages').append(li);
});


//Submit from form
jQuery('#message-form').on('submit', function (e) {
  //Prevent default setting(page reloads when send tapped)
  e.preventDefault();
  //Collecting data from index.html and sending it to server
  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});
