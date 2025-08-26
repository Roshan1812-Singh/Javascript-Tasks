function sum(a){
    let currentSum = a;
    function f(b) {
        if(b === undefined) {
            return currentSum;
        }

        currentSum += b;
        return f;
    }

    f.valueOf = function() {
        return currentSum
    }

     return f
}

console.log(sum(10)(20)(30)());
console.log(sum(10)(20)(30)(40)(50)(60)()); 