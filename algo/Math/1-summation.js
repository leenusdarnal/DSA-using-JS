function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Input
console.log(summation(2));
console.log(summation(6));
console.log(summation(10));
