const isLogged = true;

const promise = (logged) => {
    return new Promise((resolve, reject) => {
        if (logged) {
            resolve (Math.random())
        } else {
            throw new Error("There is an error")
        }
            
    })
}

const anotherPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve (`{name: "John", age: 24}`)
        }
        else {
            throw new Error("No user found")
        }
            
    })
}



promise(isLogged)
    .then (anotherPromise)
    .then ((val) => console.log(val))
    .catch ((err) => console.error(err))
    .finally(() => console.log("Finally!"))
