let x = {
  a: 1,
  b: 2,
};

let arr = [];

for (let key in x) {
  arr.push(x[key]);
}

console.log(arr); // [1, 2]
