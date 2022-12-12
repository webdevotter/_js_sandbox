// Destructuring

let a, b;
[a, b] = [100, 200];

//Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

({a, b} = {a:100, b:200, c:300, d:400, e:500});
({a, b, ...rest} = {a:100, b:200, c:300, d:400, e:500});

console.log(rest);