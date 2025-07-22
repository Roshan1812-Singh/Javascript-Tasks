// 17. Calculate the sum of digits of a positive integer number

function posNumSum(arr){
    let sum = 0;

    for(let i = 0; i <= arr.length; i++){
        if (arr[i] >= 0) {
            sum = sum + arr[i];
        }
    }
    console.log(sum);
}

posNumSum([10,20,-39,40])
