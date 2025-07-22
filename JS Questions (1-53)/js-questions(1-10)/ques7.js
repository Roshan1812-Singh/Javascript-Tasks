// 7. Calculate the sum of even numbers greater than 10 and less than 30

function sumNum(n) {
  let sum1 = 0;

  for (let i = 10; i <= n; i++) {
    if (i % 2 === 0) {
      sum1 += i;
    }
  }

  console.log(sum1);
}

sumNum(30);