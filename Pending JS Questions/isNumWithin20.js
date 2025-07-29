function isNumberWithin20(num){
    return Math.abs(100-num) <= 20 || Math.abs(400-num) <= 20;
}

console.log(isNumberWithin20(80));
console.log(isNumberWithin20(120));
console.log(isNumberWithin20(380));
