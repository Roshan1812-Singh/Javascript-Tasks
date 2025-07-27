// 46. Find the maximum number in a jagged array of numbers or array of numbers

function maxValueInJaggedArr(arr){
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const subMax = maxValueInJaggedArr(arr[i]);

            if(subMax > max){
                max = subMax
            }
        }
        else{
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
}

let i = [100,150,89,57,216,999];
console.log(maxValueInJaggedArr(i));
