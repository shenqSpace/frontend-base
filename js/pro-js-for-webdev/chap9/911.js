/**
 * 创建一个代理
 * new Proxy(targetObj, handlerObj)
 */

const target = {
    id: 'target'
};

const handler = {};

const proxy = new Proxy(target, handler);

// id属性会访问同一个值
console.log(target.id);
console.log(proxy.id);





