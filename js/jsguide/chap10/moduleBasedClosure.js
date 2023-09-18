/**
 * 基于闭包的自动模块化.
 * 以下代码展示了针对浏览器的代码打包工具如webpack,Parcel的基本工作原理,
 * 也是对Node程序中使用的require()函数的简单介绍
 */

const modules = {};
function require(moduleName) {
    return modules[moduleName];
}

modules["sets.js"] = (function() {
    const exports = {};
    exports.BitSet = class BitSet {

    };

    return exports;
}());

modules["stats.js"] = (function() {
    const exports = {};
    const sum = (x, y) => x + y;
    const square = x => x * x;
    exports.mean = function(data) {

    };
    exports.stddev = function(data) {

    };

    return exports;
}());

