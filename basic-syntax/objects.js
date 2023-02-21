const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

// console.log(person.address.city);
// console.log(person.hobbies[1]);

const cohort = {
  name: 'January2023',
  id: 40,
  students: ['Edward', 'Adam', 'Terry']
}

const printStudents = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
}

printStudents(cohort);
