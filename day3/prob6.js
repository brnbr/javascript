const students = [
  { id: 1, name: "김하나", score: 85, track: "backend" },
  { id: 2, name: "이준호", score: 58, track: "backend" },
  { id: 3, name: "박서연", score: 92, track: "cloud" },
  { id: 4, name: "최민수", score: 76, track: "backend" },
];

const getStudendtById = (students, id) => {
    const fstd = students.find(std => std.id === id) || null;
    return fstd;
}

console.log(getStudendtById(students, 2));