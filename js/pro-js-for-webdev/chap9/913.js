/**
 * 捕获器参数和反射API
 */

const target = {
    foo: 'bar'
};

const handler = {
    get(trapTarget, property, receiver) {
        console.log(trapTarget === target);
        console.log(property);
        console.log(receiver === proxy);
        // 有了这些参数，就可以重建被捕获方法的原始行为
        return trapTarget[property];
    }
};

const proxy = new Proxy(target, handler);

let res = proxy.foo;
console.log(res);


