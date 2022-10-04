function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target > arr[mid]) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
