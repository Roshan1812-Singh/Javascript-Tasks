// 41. Create a function to calculate the distance between two points defined by their x, y
// coordinate

function distanceBtwTwoPoints(x1,x2,y1,y2){
    let result = 0;

    let sum = Math.sqrt(x1-x2)^2 + (y1-y2)^2;

    result += sum;

    console.log(result);
}

distanceBtwTwoPoints(80,50,60,45);