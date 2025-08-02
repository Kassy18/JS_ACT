// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } 
];


const uppercaseNames = students.map(s => s.name.toUpperCase()).join("\n");
document.getElementById("uppercaseNames").textContent = uppercaseNames;



const topStudents = students
  .filter(s => (s.grade ?? 0) >= 85)
  .map(s => `${s.name} - ${s.grade}`)
  .join("\n");
document.getElementById("highGradeStudents").textContent = topStudents;


const total = students.reduce((sum, s) => sum + (s.grade ?? 0), 0);
const average = total / students.length;
document.getElementById("averageGrade").textContent = `Average Grade: ${average.toFixed(2)}`;


function displayStudent({ name, grade = 0 }) {
  return `Student: ${name}, Grade: ${grade}`;
}


const formattedInfo = students.map(displayStudent).join("\n");
document.getElementById("display").textContent = formattedInfo;

