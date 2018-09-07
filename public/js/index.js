// const moment = require('moment');
var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});
socket.on('disconnect', function () {
  console.log('Disconnected from server');
});


//Listening newMessage and showing them to users
socket.on('newMessage', function (message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var li = jQuery('<li></li>');
  li.text(`${message.from} ${formattedTime}: ${message.text}`);
  jQuery('#messages').append(li);
});

//Submit from form
jQuery('#message-form').on('submit', function (e) {
  //Prevent default setting(page reloads when send tapped)
  e.preventDefault();
  var messageTextbox = jQuery('[name=message]')
  //Collecting data from index.html and sending it to server
  socket.emit('createMessage', {
    from: 'User',
    text: messageTextbox.val()
  }, function () {
    messageTextbox.val('')
  });
});

//Displaying location message recieved from server, as a link to new tab
socket.on('newLocationMessage', function (message) {
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My current location</a>');

  var formattedTimeLoc = moment(message.createdAt).format('h:mm a');
  li.text(`${message.from} ${formattedTimeLoc}: `);
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

//Sending data to server from location button
var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser')
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function () {
    alert('Unable to fetch location')
  })
});
