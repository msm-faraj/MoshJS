function countTruthy(array) {
  let counter = 0;
  for (let truthy of array) {
    if (truthy) counter++;
  }
  return counter;
}

const arr = [NaN, null, undefined, 0, false, "", NaN];
console.log(countTruthy(arr));
