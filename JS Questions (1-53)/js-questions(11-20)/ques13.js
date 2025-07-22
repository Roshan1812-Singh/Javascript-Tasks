// 13. Find the maximum number in an array of numbers

function maxNum(arr) {
  let max = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}


maxNum([10, 20, 60,  30, 40]);