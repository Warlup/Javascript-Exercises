const number = 15;

let promise = new Promise(function(resolve, reject){
    if (number > 10) {
        resolve("True")
    } else {
        reject ("False")
    }
});

promise
    .then((val) => console.log(val))
    .catch((err) => console.log(err))

console.log(promise)