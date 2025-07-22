// 15. Create a function that will find the nth Fibonacci number using recursion

function fibNum(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibNum(n - 1) + fibNum(n - 2);
  }
}

console.log(fibNum(25));