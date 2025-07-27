// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)

function jaggedArr(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            total += jaggedArr(arr[i]);
        }        
        else if (typeof arr[i] === 'number'){
            total += arr[i];
        }
    }
    return total;
}

let inp = [10,15,18,19,100];
console.log(jaggedArr(inp));
