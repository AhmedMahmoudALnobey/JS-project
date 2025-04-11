// final 
let editBtn = document.getElementById("edit-profile");
let editProfilePictureBtn=document.getElementById("edit-profile-picture-btn");
let profilePictureInput=document.getElementById("profile-picture-input");
let profileImageDiv=document.getElementById("profile-image-div");

let students=[];



// elements to append for pure JS


// <Welcome Div> let welcomeMsg=document.getElementById("welcome-msg");
let welcomeMsg=document.createElement("h2");
let welcomeDiv=document.getElementById("welcome-div");
let studentNameLabel=document.createElement("h2");
let myProfileh1=document.getElementsByTagName("h1")[0];


//
welcomeDiv.style.margin="0 auto";
// welcomeMsg.style.color="#8B2EF5";
studentNameLabel.style.color="#8B2EF5";
studentNameLabel.style.borderBottom="3px solid #8B2EF5";
welcomeMsg.style.borderBottom="5px solid #8B2EF5";
welcomeMsg.textContent = "👋 Welcome Back : ";
// welcomeMsg.textContent="Welcome Back : ";
studentNameLabel.style.display="inline";
// myProfileh1.style.color="#8B2EF5";
welcomeMsg.style.display="inline";
welcomeDiv.style.textAlign="center";
// welcomeDiv.style.display="inline-block";

//*!
studentNameLabel.style.fontWeight = "600";
studentNameLabel.style.padding = "5px 15px";
studentNameLabel.style.background = "linear-gradient(120deg, #ed10de 0%, #9405e7 100%)";
studentNameLabel.style.color = "white";
studentNameLabel.style.borderRadius = "20px";
studentNameLabel.style.marginLeft = "10px";
//*!
// ... existing code ...

// welcomeMsg.textContent = "👋 Welcome Back : ";
// welcomeMsg.style.fontWeight = "600";
welcomeMsg.style.padding = "5px 15px";
// welcomeMsg.style.background = "linear-gradient(120deg, #ed10de 0%, #9405e7 100%)";
welcomeMsg.style.color = " #9405e7 ";
// welcomeMsg.style.color = "white";
welcomeMsg.style.borderRadius = "10px";
welcomeMsg.style.marginRight = "10px";
// welcomeMsg.style.boxShadow = "0 2px 10px rgba(237, 16, 222, 0.3)";


//*!


// ... existing code ...

//
// studentNameLabel.textContent=getLoggedStudent?getLoggedStudent.fName+" "+getLoggedStudent.lName:"Guest";
studentNameLabel.textContent = getLoggedStudent() ? getLoggedStudent().fName : "Guest";

//
welcomeDiv.appendChild(welcomeMsg);
welcomeDiv.appendChild(studentNameLabel);




// <Image Div>
let imageTag=document.createElement('img');
let imgInputTag=document.createElement('input');
let imgButtonTag=document.createElement("button");

// styling img
imageTag.style.src="../images/male green.png";
imageTag.style.width="150px";
imageTag.style.height="150px";
imageTag.style.borderRadius="50%";
imageTag.style.border= "5px outset  #d2d0d5";

//styling input
imgInputTag.accept="image/*";
imgInputTag.style.display="none";


// style button 
imgButtonTag.textContent="Edit Profile Image";
// imgButtonTag.style.border="5px outset  #d2d0d5";
imgButtonTag.style.backgroundColor="#8B2EF5";
imgButtonTag.style.border="none";
imgButtonTag.style.cursor="pointer";
imgButtonTag.style.color="white";
imgButtonTag.style.padding="10px";
imgButtonTag.style.borderRadius="10px";

// 
imgButtonTag.style.cssText="background-color: #8B2EF5; color: white;padding: 10px; border: none; cursor: pointer; border-radius: 5px;";




// Load students from localStorage or create Empty Array of students
function loadStudents(){
    const storedData = localStorage.getItem("students");
    students = storedData? JSON.parse(storedData) : [];
}

// SignUp Student
function signUp(fName,lName,gender,username,email,password,){
    loadStudents();
    let newStudent={
        id:students.length+1,
        username:username,
        fName:fName,
        lName:lName,
        gender:gender,
        email:email,
        password:password,
        image:"",
        track:"",
        courses:[],
        grades:[],
        assignments:[]
    };

    students.push(newStudent);
    saveStudents();
    console.log("signUp successful");
}


// Login Student
function login(username,password){
    loadStudents();
    // logOut();
    const student=students.find(s=>s.username === username && s.password===password)   //returns first object from students []
    // const loggedStudent=students.find(s=>s.username===username && s.password===password)
    if(student){
        // save student to LoggedStudent object 
        localStorage.setItem("loggedStudent",JSON.stringify(student));
        console.log("Login Success");
        return student;
    } else{
        console.log("Login failed");
        return null;
    }
}


// LogOut Student 
function logOut(){
    // localStorage.clear("LoggedStudent");
    localStorage.removeItem("loggedStudent");
}

// Save Students[] to local storage
function saveStudents(){
    localStorage.setItem("students",JSON.stringify(students));
}

// Get Logged Student
function getLoggedStudent(){
    return JSON.parse(localStorage.getItem("loggedStudent")) || null;
}


// Update Logged Student
function updateLoggedStudent(student){
    localStorage.setItem("loggedStudent",JSON.stringify(student));
    loadStudents();
    let index=students.findIndex(s=>s.id===student.id);
    if(index!==-1){
        students[index]=student;
        saveStudents();
    }
}


// View Profile Info 
function viewProfileInfo(){
    const student = getLoggedStudent(); 
    if(student){
       document.getElementById("student-name").textContent=student.fName+" "+student.lName;
       document.getElementById("user-name").textContent=student.username;
       document.getElementById("student-email").textContent=student.email;
       document.getElementById("student-track").textContent=student.track; 
    }
    if(student.image){
        document.getElementById("profile-image").src=student.image;
    }
}


// Update Profile Image
function updateProfileImage(event){
    const student = getLoggedStudent();
    if(student ){
        // const file = document.getElementById("student-image").src=student.image;
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload =(e)=>{
                student.image=e.target.result;
                document.getElementById("profile-image").src=student.image;

                // loadStudents();
                // let index=students.findIndex(s=>s.id===student.id);
                // if(index!==-1){
                //     students[index]=student;
                //     saveStudents();
                //     console.log("Image updated successfully");
                // }
                updateLoggedStudent(student);

            }
            reader.readAsDataURL(file);
        }
    } 
}



// Edit Profile Picture Event
function UpdateProfilePictureEvent(){
        editProfilePictureBtn.addEventListener("click",()=>{
            profilePictureInput.click();
        });
        profilePictureInput.addEventListener("change",updateProfileImage);
}


// Edit Profile Info
// function editProfileInfo(){
//     loadStudents();
//     const student = getLoggedStudent();
//     if(student){
//         let newFName=prompt("Enter new First Name",student.fName);
//         let newLName=prompt("Enter new Last Name",student.lName);
//         let newEmail=prompt("Enter new Email",student.email);
//         let newTrack=prompt("Enter new Track",student.track);

//         let updated=false;
//         if(newFName){student.fName=newFName; updated=true;}
//         if(newLName){student.lName=newLName; updated=true;}
//         if(newEmail){student.email=newEmail; updated=true;}
//         if(newTrack){student.track=newTrack; updated=true;}

//             if(updated){
//                 let index=students.findIndex(s=>s.id===student.id);
//                 if(index!==-1){
//                     students[index]=student;
//                     localStorage.setItem("loggedStudent",JSON.stringify(student)); // Update session data
//                     saveStudents();  // Update Students in Local Storage
//                     viewProfileInfo();
//                     console.log("Profile updated successfully");
//                  }
//                 updateLoggedStudent(student);
//             }
//     }
// }

function editProfileInfo(){
    const student = getLoggedStudent();
    if (student) {
        window.location.href = '../html/edit.html';
    } else {
        console.log("No logged in student found");
    }
}


// Edit Profile Info Event
function editProfileInfoEvent(){
    viewProfileInfo();
    if(editBtn){
        editBtn.addEventListener("click",editProfileInfo);
    }
    if(editProfilePictureBtn&&profilePictureInput)
        UpdateProfilePictureEvent();  
}


// Load Profile Info for logged student 
document.addEventListener("DOMContentLoaded", viewProfileInfo)


// Edit Profile Info Event 
document.addEventListener("DOMContentLoaded",editProfileInfoEvent)



// signUp("Osama", "Saad","Male", "osama123", "osama@gmail.com",123);
// signUp("Ahmed", "Adam","Male", "ahmed123","ahmed@gmail.com",123);
// signUp("Mina", "Maher","Male", "ahmed123","ahmed@gmail.com",123);

login("osama123",123); 
// login("ahmed123",123);
viewProfileInfo();
// console.log(viewProfileInfo());


// 



