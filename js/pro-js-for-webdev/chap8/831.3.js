/**
 * 对象字面量形式给原型赋值会重写原型链，导致原来的原型链断裂
 */

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();

// 导致上面的原型链断裂
SubType.prototype = {
    getSubValue() {
        return this.subproperty;
    },
};

let obj = new SubType();
console.log(obj.getSuperValue()); // error 