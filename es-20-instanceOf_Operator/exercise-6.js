class Square {
  constructor(side) {
    this.side = side;
  }
  area(){
    if (Square instanceof Object) {
      return this.side * this.side;
    }
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area(){
    if (Rectangle instanceof Object){
      return this.width * this.height;
    }
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area(){
    if (Square instanceof Object) {
      return Math.round(Math.PI * this.radius * this.radius);
    }
  }
}

class AreaCalculator {
  static calculate(val){
    return val.area();
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
