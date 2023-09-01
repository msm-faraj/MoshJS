const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) console.log(key, circle[key]);

for (let key of Object.keys(circle)) console.log(key, circle[key]);

if ("radius" in circle) console.log("yes");
