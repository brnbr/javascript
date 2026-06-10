/*
7. 학생 객체 배열을 받아서 `{ count, average, passedNames }` 형태의 요약 객체를 돌려주는 `buildStudentSummary(students)` 함수를 만듭니다.

buildStudentSummary(students)의 결과는 { count: 4, average: 77.75, passedNames: ["김하나", "박서연", "최민수"] }입니다.
*/

const students = [
  { id: 1, name: "김하나", score: 85, track: "backend" },
  { id: 2, name: "이준호", score: 58, track: "backend" },
  { id: 3, name: "박서연", score: 92, track: "cloud" },
  { id: 4, name: "최민수", score: 76, track: "backend" },
];

const buildStudentSummary = (students) => {
  const cntMap = new Map();

  for(const std of students){
    let scunt = 0;

    
  }
}