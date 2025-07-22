// 6. Calculate 10!

function factOfTen(n) {
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    console.log(fact);    
}

factOfTen(10);