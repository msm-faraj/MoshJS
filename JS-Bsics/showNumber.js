function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(`${i} is an "EVEN" number`);
    else console.log(`${i} is an "ODD"  number`);
  }
}

showNumber(14);
