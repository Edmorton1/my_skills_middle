class Animal {
  name;

  constructor(name) {
    this.name = name
  }

  say = () => {
    console.log(`name - ${this.name}`)
  }
}

class Dog extends Animal {
  breed;

  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

const dog = new Dog('Вася', 'крутой')

dog.say()

console.log(Dog.__proto__)

console.log(Dog.__proto__.__proto__)

console.log(Dog.__proto__.__proto__.__proto__)

console.log(Dog.__proto__.__proto__.__proto__.__proto__)

console.log('==================================')

console.log(dog.__proto__)

console.log(dog.__proto__.__proto__)

console.log(dog.__proto__.__proto__.__proto__)

console.log(dog.__proto__.__proto__.__proto__.__proto__)

// class Func {
//   static log = () => {
//     console.log('Logggg')
//   }
// }

// Func.log()