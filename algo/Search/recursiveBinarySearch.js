function recursivebinarySearch(arr, target, first = 0, last = arr.length - 1) {
  let mid = Math.floor((last + first) / 2);
  if (first > last) {
    return -1;
  }
  if (target === arr[mid]) {
    return mid;
  }
  if (arr[mid] < target) {
    first = mid + 1;
  }
  if (arr[mid] > target) {
    last = mid - 1;
  }
  return recursivebinarySearch(arr, target, first, last);
}

console.log(recursivebinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursivebinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursivebinarySearch([-5, 2, 4, 6, 10], 20));
