function showCalculator(calculatorType) {
    const calculatorForm = document.getElementById('calculator-form');
    const calculatorTitle = document.getElementById('calculator-title');
    const calculatorInputs = document.getElementById('calculator-inputs');
    const result = document.getElementById('result');

    calculatorInputs.innerHTML = '';
    result.textContent = '';

    if (calculatorType === 'attendance') {
        calculatorTitle.textContent = 'Attendance Calculator';
        calculatorInputs.innerHTML = `
            <label>Total Classes:</label>
            <input type="number" id="total-classes" placeholder="Enter total classes">
            <label>Attended Classes:</label>
            <input type="number" id="attended-classes" placeholder="Enter attended classes">
        `;
    } else if (calculatorType === 'gpa') {
        calculatorTitle.textContent = 'GPA Calculator';
        calculatorInputs.innerHTML = `
            <label>Grades (comma separated):</label>
            <input type="text" id="grades" placeholder="Enter grades (e.g., 4.0, 3.7, 3.3)">
        `;
    } else if (calculatorType === 'cgpa') {
        calculatorTitle.textContent = 'CGPA Calculator';
        calculatorInputs.innerHTML = `
            <label>Total Credits:</label>
            <input type="number" id="total-credits" placeholder="Enter total credits">
            <label>Grade Points (comma separated):</label>
            <input type="text" id="grade-points" placeholder="Enter grade points (e.g., 40, 35, 30)">
        `;
    }

    calculatorForm.style.display = 'block';
}

function hideCalculator() {
    const calculatorForm = document.getElementById('calculator-form');
    calculatorForm.style.display = 'none';
}

function calculate() {
    const calculatorTitle = document.getElementById('calculator-title').textContent;
    const result = document.getElementById('result');

    if (calculatorTitle === 'Attendance Calculator') {
        const totalClasses = document.getElementById('total-classes').value;
        const attendedClasses = document.getElementById('attended-classes').value;
        if (totalClasses && attendedClasses) {
            const attendancePercentage = (attendedClasses / totalClasses) * 100;
            result.textContent = `Attendance: ${attendancePercentage.toFixed(2)}%`;
        } else {
            result.textContent = 'Please fill in all fields.';
        }
    } else if (calculatorTitle === 'GPA Calculator') {
        const grades = document.getElementById('grades').value.split(',').map(Number);
        if (grades.length) {
            const total = grades.reduce((acc, grade) => acc + grade, 0);
            const gpa = total / grades.length;
            result.textContent = `GPA: ${gpa.toFixed(2)}`;
        } else {
            result.textContent = 'Please enter valid grades.';
        }
    } else if (calculatorTitle === 'CGPA Calculator') {
        const totalCredits = Number(document.getElementById('total-credits').value);
        const gradePoints = document.getElementById('grade-points').value.split(',').map(Number);
        if (totalCredits && gradePoints.length) {
            const totalGradePoints = gradePoints.reduce((acc, points) => acc + points, 0);
            const cgpa = totalGradePoints / totalCredits;
            result.textContent = `CGPA: ${cgpa.toFixed(2)}`;
        } else {
            result.textContent = 'Please fill in all fields.';
        }
    }
}
function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('show');
}


