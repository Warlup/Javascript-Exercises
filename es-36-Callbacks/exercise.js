function repeatHello(callback){
   const myRepeat = setInterval(() => {
        callback()
    }, 1000);
    setTimeout(() => {
        clearInterval(myRepeat)
    }, 5000);
}

const sayHello = () => console.log("Hello")

repeatHello(sayHello)
