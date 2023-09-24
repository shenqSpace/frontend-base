/**
 * 判断是否有默认迭代器属性引用了迭代器工厂函数
 * 字符串、数组、映射、集合、arguments对象、NodeList等DOM集合类型
 * 都实现了Iterable接口
 */

let n = 1;
let obj = {};
let arr = [];

console.log(n[Symbol.iterator]); // undefined 该类型没有实现 Iterable 接口
console.log(obj[Symbol.iterator]); // undefined 普通对象类型也没有实现  Iterable 接口

/**
 * 数组实现了 Iterable 接口，引用迭代器工厂方法，迭代元素
 */
console.log(arr[Symbol.iterator]); // [Function: values] 这是一个迭代器工厂函数

/**
 * 没调用一次迭代器工厂函数，就会生成一个迭代器对象。
 * 实际操作中，不需要手动调用。实现可迭代协议的所有类型会自动兼容接收可迭代对象的语言特性。
 */
console.log(arr[Symbol.iterator]()); // Object [Array Iterator] {}
console.log("x"[Symbol.iterator]()); // Object [String Iterator] {}


