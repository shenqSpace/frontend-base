/**
 * 通过原型链实现继承
 * 
 * 每个构造函数都有一个原型对象，原型对象有一个属性指向构造函数，而实例有一个内部指针指向原型对象。
 * 这个原型对象可以是另一个类型的实例，这样的话，这个原型对象也有一个内部指针指向另一个原型，
 * 那么这另一个原型也有一个指针指向另一个构造函数。这样就在实例和原型对象之间构成了一条原型链。
 */

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subProperty = false;
}

// SubType构造函数关联的原型对象指向SuperType构造函数关联的原型对象
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subProperty;
};

let obj = new SubType();
console.log(obj.getSuperValue());





