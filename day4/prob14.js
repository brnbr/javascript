//14번 문제
function makeReverseNumberTriangle(n){
    for(let i = 1; i<=n; i++){
        let nums = "";

        for(let j = 1; j<=n-i +1; j++){
            nums+=j;
        }
        console.log(nums);
    }
}