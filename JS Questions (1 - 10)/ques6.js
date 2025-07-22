function evenNumArr(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr[evenArr.length] = arr[1];
    }
  }
  return evenArr;
}

let arr1 = [1,2,4,5,8,6,9,4];
console.log(evenNumArr(arr1));