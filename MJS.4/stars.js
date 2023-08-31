function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

showStars(5);
