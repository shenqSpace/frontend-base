/**
 * 本示例演示了在不支持ES6 class关键字的JS版本中创建类的习惯做法
 */

// 使用构造函数来创建类
function Range(from, to) {
    this.from = form;
    this.to = to;
}

// 所有Range对象都继承这个原型对象
Range.prototype = {
    includes: function(x) {
        return x >= this.from && x <= this.to;
    },

    [Symbol.iterator]: function*() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    toString() {
        return "构造函数创建类";
    }
};
