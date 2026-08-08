function Animal(name) {
    this.name = name;
}

Animal.prototype.say = function() {
    console.log(`Меня зовут ${this.name}`);
};

function Dog(name, breed) {
    Animal.call(this, name); // наследуем свойства
    this.breed = breed;
}

// наследуем методы
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("Гав");
};

const dog = new Dog("Шарик", "Овчарка");

dog.say();   // Меня зовут Шарик
dog.bark();  // Гав

const dogProto = dog.__proto__

console.log(dogProto)

console.log(dogProto.__proto__)

console.log(dogProto.__proto__.__proto__)

console.log(dogProto.__proto__.__proto__.__proto__)