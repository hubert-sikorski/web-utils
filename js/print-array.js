let arr = [1, 2];

console.log(...arr); // 1 2

// or if we want to have colons

let result = '';

arr.forEach(element => {
  if (arr.indexOf(element) !== arr.length - 1) {
    return (result += `${element}, `);
  }
  return (result += `${element}`);
});

console.log(result); // 1, 2
