let students = JSON.parse(localStorage.getItem("students")) || [];
let attendance = JSON.parse(localStorage.getItem("attendance")) || {};

function showPage(page){

    document.querySelectorAll(".main > div").forEach(div=>{
        div.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");

    updateDashboard();
}

function addStudent(){

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let className = document.getElementById("studentClass").value;

    if(!name || !roll || !className){
        alert("Please fill all fields");
        return;
    }

    students.push({
        name: name,
        roll: roll,
        className: className
    });

    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("name").value="";
    document.getElementById("roll").value="";
    document.getElementById("studentClass").value="";

    renderStudents();
    renderAttendance();
    renderMarks();
    updateDashboard();
}

function renderStudents(){

    let table="";

    students.forEach((s,i)=>{

        table+=`
        <tr>
        <td>${s.roll}</td>
        <td>${s.name}</td>
        <td>${s.className}</td>
        <td>
        <button class="delete" onclick="deleteStudent(${i})">Delete</button>
        </td>
        </tr>
        `;
    });

    document.getElementById("studentTable").innerHTML = table;
}

function deleteStudent(i){

    students.splice(i,1);

    localStorage.setItem("students", JSON.stringify(students));

    renderStudents();
    renderAttendance();
    renderMarks();
    updateDashboard();
}

function renderAttendance(){

    let table="";

    students.forEach(s=>{

        table+=`
        <tr>
        <td>${s.roll}</td>
        <td>${s.name}</td>
        <td>
        <button class="present" onclick="markAttendance('${s.roll}','present')">Present</button>
        </td>
        <td>
        <button class="absent" onclick="markAttendance('${s.roll}','absent')">Absent</button>
        </td>
        </tr>
        `;
    });

    document.getElementById("attendanceTable").innerHTML = table;
}

function markAttendance(roll,status){

    attendance[roll] = status;

    localStorage.setItem("attendance", JSON.stringify(attendance));

    updateDashboard();
}

function renderMarks(){

    let table="";

    students.forEach(s=>{

        let math = Math.floor(Math.random()*40)+60;
        let eng = Math.floor(Math.random()*40)+60;
        let sci = Math.floor(Math.random()*40)+60;

        let total = math + eng + sci;
        let percent = (total/3).toFixed(1);

        let grade="C";

        if(percent >= 85){
            grade="A";
        }else if(percent >= 70){
            grade="B";
        }

        table+=`
        <tr>
        <td>${s.name}</td>
        <td>${math}</td>
        <td>${eng}</td>
        <td>${sci}</td>
        <td>${percent}%</td>
        <td>${grade}</td>
        </tr>
        `;
    });

    document.getElementById("marksTable").innerHTML = table;
}

function updateDashboard(){

    document.getElementById("totalStudents").innerText = students.length;

    let present = 0;
    let absent = 0;

    Object.values(attendance).forEach(a=>{
        if(a==="present") present++;
        if(a==="absent") absent++;
    });

    document.getElementById("presentCount").innerText = present;
    document.getElementById("absentCount").innerText = absent;
}

renderStudents();
renderAttendance();
renderMarks();
updateDashboard();