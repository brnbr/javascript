function sumBetween(startValue, endValue) {
    const startNum = Number(startValue);
    const endNum = Number(endValue);

    if(!Number.isFinite(startNum) ||!Number.isFinite(endNum)){
        return 0;
    }else if(!Number.isInteger(startNum) || !Number.isInteger(endNum)){
        return 0;
    }

    if(startNum > endNum){
        return 0;
    }

    let sum = 0;
    for(let i = startNum; i <= endNum; i++){
        sum += i;
    }
    return sum;
}
console.log(sumBetween("1", "5"));
console.log(sumBetween("3", "3"));
console.log(sumBetween("5", "1"));
console.log(sumBetween("1.5", "3"));
