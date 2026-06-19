//4번 문제
function makeSquare(n){
    const star = '*';

    for(let i = 0; i<n; i++){
        let row = "";

        for(let j = 0; j<n; j++){
            row += star;
        }
        console.log(row);
    }
}