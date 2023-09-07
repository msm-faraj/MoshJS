function except(array, excluded) {
  const output = [];
  for (let num of array) if (!excluded.includes(num)) output.push(num);
  return output;
}
