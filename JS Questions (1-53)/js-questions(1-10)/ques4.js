// 4. Print all the multiplication tables with numbers from 1 to 10

function tableOneToTen(n) {
    for(let i =1; i<=n; i++){
        for(let j=1; j<=n; j++){
            console.log(i + "*" + j + "=" + (i*j));
        }
        console.log(" ");
    }
}

tableOneToTen(10);