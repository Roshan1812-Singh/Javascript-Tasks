const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

// function sumArrayRecursive(arr) {
//     if (arr.length === 0) {
//       return 0;
//     } else {
//      return arr[0] + sumArrayRecursive(arr.slice(1));
//     }
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   const sumVal = sumArrayRecursive(numbers);
  
//   console.log(sumVal); 