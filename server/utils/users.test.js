const expect = require('expect');

const {Users} = require('./users');



describe('Users', () => {
  var users = new Users();
  beforeEach(() => {
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Andrews Room'
    },
    {
      id: '2',
      name: 'Brandon',
      room: 'Tech Talk'
    },
    {
      id: '3',
      name: 'Jeniffer',
      room: 'Tech Talk'
    }];
  });

  it('should remove a user', () => {
    var usr = users.removeUser('1');
    expect(users.users.length).toBe(2);
    console.log(users.users[0]);
    expect(usr).toEqual({id: '1', name: 'Mike', room: 'Andrews Room'});
  });

  it('should not remove user', () => {
    var usr = users.removeUser('1111111');
    expect(users.users.length).toBe(3);
    expect(usr).toBeFalsy();
  });

  it('should find user', () => {
    var usr = users.getUser('2');
    expect(usr).toEqual(users.users[1]);
  });

  it('should not find user', () => {
    var usr = users.getUser('4');
    expect(usr).toBeFalsy();
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {id: '12345', name: 'Arthur', room: 'Potinss Tema'};
    users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node Tech Talk', () => {
    var userList = users.getUserList('Tech Talk');
    expect(userList).toEqual(['Brandon', 'Jeniffer']);
  });

  it('should return names for node Andrews Room', () => {
    var userList = users.getUserList('Andrews Room');
    expect(userList).toEqual(['Mike']);
  });
});
