function recursiveFactorail(n) {
  if (n === 1) {
    return n;
  }
  return n * recursiveFactorail(n - 1);
}

// 1*2*3*4

console.log(recursiveFactorail(4));
console.log(recursiveFactorail(5));
