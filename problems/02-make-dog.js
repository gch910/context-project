/***********************************************************************
Below we've declared a static function named `makeJet` for you that will return
an instance of the Dog class.

You will be writing two new methods on the class below.
These two methods wil be: changeName(newName) and speak(word).
The speak function will intake a word and then return a sentence with the name
of the dog saying that word. The changeName function will intake a newName and
will set the dog object's name to be the passed in name. See below for examples:


Examples:
let dog1 = Dog.makeJet(); // returns an object

console.log(dog1.name); // Jet
console.log(dog1.speak("hello")); // Jet says hello
console.log(dog1.changeName("Freyja")); // Freyja
console.log(dog1.name); // Freyja
console.log(dog1.speak("hello")); // Freyja says hello

let dog2 = Dog.makeJet();
console.log(dog2.name); // Jet

***********************************************************************/

class Dog {
  constructor(name) {
    this.name = name;
  }
  static makeJet() {
    return new this('Jet');
  }
  speak(word) {
    return `${this.name} says ${word}`;
  }
  changeName(name) {
    return this.name = name;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = Dog;
