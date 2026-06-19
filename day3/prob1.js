const students = [
  { id: 1, name: "김하나", score: 85, track: "backend" },
  { id: 2, name: "이준호", score: 58, track: "backend" },
  { id: 3, name: "박서연", score: 92, track: "cloud" },
  { id: 4, name: "최민수", score: 76, track: "backend" },
];

const getStudentAverage = (students) => {
    let sum = 0;
    
    for(let s of students){
        sum += s.score;
    }

    const avg = sum / students.length || 0;
    console.log(avg);
}

getStudentAverage(students);
getStudentAverage([]);