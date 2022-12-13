const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1; 
person2.firstName = "Simon";
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);


// Risposta: In javascript gli array e gli oggetti sono reference values, quindi quando si prova a copiare
// un array utilizzando l'= come in questo esercizio, esso copierà soltanto la reference originale
// e non il valore dell'array, per cui andando a cambiare la reference del secondo array,
// cambierà anche la reference del primo array.

// Esistono altri modi per fare cloning di un array che non intaccano i valori di un array, un esempio è
// utilizzando vari metodi degli array (from, map, filter, forEach etc.) 
// oppure nel caso degli oggetti possiamo usare l'Object.assign oppure tramite JSON il JSON.parse(JSON.stringify(obj))