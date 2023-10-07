/**
 * 通过new.target实现抽象基类
 */

class Vehicle {
    constructor() {
        console.log(new.target);
        if (new.target === Vehicle) {
            throw new Error("Vehicle 不能被直接初始化")
        }
    }
}

class Benz extends Vehicle {}

new Benz();
new Vehicle(); // error