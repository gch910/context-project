/***********************************************************************
Below we've declared a Calculator class that has a property
representing the total - which is initialized to 0. This time around we'll
make our calculator a bit fancier! Let's first add some new functionality.

Write two methods within this class named:
1. modulo(num) - sets the total to the remainder of division with the arg number
2. squared() - multiplies the total by its self

Each of the above methods should return the total.

Example:
let fancyCalculator = new FancyCalculator();
fancyCalculator.setTotal(5) // => returns 5
fancyCalculator.squared() // => returns 25
fancyCalculator.modulo(4) // => returns 1
fancyCalculator.total // => returns 1
***********************************************************************/

class FancyCalculator {
  constructor() {
    this.total = 0;
  }
  setTotal(num) {
    this.total = num;
    return this.total;
  }
  modulo(num) {
    return this.total = this.total % num;
  }
  squared() {
    return this.total = this.total**2;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = FancyCalculator;
