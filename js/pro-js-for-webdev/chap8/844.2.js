/**
 * 
 */

class Vehicle {
    constructor() {
        console.log(this);
    }
}

let car = new Vehicle();

class Benz extends Vehicle {
    //子类构造函数中要先调用父类构造函数,确保子类在初始化过程中能够正确地继承和初始化父类的属性和方法。
    constructor() {
        super(); // 为什么在子类构造函数中一定要先调用父类构造函数，才能使用this
        return this;
    }
}

let car2 = new Benz();