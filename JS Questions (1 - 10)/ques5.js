function primeNumber(n) {
  let isPrime = 1;
  for (let i = 2; i < n; i++) {
    if (i % n === 0) {
      isPrime = 0;
    }
  }

  console.log(isPrime ? "Prime Number" : "Not a prime number");
}

primeNumber(17);
