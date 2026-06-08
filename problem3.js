const star = "*";

function printstar(row){
    for(let i = 0; i<row; i++){
        let row = "";

        for(let j = 0; j<i+1; j++){
            row += star;
        }   
        console.log(row);
    }
}

printstar(4);