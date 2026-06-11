//8번 문제
function makeRightTriangle(n){
    const star = '*';

    for(let i = 0; i<n; i++){
        let row = "";

        for(let j = 0; j<n-i; j++){
            row += " ";
        }
        for(let k = 0; k<i+1; k++){
            row += star;
        }
        console.log(row);
    }
}