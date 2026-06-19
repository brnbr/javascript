//20번쨰 문제
function nakePlusSquare(n){
    const star = '*';
    const dash = '-';
    let mid = Math.floor(n/2);

    for(let r = 0; r<n; r++){
        let row = "";

        for(let d = 0; d<n; d++){
            if(d >= Math.abs(mid-r) && d <= (n-1)-Math.abs(r-mid)){
                row += star;
            }else row += dash;
        }

    console.log(row);
    }
}

nakePlusSquare(5);