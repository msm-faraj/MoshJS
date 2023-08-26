function calculateGrade(marks) {
  const average = arrayAverage(marks);
  if (average < 60) return "F";
  if (average < 60) return "D";
  if (average < 60) return "C";
  if (average < 60) return "B";
  return "A";
}

function arrayAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

const arr = [100, 90, 80, 85];
console.log(calculateGrade(arr));
