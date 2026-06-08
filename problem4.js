function getTypeMessage(value){
    if(typeof value == "string"){
        return "문자열입니다";
    }
    else if(typeof value == "number"){
        return "숫자입니다";
    }
    else if(typeof value == "boolean"){
        return "불리언입니다";
    }
    else return "아직 확인하지 않은 자료형입니다.";
}

console.log(getTypeMessage("JavaScript"));
console.log(getTypeMessage(2026));
console.log(getTypeMessage(true));
console.log(getTypeMessage(undefined));