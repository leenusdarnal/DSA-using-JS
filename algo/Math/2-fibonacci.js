function fibonacci(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let seq = [0, 1];
  for (let i = 2; i <= n - 1; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq;
}

// INPUT
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(10));

console.log(fibonacciRecursion(10));
