// let navBarDiv = document.createElement("div");

// let homePage= document.createElement("a");
// let tracksPage= document.createElement("a");
// let aboutPage= document.createElement("a");
// let userNameSelect=document.createElement("select");
// let userNameLabel =document.createElement("option");
// let myProfilePage =document.createElement("option");


// homePage.textContent="Home";
// tracksPage.textContent="Tracks";
// aboutPage.textContent="About";

// let loggedStudent=JSON.parse(localStorage.getItem("loggedStudent"));

// // show username if logged in, else show guest inf
// userNameLabel.textContent = loggedStudent ? loggedStudent.username : "Guest";
// myProfilePage.textContent="My Profile";

// console.log(loggedStudent);


// userNameSelect.append(userNameLabel,myProfilePage);
// navBarDiv.append(homePage,tracksPage,aboutPage,userNameSelect);
// document.body.appendChild(navBarDiv);



///


// background-color: #8B2EF5;
// background-color: #191818;
// background-color: #f5f5f5;

// document.body.style.fontFamily="arista";

// document.body.style.fontFamily ='arista std';
// document.body.style.fontFamily = "'Circular Std', sans-serif";


// function fontFace(){
//     // Create the <style> element
// let style = document.createElement("style");
// // style.type = "text/css";

// // Add the @font-face rule for 'Circular Std'
// style.innerHTML = `
//   @font-face {
//     font-family: 'Circular Std';
//     src: 
//       url('../fonts/circular-std/CircularStd-Medium.woff') format('woff'),
//       url('../fonts/circular-std/CircularStd-Medium.ttf') format('truetype');
//     font-weight: normal;
//     font-style: normal;
//   }
// `;

// // Append the style to the document head 
// document.head.appendChild(style);

// // Apply the font to the body directly
// document.body.style.fontFamily = "'Circular Std', sans-serif";
// document.body.style.fontSize="larger";

// }

// fontFace();

// // Create the navbar container div
// let navBarDiv = document.createElement("div");
// navBarDiv.style.backgroundColor = "#8B2EF5";
// navBarDiv.style.padding = "15px";
// // navBarDiv.style.margin = "0";
// navBarDiv.style.margin = "0";
// navBarDiv.style.display = "flex";
// navBarDiv.style.justifyContent = "space-between";
// navBarDiv.style.alignItems = "center";

// // Create the Home, Tracks, and About links
// let homePage = document.createElement("a");
// let tracksPage = document.createElement("a");
// let aboutPage = document.createElement("a");
// let userNameSelect = document.createElement("select");
// let userNameLabel = document.createElement("option");
// let myProfilePage = document.createElement("option");

// let options = [userNameLabel,myProfilePage];

// // Set the text content of the links and select options
// homePage.textContent = "Home";
// tracksPage.textContent = "Tracks";
// aboutPage.textContent = "About";

// // Get the logged-in student (if any)
// let loggedStudent = JSON.parse(localStorage.getItem("loggedStudent"));

// // Show username if logged in, otherwise show "Guest"
// userNameLabel.textContent = loggedStudent ? loggedStudent.username : "Guest";
// myProfilePage.textContent = "My Profile";

// // Append the select options to the select element
// userNameSelect.append(userNameLabel, myProfilePage);

// // Style the navbar links
// let links = [homePage, tracksPage, aboutPage];
// links.forEach(link => {
//   link.style.color = "white";
//   link.style.textDecoration = "none";
//   link.style.padding = "10px 15px";
//   link.style.transition = "0.3s";
//   link.style.marginRight = "10px"; // Space between links
//   link.style.cursor="pointer";
//   link.addEventListener("mouseenter", () => {
//     link.style.backgroundColor = "rgb(232, 231, 233)";
//     link.style.color = "rgb(134, 38, 230)";
//     link.style.borderRadius = "5px";
//   });
//   link.addEventListener("mouseleave", () => {
//     link.style.backgroundColor = "transparent";
//     link.style.borderRadius = "0";
//     // link.style.backgroundColor = "rgb(232, 231, 233)";
//     link.style.color = "rgb(232, 231, 233)";
//   });
// });

// // Style the select dropdown
// userNameSelect.style.padding = "10px";
// // userNameSelect.style.backgroundColor = "#8B2EF5";
// userNameSelect.style.backgroundColor = "#f5f5f5";
// userNameSelect.style.color = "#8B2EF5";
// // userNameSelect.style.color = "white";
// userNameSelect.style.border = "solid 1px";
// userNameSelect.style.borderRadius = "10px";
// userNameSelect.style.fontSize = "16px";
// userNameSelect.style.cursor = "pointer";

// // Style the select options
// userNameSelect.querySelectorAll("option").forEach(option => {
//   option.style.backgroundColor = "white";
//   option.style.color = "#8B2EF5";
// //   option.style.color="#333";
// });

// userNameLabel.addEventListener("mouseenter",()=>{
//     myProfilePage.style.cursor="pointer"
//     myProfilePage.style.backgroundColor = "white";
//     myProfilePage.style.color = "#8B2EF5";
//   //   option.style.color="#333";
//   });

//   myProfilePage.addEventListener("mouseenter",()=>{
//     myProfilePage.style.cursor="pointer"
//     myProfilePage.style.backgroundColor = "white";
//     myProfilePage.style.color = "#8B2EF5";
//   //   option.style.color="#333";
//   });

// // userNameLabel.addEventListener("mouseenter", () => {
// //   this.style.cursor="pointer";
// //     this.style.backgroundColor = "transparent";
// //     this.style.color = "red";
// //     this.style.borderRadius = "0";
// //     // link.style.backgroundColor = "rgb(232, 231, 233)";
// //     this.style.color = "rgb(232, 231, 233)";
// //   });

// // options.forEach(option => {
// //     option.addEventListener("mouseenter",()=>{
// //         option.style.cursor="pointer";
// //         // option.style.backgroundColor = "transparent";
// //         option.style.color = "red";
// //         option.style.borderRadius = "0";
// //           // link.style.backgroundColor = "rgb(232, 231, 233)";
// //           option.style.color = "rgb(232, 231, 233)";

// //     }   )
// // });



// // Append the elements to the navbar
// navBarDiv.append(homePage, tracksPage, aboutPage, userNameSelect);

// // Append the navbar to the body
// document.body.appendChild(navBarDiv);


//*! 

// Font Face Setup
(function fontFace() {
  const style = document.createElement("style");
  style.innerHTML = `
    @font-face {
      font-family: 'Circular Std';
      src: 
        url('../fonts/circular-std/CircularStd-Medium.woff') format('woff'),
        url('../fonts/circular-std/CircularStd-Medium.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    body {
      font-family: 'Circular Std', sans-serif;
      font-size: larger;
      margin: 0;
    }
  `;
  document.head.appendChild(style);
})();

// Navbar Container
const navBar = document.createElement("div");
Object.assign(navBar.style, {
  backgroundColor: "#8B2EF5",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

// Nav Links
const createNavLink = (text) => {
  const link = document.createElement("a");
  link.textContent = text;
  Object.assign(link.style, {
    color: "white",
    textDecoration: "none",
    padding: "10px 15px",
    marginRight: "10px",
    transition: "0.3s",
    cursor: "pointer"
  });

  link.addEventListener("mouseenter", () => {
    link.style.backgroundColor = "white";
    link.style.color = "#8B2EF5";
    link.style.borderRadius = "5px";
  });
  link.addEventListener("mouseleave", () => {
    link.style.backgroundColor = "transparent";
    link.style.color = "white";
  });

  return link;
};

const homeLink = createNavLink("Home");
const tracksLink = createNavLink("Tracks");
const aboutLink = createNavLink("About");

// Custom Dropdown
const dropdownContainer = document.createElement("div");
dropdownContainer.style.position = "relative";

const dropdownButton = document.createElement("div");
dropdownButton.style.padding = "10px 15px";
dropdownButton.style.backgroundColor = "white";
dropdownButton.style.color = "#8B2EF5";
dropdownButton.style.borderRadius = "10px";
dropdownButton.style.cursor = "pointer";
dropdownButton.style.userSelect = "none";

// Get username
const loggedStudent = JSON.parse(localStorage.getItem("loggedStudent"));
const username = loggedStudent ? `${loggedStudent.fName} ${loggedStudent.lName}` : "Guest";
dropdownButton.textContent = username;

// Dropdown menu
const dropdownMenu = document.createElement("ul");
Object.assign(dropdownMenu.style, {
  position: "absolute",
  top: "100%",
  right: "0",
  backgroundColor: "white",
  listStyle: "none",
  padding: "0",
  margin: "5px 0 0 0",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
  display: "none",
  zIndex: 1000
});

// Menu items
const createMenuItem = (text, onClick) => {
  const item = document.createElement("li");
  item.textContent = text;
  Object.assign(item.style, {
    padding: "10px 20px",
    color: "#8B2EF5",
    cursor: "pointer"
  });
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "#eee";
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "white";
  });
  item.addEventListener("click", onClick);
  return item;
};

const myProfileItem = createMenuItem("My Profile", () => {
  alert("Navigating to profile...");
});
dropdownMenu.appendChild(myProfileItem);

// Toggle dropdown
dropdownButton.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});

// Assemble dropdown
dropdownContainer.appendChild(dropdownButton);
dropdownContainer.appendChild(dropdownMenu);

// Append everything to navbar
const navLinksContainer = document.createElement("div");
navLinksContainer.append(homeLink, tracksLink, aboutLink);
navBar.append(navLinksContainer, dropdownContainer);

// Append navbar to body
document.body.prepend(navBar);
