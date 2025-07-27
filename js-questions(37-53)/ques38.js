
function arrToStr(arr){
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str += String.fromCharCode(arr[i]);
    }
    console.log(str);
}

arrToStr([78,101,87,99,108,104]);

