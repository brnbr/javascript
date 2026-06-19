//18번 문제
function makeBorderTriangle(n){
    const star = '*';

    for(let i = 1; i<=n; i++){
        let row = "";

        for(let j = 1; j<=i; j++){
            if(i == 1 || i == n || j == 1 || j == i){
                row += star;
            }else 
                row += " ";
        }
        console.log(row);
    }
}

makeBorderTriangle(4);