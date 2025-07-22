function nestedArr(arr) {
  let max = arr[0][0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    console.log(max);
  }
}

let numbers = [[1,2,3],[4,5,6],[7,8,9]];
nestedArr(numbers);