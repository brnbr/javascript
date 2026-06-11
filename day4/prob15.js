//15번 문제
function makeSameNumberTriangle(n){
    for(let i = 1; i<=n; i++){
        let nums = "";

        for(let j = 1; j<=i; j++){
            nums += i;
        }
        console.log(nums);
    }
}