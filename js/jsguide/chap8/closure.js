/**
 * 闭包
 */
// 从这个例子可以看出函数使用的是定义时的作用域所绑定的变量,跟在哪里调用没关系.
let scope = "global scope";
function checkClosure() {
    let scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}

let res = checkClosure()();
console.log("res = " + res);