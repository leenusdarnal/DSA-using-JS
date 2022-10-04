// function powerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }

function powerOfTwo(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(powerOfTwo(8));
console.log(powerOfTwo(2));
console.log(powerOfTwo(16));
console.log(powerOfTwo(99));
