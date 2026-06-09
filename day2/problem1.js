function countOddNumbers(limitValue){
    const num = Number(limitValue);

    if(!Number.isFinite(num) || !Number.isInteger(num) || num < 1){
        return 0;
    }

    let cnt = 0;
    for(let i = 1; i<=num; i++){
        if(i % 2 != 0){
            cnt++;
        }
    }
    return cnt;
}

console.log(countOddNumbers("7"));
console.log(countOddNumbers("10"));
console.log(countOddNumbers("abc"));
console.log(countOddNumbers("2.5"));
