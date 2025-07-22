// 16. Create a function that will return a Boolean specifying if a number is prime

function primeNum(n){
    let isPrime = true;
    for (let i = 0; i < n; i++) {
        if(i % n === 0 && i % 1 === 0){
            isPrime = true;
        }else{
            isPrime = false;
        }
    }
    return isPrime;
}

console.log(primeNum(17));