/**
 * 迭代映射中的键值对
 */

/**
 * map实例是可迭代对象，key(), values(), entries() 迭代内部键值对
 */
let m = new Map();
m.set("1", "jordan");
m.set("2", "kobe");
m.set("3", "oneal");
m.set("4", "curry");

for (let pair of m.entries()) {
    console.log(pair);
}

/**
 * forEach(callback, [this]) 配合回调函数迭代键值对
 */
m.forEach(
    (value, key) => console.log(`[${key}, ${value}]`)
);



