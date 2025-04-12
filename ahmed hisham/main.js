//select my element

var fullName = document.getElementById("fName");
var userName = document.getElementById("uName");
var userEmail = document.getElementById("eMail");
var userPassword = document.getElementById("password");
var confirmPassword = document.getElementById("rPassword");
var userGender = document.getElementById("gender");
var userRole = document.getElementById("user-role");
var submitButton = document.getElementById("submit");

var form = document.getElementById("form");
//select erorr span msg
var errorMsg = document.getElementById("err-name");
var errorUser = document.getElementById("err-user");
var errorEmail = document.getElementById("err-email");
var errorPassword = document.getElementById("err-pass");
var errorRePassword = document.getElementById("err-rpass");
var errorGender = document.getElementById("err-gender");
var errorRole = document.getElementById("err-role");



//decelera two array to store data in it every time i push data
var studentData = [];
var teacherData = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validInputs()) {
    storeData();
    localStorage.setItem("student", JSON.stringify(studentData));
    localStorage.setItem("teacher", JSON.stringify(teacherData));
    form.reset();
    alert("Registration successful!");
    console.log(JSON.parse(localStorage.getItem("student")));
    console.log(JSON.parse(localStorage.getItem("teacher")));
  } else {
    console.log("check your input");
  }
});

//make a function that  create object inside it so every time this function call it will make a new object
function storeData() {
  var newUser = {

    fullName: fullName.value,
    userName: userName.value,
    email: userEmail.value,
    password: userPassword.value,
    gender: userGender.value,
    userRole: userRole.value,
  };

  // check if the role is student that will make me store data in student data array else it will store in teacher array
  if (userRole.value === "student") {
    studentData.push(newUser);
  } else {
    teacherData.push(newUser);
  }
  
}

//validation
var fullNameChecker = /^[A-za-z]{3,10}\s?([A-za-z]{3,10})?$/;
// \w mean that all characters and number and _ sign
var userNameChecker = /^\w{2,10}[a-zA-z]{2,7}$/;
var userEmailChecker = /^[a-zA-z]{3,15}@[a-zA-Z]{3,15}(.com|.org|.edu|.gov)$/;
// * mean zero or more test:a95aa
var passwordChecker = /^\$*[A-Za-z]{1,5}[0-9]+[a-z]{1,5}$/;

//check the inputs value with the validation
function validInputs() {
  let isValid = true;
  
  var storedStudents = JSON.parse(localStorage.getItem("student"));
  var storedTeachers = JSON.parse(localStorage.getItem("teacher"));
  var allUser = [...storedStudents,...storedTeachers]
  var emailExist = allUser.some(user=>user.email === userEmail.value)
  if(emailExist){
    isValid = false
  }

  if (!fullNameChecker.test(fullName.value)) {
    isValid = false;
    console.log("invalid full name");
  }
  if (!userNameChecker.test(userName.value)) {
    isValid = false;
    console.log("invalid user name");
  }
  if (!userEmailChecker.test(userEmail.value)) {
    isValid = false;
    console.log("invalid email");
  }
  if (!passwordChecker.test(userPassword.value)) {
    isValid = false;
    console.log("invalid password");
  }
  if (userGender.value == "") {
    isValid = false;
    console.log("invalid gender");
  }
  if (userRole.value == "") {
    isValid = false;
    console.log("invalid role");
  }
  if (userPassword.value !== confirmPassword.value) {
    isValid = false;
    console.log("invalid password");
  }
  
  return isValid;
}




function validateField(inputName, checher, errMsgs, inavlidMsg) {
  inputName.addEventListener('blur', function () {
    if (!checher.test(inputName.value)) {
      errMsgs.innerHTML = inavlidMsg
    }
  })
  inputName.addEventListener('focus', function () {
    errMsgs.innerHTML = ""
  })
}

validateField(fullName, fullNameChecker, errorMsg, "invalid name")
validateField(userName, userNameChecker, errorUser, "invalid user name")
validateField(userEmail, userEmailChecker, errorEmail, "invalid email")
validateField(userPassword, passwordChecker, errorPassword, "invalid password")


function validateFieldSelect(selectValue, errMsgs, invalidMsg) {
  selectValue.addEventListener('blur', function () {

    if (selectValue.value === "") {
      errMsgs.innerHTML = invalidMsg;
    }
  });

  selectValue.addEventListener('focus', function () {
    errMsgs.innerHTML = "";
  });
}

validateFieldSelect(userRole, errorRole, "select your role")
validateFieldSelect(userGender, errorGender, "select your gender")

confirmPassword.addEventListener('blur',function(){
  if(confirmPassword.value!==userPassword.value){
    errorRePassword.innerHTML="pass not match"
    console.log("test");
  }
})
confirmPassword.addEventListener('focus',function(){
  
    errorRePassword.innerHTML=""
})


