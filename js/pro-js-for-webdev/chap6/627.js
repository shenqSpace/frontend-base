

let person1 = {
    toString() {
        return "person1 toString";
    },

    toLocaleString() {
        return "person1 toLocaleString";
    }
 }

 let person2 = {
    toString() {
        return "person2 toString";
    },

    toLocaleString() {
        return "person2 toLocaleString";
    }
 }

 let arr = [person1, person2];
console.log(arr);
console.log(arr.toString());
console.log(arr.toLocaleString());
console.log(arr.join("--")); // 理解为先调用toString，在用指定分隔符连接起来