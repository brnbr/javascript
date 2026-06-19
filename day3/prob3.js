const students = [
  { id: 1, name: "김하나", score: 85, track: "backend" },
  { id: 2, name: "이준호", score: 58, track: "backend" },
  { id: 3, name: "박서연", score: 92, track: "cloud" },
  { id: 4, name: "최민수", score: 76, track: "backend" },
];

const getResultMessages= (students) => {
    const message = students.map(std => {
        const ispass = std.score >= 60 ? "합격입니다." : "불합격입니다.";
        
        return `name: ${std.name}, message: ${std.name}님은 ${ispass}`;
    });

    return message;
}

console.log(getResultMessages(students));