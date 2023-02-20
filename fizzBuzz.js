const fizzBuzz = (integer) => {
  if (integer % 3 === 0 && integer % 5 === 0) {
    return 'FizzBuzz';
  } else if (integer % 3 === 0) {
    return 'Fizz';
  } else if (integer % 5 === 0) {
    return 'Buzz';
  } else {
    return integer;
  }
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(8));
console.log(fizzBuzz(15));
console.log(fizzBuzz(18));
console.log(fizzBuzz(20));