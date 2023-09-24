/**
 * yield作为函数的中间参数使用
 */

function * generatorFn(init) {
    console.log(init);
    console.log(yield);
    console.log(yield);
}

let generator = generatorFn('foo');
generator.next('x');
generator.next('y');
generator.next('z');