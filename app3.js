class Action {
  static odd_or_ever(num) {
    if (num % 2 === 0) {
      return "even number";
    } else {
      return "odd number";
    }
  }
}


const number = 19

console.log(Action.odd_or_ever(number));


