const list = [1, 2, 3];
let [a, , b] = list;
console.log(a, b);
[b, a] = [a, b];
console.log(a, b);
