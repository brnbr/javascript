//9번 문제
function makeNumberTriangle(n){
    for(let i = 1; i<=n; i++){
        let row = "";

        for(let j = 1; j<=i; j++){
            row += j;
        }
        console.log(row);
    }
}