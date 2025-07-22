// 2. Print the odd numbers less than 100

// function oddNums(n) {
//   for (let i = 1; i < n; i += 2) {
//     console.log(i);
//   }
// }

// oddNums(100);

function oddNums(n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
oddNums(100);
