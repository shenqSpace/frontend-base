/**
 * yield中断执行
 * 生成器对象也实现了Iterable接口，也有next()方法，也返回 {done: , value: }对象
 * 生成器对象默认的迭代器是自引用的
 */

/**
 * yield返回语句很像函数的中间返回语句，生成的值会出现在next()方法的value属性上。
 * 通过yield返退出的生成器函数会处在done:false状态，但是return退出的生成器函数是done:true状态。
 * yield只能在生成器函数内部使用。
 */
function * generatorFn() {
    yield 'foo';
    yield 'zoo';
    yield 'kone';
}

// 调用生成器函数，会产生一个生成器对象。此时是暂停执行状态，调用next()方法激活
let generator = generatorFn();

console.log(generator.next()); // { value: 'foo', done: false }

/**
 * 生成器对象作为可迭代对象
 */
for (let x of generatorFn()) {
    console.log(x);
}

/**
 * 1. 生成器对象作为可迭代对象
 */
function * nTimes(n) {
    while (n--) yield;
}

for (let _ of nTimes(3)) {
    console.log('foo');
}

/**
 * yield作为函数的中间参数使用
 */


