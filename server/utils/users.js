[{
  id: '/#43534353fdvfdvd',
  name: 'Arthur',
  room: 'The Office'
}]


//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var usr = this.getUser(id);
    if (usr) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    return usr;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }

}

module.exports = {Users};










// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }
//
// var me = new Person('Arhutr', 25);
// var description = me.getUserDescription();
// console.log(description);
