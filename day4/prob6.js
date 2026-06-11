//6번 문제
function makeTriangle(n){
    const star = '*';

    for(let i = 0; i < n; i++){
        let row = "";

        for(let j = 0; j< i+1; j++){
            row += star;
        }
        console.log(row);
    }
}