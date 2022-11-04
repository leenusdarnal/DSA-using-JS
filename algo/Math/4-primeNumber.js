function isPrime(n) {
  if (n < 2) return false;
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// Inputs
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(49));
