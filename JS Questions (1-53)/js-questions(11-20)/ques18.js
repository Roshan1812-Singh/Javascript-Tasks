// print the first 100 pprime numbers

function firstHunPrime(n){
    for(let i = 1 ; i <= n; i++ ){
        if(i % n === 0){
            return i;
        }
    }
}

console.log(firstHunPrime(100));

// DOUBT
