/**
 * 自定义迭代器
 */

class Counter {
    constructor(limit) {
        this.limit = limit;
    }

    /**
     * 将迭代计数器放在迭代器里面，每次调用都会重新计数，这样一个对象就能创建多个迭代器进行多次迭代
     * @returns 
     */
    [Symbol.iterator]() {
        let count = 1, limit = this.limit;
        return {
            next() {
                if(count <= limit) {
                    return { done: false, value: count++ };
                } else {
                    return { done: true, value: undefined };
                }
            }
        };
    }
}

let counter = new Counter(3);
for (const i of counter) {
    console.log(i);
}
// 同一个counter对象可以多次迭代了
for (const i of counter) {
    console.log(i);
}



