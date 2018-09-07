const moment = require('moment');


// var date = moment();
// date.add(1, 'year');
// console.log(date.format('MMM YYYY'));

// var newDate = moment().format('h:mm a');
// console.log(newDate);
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
