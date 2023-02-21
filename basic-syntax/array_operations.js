const checkLength = (number) => {
  if(number.length <= 10){
    return true
  } else {
    return false
  }
}

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
}

let numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

// console.log(numbers);
// console.log(filterLongNumbers(numbers));

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const getMessage = (person) => {
  return `Hi ${person.name}! ${person.discount}% off our best candies for you today!`;
}

const generateMessages = namesAndDiscounts.map(getMessage);

console.log(generateMessages)