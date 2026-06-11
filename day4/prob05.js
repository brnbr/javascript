function makeRectangle(width, height){
    const star = '*';

    for(let i = 0; i<width; i++){
        let row = "";

        for(let j = 0; j<height; j++){
            row += star;
        }
        console.log(row);
    }
}