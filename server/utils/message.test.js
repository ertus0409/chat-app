var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    //store response in variable
    var from = 'Jeniffer'
    var text = 'Hello Arthur'
    var myMessage = generateMessage(from, text);

    expect(myMessage).toInclude({from, text});
    expect(myMessage.createdAt).toBeA('number');
  });
});


describe('generate location message', () => {
  it('should create correct location object', () => {
    var from = 'Admin';
    var latitude = 1;
    var longitude = 2;

    var myLocationMessage = generateLocationMessage(from, latitude, longitude);
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`
    expect(myLocationMessage).toInclude({from, url});
    expect(myLocationMessage.createdAt).toBeA('number');
  })
})
