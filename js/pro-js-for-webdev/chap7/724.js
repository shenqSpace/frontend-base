/**
 * 提前终止迭代器 return()
 * 如果在外部消费迭代值时没有消费完，内置语言结构会自动调用return()方法
 */

class Counter {
	constructor(limit) {
		this.limit = limit;
	}

	[Symbol.iterator]() {
		let count = 1,
			limit = this.limit;
		return {
			next() {
				if (count <= limit) {
					return { done: false, value: count++ };
				} else {
					return { done: true, value: undefined };
				}
			},
			return() {
				console.log("-------------提前终止-------------");
				return { done: true };
			},
		};
	}
}

let counter = new Counter(3);
/**
 * 在for/of 循环中，break,continue,throw,return 都可以提前退出而触发return()方法
 */
for (let i of counter) {
    if (i > 2) break;
    console.log(i);
}

/**
 * 如果迭代器没有关闭，可以接着从上次离开的地方继续迭代
 */
for (let i of counter) {
    console.log(i);
}
