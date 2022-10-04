function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// function factorial(n) {
//   if (n < 0) {
//     return -1;
//   } else if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Input

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(5));
readline.question('Enter a Number to find its factorial', (num) => {
  const result = factorial(num);
  console.log(result);
  readline.close();
});
