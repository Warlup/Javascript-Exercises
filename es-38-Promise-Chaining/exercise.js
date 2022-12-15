const isLogged = true;

const promise = (logged) => {
    return new Promise((resolve, reject) => {
        if (logged) {
            resolve (Math.random())
        }
            reject ("There is an error")
    })
}

const anotherPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve (`{name: "John", age: 24}`)
        }
            reject ("There is an error inside this promise")
    })
}


promise(isLogged)
    .then ((val) => anotherPromise(val))
    .then ((val) => console.log(val))
    .catch ((err) => console.error(err))