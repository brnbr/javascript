//17번 문제
function makeBorderRectangle(width, height){
    const star = '*';

    for(let i = 0; i<height; i++){
        let row = "";

        for(let j = 0; j<width; j++){
            if(i == 0 || i == height-1 || j == 0 || j == width-1){
                row += star;
            }else row += " ";
        }
        console.log(row);
    }
}