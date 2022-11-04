// Given an array of distinct integer values, count the number of pairs of integers that
// have difference k. For example, given the array { 1, 7, 5, 9, 2, 12, 3} and the difference
// k = 2,there are four pairs with difference2: (1, 3), (3, 5), (5, 7), (7, 9)

function differenceOfTwo(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let fixNum = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (Math.abs(fixNum - arr[j]) === 2) {
        result.push([fixNum, arr[j]]);
      }
    }
  }
  return result;
}
// Inputs
console.log(differenceOfTwo([1, 7, 5, 9, 2, 12, 3]));
