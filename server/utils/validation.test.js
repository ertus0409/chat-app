const expect = require('expect');

var {isRealString} = require('./validation');


describe('isRealString', () => {
  it('should reject non-string values', () => {
    var myNum = 15;
    expect(isRealString(myNum)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var space = '      ';
    expect(isRealString(space)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var myStr = ' HelloWo rl   ';
    expect(isRealString(myStr)).toBe(true);
  })
});
