function sum(...arguments) {
  console.log(arguments);
  if (arguments.length === 1 && Array.isArray(arguments[0]))
    arguments = [...arguments[0]];
  return arguments.reduce((sum, value) => sum + value);
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
