/**
 * 定义捕获器
 */

const target = {
    foo :'bar'
};

const handler = {
    // 捕获器在处理程序对象中以方法名为键
    get() {
        return 'handler override';
    }
};

const proxy = new Proxy(target, handler);

/**
 * 以下方式都会触发get()捕获器
 */
console.log(proxy.foo); // handler override
console.log(proxy['foo']); // handler override

console.log(Object.create(proxy)['foo']); // handler override