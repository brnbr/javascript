//7번 문제
function makeReverseTriangle(n){
    const star = '*';

    for(let i = 0; i<n; i++){
        let row = "";

        for(let j = 0; j<n-i; j++){
            row += star;
        }
        console.log(row);
    }
}