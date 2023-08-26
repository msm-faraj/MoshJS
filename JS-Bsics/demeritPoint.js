function checkSpeed(speed) {
  if (typeof speed === "number") {
    speed = Math.floor(speed);
    const speedLimit = 70;
    const kmPoint = 5;
    let point = Math.floor((speed - speedLimit) / kmPoint);
    if (point < 1) return "Ok";
    else if (1 <= point && point < 12) return point;
    else return "License suspended";
  }
  return NaN;
}
console.log(checkSpeed("ts"));
console.log(checkSpeed(70));
console.log(checkSpeed(75));
console.log(checkSpeed(80));
console.log(checkSpeed(90));
console.log(checkSpeed(95));
console.log(checkSpeed(100.1));
console.log(checkSpeed(125));
console.log(checkSpeed(130.9));
console.log(checkSpeed(130.5));
