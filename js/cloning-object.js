const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};

const clone = JSON.parse(JSON.stringify(obj));
console.log(clone); // { a: { b: { c: 1 } } }

clone.a.b.c = 2;
console.log(clone.a.b.c); // 2
