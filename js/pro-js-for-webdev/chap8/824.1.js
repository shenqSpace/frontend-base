/**
 * 理解原型
 */

function Person() {
    this.name = "";
}

console.log(typeof Person.prototype);

/**
 * JS不支持直接访问[[Prototype]]特性的方式，但是有的浏览器会暴露一个__proto__属性来支持原型访问。
 * 正常的原型链终止于Object的原型对象，null
 */
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Person.prototype.__proto__.constructor === Object); // true
console.log(Person.prototype.__proto__.__proto__ === null); // true

// 浏览器端可以看到结果
console.log(Person.prototype.__proto__);

let p1 = new Person();
console.log(Object.getPrototypeOf(p1));

