function powerOfTwo(n) {
  if (n < 1) {
    return 0;
  } else if (n === 1) {
    console.log(1);
    return 1;
  } else {
    let prev = powerOfTwo(Math.floor(n / 2));
    let current = prev * 2;
    console.log(current);
    return current;
  }
}
// Inputs
powerOfTwo(1);
powerOfTwo(2);
powerOfTwo(3);
powerOfTwo(4);

powerOfTwo(50);
