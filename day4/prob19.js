//19번째 문제
function makeSlashSquare(n){
    const star = '*';

    for(let i = 0; i<n; i++){
        let row = "";

        for(let b = 0; b<n; b++){
            if(b == n-i){
                row += star;
            }else row += " ";
        }
        console.log(row);
    }
}
makeSlashSquare(4);