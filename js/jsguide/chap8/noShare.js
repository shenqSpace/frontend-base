/**
 * 闭包意外共享访问不该被共享的变量
 */

function constfunc(v) {
    return () => v;
}

let funcs = [];

for (var i = 0; i < 10; i++) {
    funcs[i] = constfunc(i);
}