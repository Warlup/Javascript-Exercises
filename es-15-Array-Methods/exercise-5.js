function sortPeopleByAge(people) {
  const peopleSort = people.sort((a, b) => {
    return a.age - b.age;
  });
  return peopleSort;
}

const people = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const sortingByAge = sortPeopleByAge(people)
console.log(sortingByAge)

// Un altro modo per risolvere il problema
// const peopleSort = people.sort((a, b) => {
//  if ( a.age < b.age ){
//   return -1;
// }
// if ( a.age > b.age ){
//   return 1;
// }
// return 0;
// });
// return peopleSort;