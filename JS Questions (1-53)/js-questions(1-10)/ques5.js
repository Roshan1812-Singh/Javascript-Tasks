// 5. Calculate the sum of numbers from 1 to 10

function sumOneToTen(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOneToTen(10);