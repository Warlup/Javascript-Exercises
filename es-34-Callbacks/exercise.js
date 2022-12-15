function printAsyncName(callback, name) {
    setTimeout(() => {
    console.log(name);
    }, 2000);
    setTimeout(() => {
    callback();
    }, 1000);
    
}

const sayHello = () => console.log ("Hello");


printAsyncName(sayHello, "Manuel")