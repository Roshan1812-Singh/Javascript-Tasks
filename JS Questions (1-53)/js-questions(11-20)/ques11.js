// 11. Calculate the average of the numbers in an array of numbers

// let arr = [10,20,30,40];
// let avg = arr[0] + arr[1] + arr[2] + arr[3] / 4
// console.log(avg);

function avgArr(arr){
    let avg = 0;

    for (let i = 0; i < arr.length; i++) {
        avg += arr[i]/5;
    }
    console.log(avg);
}

avgArr([1,2,3,4,5]);