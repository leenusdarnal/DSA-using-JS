function quicksort(arr, start, end) {
  if (start < end) {
    let pivot = partition(arr, start, end);
    quicksort(arr, start, pivot - 1);
    quicksort(arr, pivot + 1, end);
  }
  return arr;
}

function partition(arr, start, end) {
  let pivot = end;
  let i = start;
  for (j = start; j < end; j++) {
    if (arr[j] < arr[pivot]) {
      swap(i, j);
      i++;
    }
  }
  swap(arr, i, pivot);
  return i;
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// inputs

console.log(quicksort([7, 2, 1, 8, 6, 3, 5, 4], 0, 7));
console.log(quicksort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 0, 9));
