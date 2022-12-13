function sum(...rest) {
  let sum = 0;
  for (let val of rest) {
    sum += val;
  }
  return sum;
}

const numbers = [1, 2, 3, 4];
console.log(sum(numbers[0], numbers[1], numbers[2], numbers[3]));