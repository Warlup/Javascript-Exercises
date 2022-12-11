class Person {
  #firstName = "";
  #lastName = "";
  #age = 0;
  constructor(firstName, lastName, age){
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  set firstName(name) {
    this.#firstName = name;
  }

  set lastName(lastName) {
    this.#lastName = lastName;
  }

  set age(age) {
    this.#age = age;
  }

  get fullName(){
    return this.#firstName + " " + this.#lastName + " " + this.#age + " years old";
  }


}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
