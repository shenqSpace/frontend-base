/**
 * 原型继承
 */

let animal = {
    animalName: 'animal'
}

let bird = Object.create(animal);

console.log(Object.getPrototypeOf(bird) === animal);
console.log(Object.getPrototypeOf(animal) === Object.prototype);
console.log(bird instanceof Object);