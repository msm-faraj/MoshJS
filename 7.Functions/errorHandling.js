try {
  const numbers = [1, 2, 3, 4, 5];
  const count = countOccurrencess(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrencess(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Input is not an arrray!!");
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
