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

let data = localStorage.getItem("age")
let data1 = localStorage.getItem("id")
let data2 = localStorage.getItem("name")

let arr = [data, data1, data2];
