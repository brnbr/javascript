//11번 문제
function makeReverseNumberLine(n){
    let num = "";
    
    for(let i = n; i>=1; i--){
        num += `${i} `;
    }
    console.log(num);
}