// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];


const students = JSON.parse(localStorage.getItem("students")) || [];

// const students = [{
//     name: "Brandon",
//     age: 30,
//     roll: 1
// }];

const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    });

localStorage.setItem("students", JSON.stringify(students));

    return { name, age, roll };
}

const createStudentElement = ({ name, age, roll }) => {
    // create elements
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');
    // fill the content 
    studentName.innerText = "Student Name: " + name;
    studentAge.innerText = "Student Age: " + age;
    studentRoll.innerText = "Student Roll: " + roll;
    // add to the DOM
    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);
    studentsContainer.style.display = students.length === 0 ? "none" : "flex"
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex"

students.forEach(createStudentElement);
studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );

    createStudentElement(newStudent)
    nameInput.value = ''
    ageInput.value = ''
    rollInput.value = ''
};
