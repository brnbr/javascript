function getGrade(score){
    if(score >= 90){
        return "A 등급입니다.";
    }
    else if(score >= 80){
        return "B 등급입니다.";
    }
    else if(score >= 70){
        return "C 등급입니다.";
    }  
    else return "조금 더 연습합니다."
}

console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(75));
console.log(getGrade(68));