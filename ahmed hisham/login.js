var logInForm = document.getElementById("login-from");
var logInUser = document.getElementById("uNameLogin");
var logInPassword = document.getElementById("uPasswordlogin");
var userRoleLogin = document.getElementById("user-role");
var studentsData = JSON.parse(localStorage.getItem("student"));
var teachersData = JSON.parse(localStorage.getItem("teacher"));




logInForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var loggedUser = {}
    if (userRoleLogin.value === "student") {
        for (var i = 0; i < studentsData.length; i++) {
            if (
                logInUser.value === studentsData[i].email &&
                logInPassword.value === studentsData[i].password
            ) {
                console.log(studentsData[i]);
                loggedUser = studentsData[i]
                localStorage.setItem("loggedStudent",JSON.stringify(loggedUser))
                location.replace("student.html");
                
            }
        }
    } else if (userRoleLogin.value === "teacher") {
        for (var i = 0; i < teachersData.length; i++) {
            if (
                logInUser.value === teachersData[i].email &&
                logInPassword.value === teachersData[i].password
            ) {
                console.log(teachersData[i]);
                loggedUser = teachersData[i]
                localStorage.setItem("loggedTeacher",JSON.stringify(loggedUser))
                location.replace("teacher.html");
                
                
            }
        }
    } else {
        console.log("you have to register firs");
    }
});
