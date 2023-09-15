/**
 * 使用闭包技术实现一个通用的共享私有状态的函数
 */

function addPrivateProperty(o, name, predicate) {
    let value;

    o[`get${name}`]  = function() {
        return value;
    };

    o[`set${name}`] = function(v) {
        if (predicate && !predicate(v)) {
            throw new TypeError(`set${name}: invalid value ${v}`);
        } else {
            value = v;
        }
    };
}

let o = {};

addPrivateProperty(o, "Name", x => typeof x === "string");

o.setName("科比");
console.log(o.getName());
// o.setName(1); TypeError
