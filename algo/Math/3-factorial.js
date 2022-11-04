function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question('Enter a Number to find its factorial', (num) => {
  const result = factorial(num);
  console.log(result);
  readline.close();
});
