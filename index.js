<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smart School Manager</title>
    <link rel="stylesheet" href="style.css"></link>
</head>
<body>
    
    <div class="sidebar">

    <h2>🏫 School Manager</h2>

    <button onclick="showPage('dashboard')">Dashboard</button>
    <button onclick="showPage('students')">Students</button>
    <button onclick="showPage('attendance')">Attendance</button>
    <button onclick="showPage('marks')">Marks</button>
    </div>

    <div class="main">

     {/* Dashboard  */}
    <div id="dashboard">

    <div class="cards">

    <div class="card">
    <h3>Total Students</h3>
    <p id="totalStudents">0</p>
    </div>

    <div class="card">
    <h3>Present</h3>
    <p id="presentCount">0</p>
    </div>

    <div class="card">
    <h3>Absent</h3>
    <p id="absentCount">0</p>
    </div>

    </div>
    </div>


    </div>
    
</body>
</html>