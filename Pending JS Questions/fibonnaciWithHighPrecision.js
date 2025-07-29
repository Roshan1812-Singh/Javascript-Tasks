function fibonnaciHighPrecision(n){
    let a = 0n, b = 1n;
    for(let i = 2; i <= n; i++){
        [a,b] = [b, a+b];
    }
    return n === 0 ? a : b;
}

console.log(fibonnaciHighPrecision(500).toString());
