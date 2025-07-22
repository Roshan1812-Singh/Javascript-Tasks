function maxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let numbers = [20, 45, 67, 200, 400, 401];
console.log(maxNumber(numbers));
