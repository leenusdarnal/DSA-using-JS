function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      return arr;
    }
  }
  return arr;
}

// Inputs

console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 4, 5]));
console.log(bubbleSort([-6, 20, 8, -2, 4]));
console.log(
  bubbleSort([43, 456, 546, 123, 45, 51846, 46, 85, 684, 867, 86, 684])
);
