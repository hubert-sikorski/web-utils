const a = [1, 2, 5, 7, 9];
const b = [2, 5, 7, 12, 100];

const newArr = a.concat(b);

newArr.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(newArr);
