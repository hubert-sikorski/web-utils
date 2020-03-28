const obj = {
  x: 1,
  getX() {
    const inner = () => {
      console.log(this.x);
    };
    inner();
  },
};

obj.getX();

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

obj2.getX();

const obj3 = {
  x: 1,
  getX() {
    const inner = function() {
      console.log(this.x);
    };
    inner.bind(this)();
  },
};

obj3.getX();
