class Cars {
    car;
    color;
    constructor(car, color) {
        this.car = car
        this.color = color
        
    }
}

const car1 = new Cars("mersedes-benz", "grey");
const car2 = new Cars("BMW", "dark-blue");

console.log(car1);
console.log(car2);