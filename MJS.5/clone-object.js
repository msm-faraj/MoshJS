const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//1
// const another = {};
// for (let c in circle) another[c] = circle[c];
//2
// const another = Object.assign({}, circle);
//3 spread operator
const another = { ...circle };

console.log(another);
