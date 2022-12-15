const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function filtering(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value
}

const json = JSON.stringify(person, filtering);


console.log(json); // Should return: { id: 1, age: 25 }