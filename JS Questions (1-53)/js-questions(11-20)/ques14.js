// 14. Print the first 10 Fibonacci numbers without recursion
// first 10 fibonacci nums = 1 , 1, 2 , 3, 5, 8, 13, 21, 34, 55

function fibNums(n){
    let result = '';
    let a = 1;
    let b = 1;
    for(let i = 1; i <= n; i++){
        result += a + ' ';
        let temp = a;
        a = b;
        b = temp + b;
    }
    console.log(result);
    
}

fibNums(10);
