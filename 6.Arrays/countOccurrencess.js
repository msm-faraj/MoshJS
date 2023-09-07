// function countOccurrencess(array, searchElement) {
//   let counter = 0;
//   for (let el of array) if (el === searchElement) counter++;
//   return counter;
// }

function countOccurrencess(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
