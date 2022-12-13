const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

const {id, firstName, lastName, age} = person;

// Oppure un altro metodo sarebbe iterare con un loop
// for (let keys in Object.entries(person)){
//   let [key, val] = keys;
//   person[key] = val;
// }

console.log(id, firstName, lastName, age);