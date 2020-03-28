// option 1: arrow function automatically binds this to current object
const obj = {
  x: 1,
  getX() {
    const inner = () => {
      console.log(this.x);
    };
    inner();
  },
};

obj.getX(); // 1

// option 2: use lexical scoping
const obj2 = {
  x: 1,
  getX() {
    const that = this; //lexical scoping
    const inner = function() {
      console.log(that.x);
    };
    inner();
  },
};

obj2.getX(); // 1

// option 3: bind this using bind() method
const obj3 = {
  x: 1,
  getX() {
    const inner = function() {
      console.log(this.x);
    };
    inner.bind(this)();
  },
};

obj3.getX(); // 1
