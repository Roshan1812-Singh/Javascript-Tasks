// 12. Create a function that receives an array of numbers as argument and returns an
// array containing only the positive numbers

function posNum(arr) {
  let result = [ ];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}

console.log(posNum([10, 20, 30, -20, -100]));