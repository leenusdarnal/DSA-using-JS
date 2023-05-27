/*
Kadane’s algorithm

Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. 

The idea of Kadane’s algorithm is to maintain a variable max_ending_here that stores the maximum sum contiguous subarray ending at current index and a variable max_so_far stores the maximum sum of contiguous subarray found so far, Everytime there is a positive-sum value in max_ending_here compare it with max_so_far and update max_so_far if it is greater than max_so_far.

So the main Intuition behind Kadane’s algorithm is, 

– the subarray with negative sum is discarded (by assigning max_ending_here = 0 in code).
– we carry subarray till it gives positive sum.
*/

const MaxSubArrary = (arr) => {
  let currentMax = arr[0]
  let maxGlobal = arr[0]
  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i])
    if (currentMax > maxGlobal) maxGlobal = currentMax
  }
  return maxGlobal
}

console.log(MaxSubArrary([-2, 3, 2, -1]))
