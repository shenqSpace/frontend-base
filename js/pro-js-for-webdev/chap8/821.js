/**
 * 工厂模式创建特定对象
 * 这种创建对象的方式虽然可以创建多个类似的对象，
 * 但是不能标识这些对象都是什么类型的。
 * 这个问题可以通过构造函数来解决，因为构造函数就是用来创建特定类型对象的。
 */

function createPerson(name, age, job) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
    return o;
}

let p1 = createPerson("张三", 12, "软件工程师");
let p2 = createPerson("李四", 12, "硬件工程师");

