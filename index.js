// function includes(array, searchElement) {
//   for (let i = 0; i < array.length; i++)
//     if (array[i] === searchElement) return true;
//   return false;
// }

function includes(array, searchElement) {
  for (let num of array) if (num === searchElement) return true;
  return false;
}

console.log(includes([1, 3, 5, 7, 9, 11, 13], 10));
