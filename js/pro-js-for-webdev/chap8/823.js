/**
 * 构造函数创建特定类型对象
 */

/**
 * 注意看构造函数跟工厂函数的区别：
 * 1、没有显式创建对象
 * 2、属性和方法直接赋给了this
 * 3、没有return
 * JS中，构造函数跟普通函数本质没有区别，函数名首字母大写只是为了好区分构造函数和普通函数，
 * 只要用new 调用的函数就是构造函数，这个过程会自动创建对象，这个对象的[[Prototype]]特性
 * 赋值为构造函数的prototype属性。
 * 这个函数作用域内保存了一个指向当前对象的this引用。
 * 这个构造函数默认返回新对象，也可以自己指定返回另外的非空对象。
 * 新对象有一个默认的constructor属性，它指向构造函数本身，即obj.constructor === Person，这其实
 * 是新对象继承了原型对象的constructor属性，Person.prototype.constructor
 * @param {*} name 
 * @param {*} age 
 * @param {*} job 
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}

let p1 = new Person("亚索", 12, "战士");
let p2 = new Person("劫", 12, "刺客");

console.log(p1.constructor === Person); // true

/**
 * p1 p2的sayName属性同名却不相等，这是构造函数创建对象带来的问题
 * 通过将函数定义转移到构造函数外部来解决问题
 */
console.log(p1.sayName === p2.sayName); // false

function Person2(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName() {
    console.log(this.name);
};

let np1 = new Person2("亚索", 12, "战士");
let np2 = new Person2("劫", 12, "刺客");
np1.sayName();
np2.sayName();

/**
 * 虽然解决了相同逻辑的函数重复定义的问题，但是引来了新问题，
 * this.sayName属性指向了一个外部函数，所有对象都会共享
 * 全局作用域上的sayName()函数。这影响到了全局作用域上的代码，
 * 因为某个对象如果有多个方法，意味着我们要在全局作用域上添加这些方法，
 * 这是一种非常乱的设计。
 * 通过原型模式解决该问题
 */


