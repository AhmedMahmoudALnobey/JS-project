document.addEventListener('DOMContentLoaded', function() {
    const student = JSON.parse(localStorage.getItem('loggedStudent'));
    // if (!student) {
    //     window.location.href = 'StudentProfile.html';
    //     return;
    // }

    // Populate form fields
    document.getElementById('edit-fname').value = student.fName;
    document.getElementById('edit-lname').value = student.lName;
    document.getElementById('edit-username').value = student.username;
    document.getElementById('edit-email').value = student.email;
    document.getElementById('edit-track').value = student.track || '';

    // Handle save changes
    document.getElementById('save-profile').addEventListener('click', function() {
        student.fName = document.getElementById('edit-fname').value;
        student.lName = document.getElementById('edit-lname').value;
        student.username = document.getElementById('edit-username').value;
        student.email = document.getElementById('edit-email').value;
        student.track = document.getElementById('edit-track').value;

        // Update localStorage
        localStorage.setItem('loggedStudent', JSON.stringify(student));

        // Update students array
        let students = JSON.parse(localStorage.getItem('students'));
        const index = students.findIndex(s => s.id === student.id);
        if (index !== -1) {
            students[index] = student;
            localStorage.setItem('students', JSON.stringify(students));
        }

        // Redirect back to profile
        window.location.href = 'StudentProfile.html';
    });
});