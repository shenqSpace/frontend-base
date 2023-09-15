/**
 * 嵌套函数
 */

function f() {
    let a = 1, b = 2;
    function g() {
        function h() {
            return a + b;
        }
        return h();
    }
    return g();
}

console.log(f());