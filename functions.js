() => {
  console.log('Hi there!');
};

// 1. This function accepts no arguments
const printMessage1 = () => {
  console.log('Hi there!');
}

// 2. This function accepts one
const printMessage2 = (message) => {
  console.log(message);
}

const sayHello = (name) => {
  console.log(`Hello ${name}`);
}

// printMessage1();
// printMessage2('Hi There');

module.exports = printMessage1;
module.exports = printMessage2;
sayHello('Edward');