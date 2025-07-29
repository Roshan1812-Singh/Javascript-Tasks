function factorial(n){
    let result = 1n;
    for(let i = 2n; i <= BigInt(n); i++){
        result *= i;
    }
    return result.toString();
}


console.log(factorial(70));