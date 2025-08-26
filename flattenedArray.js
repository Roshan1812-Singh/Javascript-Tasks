function flattenedArray(arr) {
    let result = [];
    arr.forEach(element => {
        if(Array.isArray(element)) {
            result = result.concat(flattenedArray(element)) 
        }
        else{
            result.push(element)
        }
    });
    
    return result
}

const input = flattenedArray([1, 2, 3, [4, 5, 6, [7, 8, [10, 11]]], 9])
console.log(input);
