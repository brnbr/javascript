const students = [
  { id: 1, name: "김하나", score: 85, track: "backend" },
  { id: 2, name: "이준호", score: 58, track: "backend" },
  { id: 3, name: "박서연", score: 92, track: "cloud" },
  { id: 4, name: "최민수", score: 76, track: "backend" },
];

//60점 이상만 리턴
const getPassedStudents = (students) => {
    const pstd = students.filter(std => {
        return std.score >= 60;
    });

    return pstd;
}
console.log(getPassedStudents(students));