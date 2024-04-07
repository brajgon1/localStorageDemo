// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.getElementById(".students");
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];


/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const students = [{
    name: "Brandon",
    age: 30,
    roll: 1
}];

const addStudent = (name, age, roll) => {
    
}

const createStudentElement = () => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p')
    const studentRoll = document.createElement('p')
}