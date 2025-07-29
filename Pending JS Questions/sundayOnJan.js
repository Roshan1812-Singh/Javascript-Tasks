function findSundayJan(start, end){
    const years = [];

    for(let year = start; year <= end; year++){
        const date = new Date(year, 0, 1)
        if (date.getDay() === 0) {
            years.push(year)
        }
    }
    return years;
}

console.log(findSundayJan(1900, 2050));
