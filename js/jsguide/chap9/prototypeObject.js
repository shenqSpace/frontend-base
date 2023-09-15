/**
 * 原型对象与类
 */

function range(from, to) {
    let r = Object.create(range.methods);

    r.from = from;
    r.to = to;
}

// 定义一个原型对象
range.methods = {
    includes(x) {
        return x >= this.from && x <= this.to;
    },

    [Symbol.iterator]: function*() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    toString() {
        return "...";
    }
}

