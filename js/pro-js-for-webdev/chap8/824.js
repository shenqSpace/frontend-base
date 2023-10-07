/**
 * 原型模式共享属性和方法
 */

function Person() {}

Person.prototype.name = "zhangsan";
Person.prototype.age = 0;
Person.prototype.job = "";
Person.prototype.sayName = function() {
    console.log(this.name);
}

let p1 = new Person();
p1.sayName();

let p2 = new Person();
p2.sayName();

console.log(p1.sayName === p2.sayName); // true

/**
 * 虽然实例看起来是通过构造函数初始化的，但是实例跟构造函数并没有直接关系，
 * 实际是跟构造函数的原型对象有直接关系。obj[[Prototype]] --> Person.prototype 
 */

