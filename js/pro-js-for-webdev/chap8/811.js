// "use strict"
/**
 * 修改对象属性的默认特性 [[Configurable]] [[Enumerable]] [[Writable]] [[Value]]
 * Object.defineProperty(obj, attribute, descObj)
 */

let person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "kobe"
});

person.name = "jordan";
/**
 * 不能被重写了，因为writable is false。严格模式下会报错。
 * 同理，如果configurable: false, 那么该属性不能被删除、修改、设置为访问器属性。
 */
console.log(person.name); // kobe



