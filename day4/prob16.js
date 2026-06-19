//16번 문제
function makeReverseRightTriangle(n){
    const star = '*';

    for(let i = 0; i <n; i++){
        let row = "";

        for(b = 0; b<i; b++){
            row += " ";
        }

        for(let s = 0; s<n-i; s++){
            row += star;
        }
        console.log(row); 
    }
}