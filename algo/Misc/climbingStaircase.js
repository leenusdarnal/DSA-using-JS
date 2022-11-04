function climbingStaircase(totalSteps) {
  const NumberofWays = [1, 2];
  for (let i = 2; i < totalSteps; i++) {
    NumberofWays[i] = NumberofWays[i - 1] + NumberofWays[i - 2];
  }

  return NumberofWays[totalSteps - 1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
