const numbers = [20, 40, 17, 99, 59, 77];

// filter with an index
const filteredNumbers = numbers.filter((number, index) => number <= 40 && index === 0);
// console.log(filteredNumbers);

//map
const mappedNumbers = numbers.map(number => {
  if(number % 2 === 0){
    return number / 2;
  } else {
    return number;
  }
});
// console.log(mappedNumbers);

//reduce
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);