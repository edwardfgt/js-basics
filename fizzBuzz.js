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

const fizzBuzzUntil = (stop) => {
  for (let i = 1 ; i <= stop ; i++) {
    console.log(fizzBuzz(i));
  }
}

console.log(fizzBuzzUntil(10));