// file: rectangle.js

class Rectangle {

  // A constructor, to give initial arguments.
  constructor(height, width) {

    // We can define attributes stored on the instance with `this`
    this.height = height;
    this.width = width;
  }

  // A method.
  getArea() {
    return this.height * this.width;
  }
}

// Export the class




class User {

  constructor(name) {
    this.name = name;
  }

  getName() {
  return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`
  }
}

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count(){
    return this.users.length;
  }

  getNames(){
    return this.users;
  }

  getIntroductions(){
    return this.users.map(user => user.getIntroduction())
  }
}



const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

const userBase = new UserBase(users);
console.log(userBase.count());
console.log(userBase.getNames());
console.log(userBase.getIntroductions());

