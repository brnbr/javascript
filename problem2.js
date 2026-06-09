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


/*
### 2번. `sumBetween(startValue, endValue)` 함수를 만듭니다.

- 두 값을 숫자로 바꿉니다.
- 둘 중 하나라도 숫자로 바꿀 수 없거나 정수가 아니면 `0`을 돌려줍니다.
- 시작값이 끝값보다 크면 `0`을 돌려줍니다.
- 시작값부터 끝값까지의 합계를 돌려줍니다.

확인할 값입니다.

- `sumBetween("1", "5")`의 결과는 `15`입니다.
- `sumBetween("3", "3")`의 결과는 `3`입니다.
- `sumBetween("5", "1")`의 결과는 `0`입니다.
- `sumBetween("1.5", "3")`의 결과는 `0`입니다.
*/