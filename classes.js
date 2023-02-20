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

class userBase {
  constructor(user) {
    this.user = user;
  }

  getNames(){

  }

  getIntroductions(){
    
  }
}

module.exports = User;