var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    //store response in variable
    var from = 'Jeniffer'
    var text = 'Hello Arthur'
    var myMessage = generateMessage(from, text);

    expect(myMessage).toInclude({from, text});
    expect(myMessage.createdAt).toBeA('number');

  })
});
