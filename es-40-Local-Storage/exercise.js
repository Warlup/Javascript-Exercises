const user = {
  id: 1,
  name: "John",
  age: 25,
}

function store(user){
  for (let key in user) {
    localStorage.setItem(key, user[key])
  }
   
}

store(user)