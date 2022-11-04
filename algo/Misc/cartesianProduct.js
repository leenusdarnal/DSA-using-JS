function cartesianProduct(arrA, arrB) {
  const product = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      product.push([arrA[i], arrB[j]]);
    }
  }
  return product;
}

// Inputs
console.log(cartesianProduct([1, 2], [3, 4, 5]));
