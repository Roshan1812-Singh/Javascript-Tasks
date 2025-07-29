function dayysLeftBeforeChris(){
    const today = new Date();
    const year = today.getFullYear();
    const christmas = new Date(year, 11, 25);
    if (today > christmas) {
        christmas.setFullYear(year + 1 );
    }
    const diff = christmas - today;
    return Math.ceil(diff/ (1000 * 60 * 60 * 24))
}

console.log(dayysLeftBeforeChris());
