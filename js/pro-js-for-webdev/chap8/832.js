/**
 * 通过盗用构造函数的技术解决原型包含引用值导致的继承问题
 */

function SuperType() {
    this.colors = ["red", "orange", "yellow"];
}

function SubType() {
    // 继承SuperType
    SuperType.call(this);
}

let instance1 = new SubType();
