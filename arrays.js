const names = ['Edward', 'James', 'Luke', 'Ryan', 'Cassius', 'Max'];

// console.log(names.length);
// console.log(names[1]);
// const newNames = names.concat('Adam')
// console.log(newNames)
// console.log(newNames.slice(2,4))

const numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach(element => {
//   console.log(element)
// });

const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  }

  return array.concat(number);
}

console.log(addToBatch([1], 3)); 
console.log(addToBatch([1, 2, 3], 4)); 
console.log(addToBatch([], 8)); 
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7)); 
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));