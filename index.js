function except(array, excluded) {
  const output = [];
  for (let num of array) if (!excluded.includes(num)) output.push(num);
  return output;
}

console.log(except([1, 2, 3, 1], [1, 2]));
