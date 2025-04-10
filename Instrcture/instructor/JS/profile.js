//isteed of local storage
let jsObj;
var xhr = new XMLHttpRequest();

xhr.open("GET", "../Json/user.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && (xhr.statusText == "ok" || xhr.status == 200)) {
        jsObj = JSON.parse(xhr.response).data;
    }
}
xhr.send()

/* ######################## Creat element method ###############*/
function creatElement_(ele) {
    return document.createElement(ele);
}
/* ######################### creat textnode method ################ */
function createTextNode_(text) {
    return document.createTextNode(text);
}
/* ################## Set Elment Attribute method ##################### */
function setElementAttribute(ele, obj) {
    for (let key in obj) {
        ele.setAttribute(key, obj[key])
    }
}
//update style
function updateStyleAtrributes(elem ,attribute,styleOfAttribute)
{
    let currentStyle =  elem.getAttribute("style") || "";
    // Add or update one style (e.g., change attribute)
    let myVar = `${attribute}:[^;]*;`;
    let regex = new RegExp(myVar); // same as /test/
    currentStyle = currentStyle.replace(regex,''); // remove if exists
    currentStyle += `${attribute}:${styleOfAttribute};`;
    // Set the new style attribute
    elem.setAttribute("style", currentStyle);
}
/* ################  main design sections ################## */
var breakSpace = document.createElement("br");
var body = document.body;
var instructorPrfileHeader =creatElement_("nav");
body.appendChild(instructorPrfileHeader);
var instrcutorPageAsideBar =creatElement_("aside");
body.appendChild(instrcutorPageAsideBar);

//######################## instructor header section #########
let dropDownListConainer =creatElement_("div")
let dropDownListConainerElm1 =creatElement_("div")
let dropDownListConainerElm2 =creatElement_("div")
let dropDownListConainerElm3 =creatElement_("div")
dropDownListConainer.appendChild(dropDownListConainerElm1)
dropDownListConainer.appendChild(dropDownListConainerElm2)
dropDownListConainer.appendChild(dropDownListConainerElm3)
let dropDownListConainerElmsStyle ={
    "style":
    `
        background-color:rgb(78, 74, 74) ;
        padding :3px ;
    `
}
setElementAttribute(dropDownListConainer ,
    {
        "style":
        `
         display : grid ;
         row-gap :2px;
         grid-template-columns:40px;
         grid-auto-flow :row ;
         grid-auto-row :3px;
         box-sizing : border-box ;
        `
    })
setElementAttribute(dropDownListConainerElm1,dropDownListConainerElmsStyle);
setElementAttribute(dropDownListConainerElm2,dropDownListConainerElmsStyle);
setElementAttribute(dropDownListConainerElm3,dropDownListConainerElmsStyle);
let instructorHeaderContainer1 =creatElement_("div");
let instructorHeaderStudentContainer =creatElement_("div");
let instructorHeaderImgContainer=creatElement_("div");

let instructorHeaderStudentContainerAnckorLink =creatElement_("a");
let instructorHeaderImgContainerAnchorLink=creatElement_("a");

let instructorHeaderStudentContainerText =creatElement_("span");
let instructorHeaderImgContainerImg=creatElement_("img");

let instructorHeaderStudentContainerAnckorLinkText =createTextNode_("My profile");


//append section 
instructorPrfileHeader.appendChild(dropDownListConainer)
instructorPrfileHeader.appendChild(instructorHeaderContainer1);
instructorPrfileHeader.appendChild(instructorHeaderStudentContainer);
instructorPrfileHeader.appendChild(instructorHeaderImgContainer);

//append student and img elems
instructorHeaderStudentContainer.appendChild(instructorHeaderStudentContainerAnckorLink);
instructorHeaderImgContainer.appendChild(instructorHeaderImgContainerAnchorLink);

instructorHeaderStudentContainerText.appendChild(instructorHeaderStudentContainerAnckorLinkText);
instructorHeaderStudentContainerAnckorLink.appendChild(instructorHeaderStudentContainerText);
instructorHeaderImgContainerAnchorLink.appendChild(instructorHeaderImgContainerImg);

//style student link
setElementAttribute(instructorPrfileHeader ,
    {
        "style":
        `
        align-items :center;
        background-clip :border-box;
        background-image: linear-gradient(rgba(189, 114, 198, 0.98),rgba(129, 183, 203, 0));
        background-color :;
        border-radius : 5px;
        box-shadow :none;
        box-sizing :border-box;
        display :flex;
        height :72px;
        margin :0px ;
        padding :0px 24px;
        position: fixed;
        width:100vw;
        top :0px;
        left :0px;
        z-index: 1010;
        `
    }
)
setElementAttribute(instructorHeaderContainer1,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        flex-basis :100%;
        flex-grow :1;
        flex-shrink : 1;
        margin:0px;
        padding:0px;
        `
    }
)

setElementAttribute(instructorHeaderStudentContainer,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        padding:0px;
        margin:0px;
        position :relative;
        `
    }
)

setElementAttribute(instructorHeaderStudentContainerAnckorLink,
    {
        "style":
        `
        align-items :center;
        background-color :rgba(0, 0, 0, 0);
        border :0px none white ;
        box-sizing :border-box;
        color  :rgb(48, 49, 65);
        cursor :pointer;
        display :inline-flex;
        font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :14px;
        font-weight :700;
        height :40px;
        justify-content :center;
        letter-spacing :normal;
        line-height :16.8px;
        margin :12px 0px ;
        max-width :100%;
        min-width :0px;
        padding :0px 12px;
        position :relative;
        text-decoration-line :none;
        text-decoration-style :solid;
        text-decoration-thickness :auto;
        text-size-adjust :100%;
        text-wrap-mode: nowrap;
        user-select :none;
        vertical-align :bottom;
        white-space-collapse :collapse;
        width :auto;
        `,
        "href":"../HTML/profilePicrure.html",
        "target":"_self"
    })
setElementAttribute(instructorHeaderStudentContainerText,
    {
        "style":
        `
        box-sizing :border-box;
        cursor :pointer;
        display :block;
        white-space-collapse : collapse;
        `
    }
)

//style image link
setElementAttribute(instructorHeaderImgContainer,{
    "style":
    `
    box-sizing :border-box;
    display :block;
    padding :0px;
    margin :0px;
    position :relative;
    `
})
setElementAttribute(instructorHeaderImgContainerAnchorLink,
    {
        "style":
        `
        align-items: center;
        background-color: rgba(0, 0, 0, 0);
        border :0px none rgb(109, 40, 210);
        border-radius :4px;
        box-sizing :border-box;
        cursor :pointer;
        display :inline-flex;
        height :40px;
        justify-content: center;
        margin :12px 0px ;
        max-width  :100%;
        min-width :0px;
        padding :0px 4px;
        position :relative;
        vertical-align: bottom;
        `,
        "href":"../HTML/profile.html",
        "alt":"edit"
    })
setElementAttribute(instructorHeaderImgContainerImg,
    {
        "style":
        `
            align-items :center;
            aspect-ratio :auto 32 / 32;
            background-clip :border-box;
            background-color :rgba(0, 0, 0, 0);
            background-origin :padding-box;
            border-radius :1000px;
            border-top-style solid rgb(209, 210, 224);
            border : .8px solid 
            box-sizing: border-box;
            cursor :pointer;
            display :flex;
            height : 32px;
            justify-content :center ;
            margin :8px ;
            max-width :100%;
            object-fit :cover;
            overflow-clip-margin :content-box;
            overflow-x : clip;
            overflow-y :clip ;
            padding :0px;
            vertical-align :middle;
            width :32px;
        `,
        "src":"../../imagee/img1.png",
        "alt":"personal image",
    }
)
//################## Events ######################
let Eventcounter =0 ;
dropDownListConainer.onclick =function()
{
    Eventcounter++;
    if(Eventcounter == 1)
    {
        updateStyleAtrributes(instrcutorPageAsideBar,"left","2px");
    }
    else{
        Eventcounter=0;
        updateStyleAtrributes(instrcutorPageAsideBar,"left","-330px");
    }
}
//################### Instructor Aside Bar #######################
let instrcutorPageAsideBarContainer =creatElement_("section");
let instrcutorPageAsideBarList =creatElement_("ul");
let instrcutorPageAsideBarListItems =[];
let instrcutorPageAsideBarAnchorLinks =[];
let instrcutorPageAsideBarAnchorLinksText =[]
let instrcutorPageAsideBarAnchorLinksTextNode =["Creat Exam","Creat Session","Show Exam","Show Session","Creat Course","Show all Courses","Show All Students"];

instrcutorPageAsideBar.appendChild(instrcutorPageAsideBarContainer);
instrcutorPageAsideBarContainer.appendChild(instrcutorPageAsideBarList);

for(let i=0 ; i<instrcutorPageAsideBarAnchorLinksTextNode.length ;i++)
{
    instrcutorPageAsideBarListItems[i]=creatElement_("li");
    instrcutorPageAsideBarAnchorLinks[i]=creatElement_("a");
    instrcutorPageAsideBarAnchorLinksText[i]=createTextNode_(instrcutorPageAsideBarAnchorLinksTextNode[i]);

    instrcutorPageAsideBarListItems[i].appendChild(instrcutorPageAsideBarAnchorLinks[i]);
    instrcutorPageAsideBarAnchorLinks[i].appendChild(instrcutorPageAsideBarAnchorLinksText[i]);
    instrcutorPageAsideBarList.appendChild(  instrcutorPageAsideBarListItems[i]);
}

setElementAttribute(instrcutorPageAsideBar ,
    {
        "style":
        `
            position:fixed ;
            left :-330px;
            top:12vh;
            transition: 0.3s ;
        `
    })
setElementAttribute(instrcutorPageAsideBarContainer,
    {
        "style":
        `
        background-image: linear-gradient(rgba(189, 114, 198, 0.98),rgba(129, 183, 203, 0));
        // background-color:blueviolet;
        border-radius:0px 4px 4px 0px ;
        width: 17vw;
        
        `
    }
)
setElementAttribute(instrcutorPageAsideBarList ,
    {"style":
        `
        box-sizing: border-box;
        padding :10px 0px;
        list-style-type: none;
        `
    }
)
let instrcutorPageAsideBarListItemsStyle= {
    "style":
    `
        box-sizing: border-box;
        border-radius:10px;
        margin:3vh 0px 0px 0px;
        background-color:rgba(255, 255, 255, 0.8);
        padding: 2vh 4px;
    `
}
let instrcutorPageAsideBarAnchorLinksStyle={
    "style":
    `
    color  :rgb(48, 49, 65);
    cursor :pointer;
    font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size :2.3vh;
    font-weight :800;
    // height :10vh;
    letter-spacing :normal;
    line-height :16.8px;
    text-decoration-line :none;
    text-decoration-style :solid;
    text-decoration-thickness :auto;
    text-size-adjust :100%;
    text-wrap-mode: nowrap;
    user-select :none;
    vertical-align :bottom;
    white-space-collapse :collapse;
    text-decoration: none;
    `,
    "href":"../../InstructorActivity/creatExam/main.html"
}

let pagesLinks =["../../InstructorActivity/creatExam/main.html","../../InstructorActivity/creatSession/main.html","../../InstructorActivity/showExam/main.html","../../InstructorActivity/showSession/main.html","../../InstructorActivity/creatCourse/main.html","../../InstructorActivity/showCourse/main.html"]
for(let i=0 ; i<instrcutorPageAsideBarListItems.length ;i++)
{
    setElementAttribute(instrcutorPageAsideBarListItems[i],instrcutorPageAsideBarListItemsStyle);
    setElementAttribute(instrcutorPageAsideBarAnchorLinks[i],instrcutorPageAsideBarAnchorLinksStyle);
    setElementAttribute(instrcutorPageAsideBarAnchorLinks[i],{"href":pagesLinks[i]})
}

//##################### Instructor Aside Bar end ###############
//creat body elements
let fullViewPortContainer = creatElement_("div");
let LayoutContainer = creatElement_("div");
let layoutSectionsContainer =creatElement_(("div"))//grid

let headerSection = creatElement_("div");
let profileSection = creatElement_("div");
let learningSection = creatElement_("div");
let layoutSections=[headerSection ,profileSection, learningSection];
//append 
body.appendChild(fullViewPortContainer);
fullViewPortContainer.appendChild(LayoutContainer);
LayoutContainer.appendChild(layoutSectionsContainer);

let headerText =["Instructor" ,"Pepo" ," "];
let headerTextNode =[];

let headerSectionElems =[];
for(let i=0 ; i<3 ;i++)
{
    headerSectionElems[i]=creatElement_("h1");
    headerTextNode[i] =createTextNode_(headerText[i]);
    headerSectionElems[i].appendChild( headerTextNode[i]);
    headerSection.appendChild(headerSectionElems[i]);
    layoutSectionsContainer.appendChild(layoutSections[i]);
}
//style elems

setElementAttribute(fullViewPortContainer,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        padding:5vh;
        `
    })

setElementAttribute(LayoutContainer,
    {
        "style":
        `
        box-sizing: border-box;
        display :block;
        margin :0px;
        overflow-x :clip;
        padding :0px;
        `
    }
)
setElementAttribute(layoutSectionsContainer,
    {
        "style":
        `
        box-sizing: border-box;
        // background-color: white;
        border :0px none red ;
        display: grid;
        background-image: linear-gradient(rgba(252, 252, 252, 0.98) 20vh  ,rgb(255,255,255)20vh);
        grid-template-columns: minmax(500px , 1000px) auto;
        grid-auto-flow: row;
        grid-template-rows: 20vh 80vh;
        column-gap: 64px;
        justify-content: space-evenly;
        grid-template-areas: "sec1 sec2" "sec3 sec2";
        padding-bottom :16px;
        padding-left : 5vw;
        padding-right :5vw;
        padding-top :0px;
        `
    }
)
setElementAttribute(headerSection ,
    {
        "style":
        `
        // background-image: linear-gradient(blue,rgb(255,255,255));
        background-color:rgba(1,1,1,0);
        box-sizing :border-box;
        display :block;
        max-width: 1000px;
        min-width: 500px;
        grid-area: sec1;
        padding :24px 0px 0px 0px  ;
        position: relative;
        top :0px;
        z-index : 0;
        `
    }
)
setElementAttribute(headerSectionElems[0],
    {
        "style":
        `
        color : rgb(48, 49, 65);
        box-sizing: border-box;
        display :block;
        font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :14px;
        font-weight :700;
        letter-spacing :normal;
        line-height :16.8px;
        margin-block :0px;
        margin-inline :0px;
        margin :0px;
        max-width :600px;
        padding:0px;
        text-transform :uppercase;
        `
    })
setElementAttribute(headerSectionElems[1],
        {
            "style":
            `
            color : rgb(48, 49, 65);
            box-sizing: border-box;
            display :block;
            font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :27.4252px;
            font-weight :700;
            letter-spacing :normal;
            line-height :32.9102px;
            margin-block :0px;
            margin-inline :0px;
            margin :0px;
            max-width :987.307px;
            padding:16px 0px 0px 0px ;
            text-transform :uppercase;
            `
    })
setElementAttribute(headerSectionElems[2],
    {
        "style":
        `
        box-sizing :border-box;
        display : block;
        height :8px;
        margin-block :0px;
        margin-inline :0px;
        margin :0px;
        max-width :600px;
        padding :8px 0px 0px 0px ;
        `
    }
)

//profile section 
setElementAttribute(profileSection,
    {
        "style":
        `
        // background-image: linear-gradient(blue,rgb(255,255,255));
        background-color:rgba(1,1,1,0);
        max-width: 380px;
        min-width: 360px;
        grid-area: sec2;
        box-sizing :border-box;
        display :block;
        margin :0px;
        padding :32px 0px 0px 0px ;
        z-index :-3,
        `
    }
)

//learning section 
setElementAttribute(learningSection ,
    {
        "style":
        `
            //  background-color :rgb(255, 255, 255);
            background-color:rgba(1,1,1,0);
            // background-image: linear-gradient(rgb(244, 239, 239),rgb(255,255,255));
            grid-area: sec3;
            box-sizing :border-box;
            display :block;
            margin :0px;
            padding :48px 0px 32px 0px  ;
        `
    }
)

//############### profile section 
var profileSectionLayout =creatElement_("div");
var profileSectionBorder =creatElement_("div");
var profileSectionContainer =creatElement_("div") //flex

var profileSectionImageContainer =creatElement_("div");
var profileSectionImage =creatElement_("img");

var profileSectionContactInfoContainer =creatElement_("div");
var profileSectionEditProfileLink =creatElement_("a");
var profileSectionEditProfileIcon =creatElement_("img");
var profileSectionEditProfileText =creatElement_("span");
var profileSectionEditProfileTextNode =createTextNode_("Edit profile");


//append
profileSection.appendChild(profileSectionLayout);
profileSectionLayout.appendChild(profileSectionBorder);
profileSectionBorder.appendChild(profileSectionContainer);

profileSectionContainer.appendChild(profileSectionImageContainer);
profileSectionContainer.appendChild(profileSectionContactInfoContainer);

profileSectionImageContainer.appendChild(profileSectionImage);
//link 
profileSectionContactInfoContainer.appendChild(profileSectionEditProfileLink);
profileSectionEditProfileLink.appendChild(profileSectionEditProfileIcon);
profileSectionEditProfileLink.appendChild(profileSectionEditProfileText);
profileSectionEditProfileText.appendChild(profileSectionEditProfileTextNode);

//style image section
setElementAttribute(profileSectionLayout,
    {
        "style":
            `
            background-color :rgb(255, 255, 255);
            border-radius: 16px;
            box-shadow :0px 2px 4px 0px rgba(239, 232, 240, 0.95) ;
            box-sizing :border-box ;
            display :block ;
            max-height : 100%;
            min-height : 280px;
            margin :10px;
            padding :0px;
            max-width :360px ;
            min-width : 320px;
            `
    }
)
setElementAttribute(profileSectionBorder,
    {
        "style":
        `
        box-sizing :border-box ;
        display : block ;
        height :100%;
        margin :0px;
        padding :24px;
        max-width :360px;
        min-width :340px;
        `
    }
)
setElementAttribute(profileSectionContainer ,
    {
        "style":
        `
            box-sizing :border-box;
            display :flex ;
            flex-direction : column ;
            height :232px;
            margin :0px;
            padding :0px;
            row-gap :32px;
            column-gap :32px ;
            max-width : 320px;
            min-width :290px ;
        `
    }
)

setElementAttribute(profileSectionImageContainer ,
    {
        "style":
        `
            align-items: center;
            box-sizing :border-box;
            display : flex ;
            height :152px;
            justify-content :center ;
            margin :0px;
            padding :0px;
            width :100%;
        `
    })

setElementAttribute(profileSectionImage ,
    {
        "style":
        `
         aspect-ratio :auto 64 / 64;
        border:0.8px solid rgb(209, 210, 224);
        border-radius :10px/100px;
        box-sizing: border-box;
        display :flex;
        height :152px;
        margin :0px;
        max-width :100%;
        object-fit :cover;
        overflow-clip-margin :content-box;
        padding :0px;
        vertical-align : middle ;
        width :152px;
        `,
        "src":"../../imagee/img1.png",
        "alt":"instructor Photo "

    })

//style button
setElementAttribute(profileSectionContactInfoContainer,
    {"style":
        `
        box-sizing :border-box;
        column-gap :16px;
        display :flex;
        flex-direction :column;
        height :48px;
        margin :0px;
        padding:0px;
        row-gap :16px ;
        width 100% ;
        `
    }
)
setElementAttribute(profileSectionEditProfileLink ,
    {
        "style":
        `
        align-items :center;
        background-color :rgba(0, 0, 0, 0);

        border-radius :4px;
        border :.8px solid rgb(109, 40, 210);
        box-sizing : border-box;
        cursor :pointer;
        display :flex;
        height :48px;
        justify-content : center;
        margin :0px;
        max-width :100%;
        min-width :80px;
        padding :0px 12px ;
        position :relative;
        text-decoration-color: rgb(109, 40, 210);
        text-decoration-line :none;
        text-decoration-style :solid;
        text-decoration-thickness :auto;
        text-wrap-mode :nowrap;
        vertical-align :bottom;
        white-space-collapse :collapse;
        `,
        "href":"../HTML/profile.html"
    }
)
setElementAttribute(profileSectionEditProfileIcon,
    {
        "style":
        `
        box-sizing :border-box;
        cursor :pointer;
        display :block;
        flex-shrink : 0;
        height :20px;
        margin :0px;
        overflow-clip-margin : content-box;
        padding :0px;
        user-select :none;
        white-space-collapse: collapse;
        width :20px;
        `,
        "src":"../../imagee/ico3.png",
        "alt":"icon "
    }
)
setElementAttribute(profileSectionEditProfileText,
    {
        "style":
        `
        box-sizing: border-box;
        color :rgb(109, 40, 210);
        cursor :pointer;
        display :block;
        font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :16px;
        font-weight :700;
        height :19.2px;
        letter-spacing :normal;
        line-height :19.2px;
        margin:0px 0px 0px 6px;
        overflow-x :hidden;
        overflow-y :hidden;
        padding :0px;
        text-overflow :ellipsis;
        text-wrap-mode :nowrap;
        white-space-collapse :collapse;
        width :84.475px;
        `
    }
)

//learning learningSection
let learningSectionLayout = creatElement_("div");
let learningSectionContainer = creatElement_("div");

let learningSectionHeader =creatElement_("h1");
let learningSectionHeaderTextNode =createTextNode_("Learning");
learningSectionHeader.appendChild(learningSectionHeaderTextNode);

let learningSectioContentContainer =creatElement_("div");//grid

let learningSectionElems =creatElement_("section");
let learningSectionElemsLayout =creatElement_("div");
let learningSectionElemsImageConatiner =creatElement_("div");
let learningSectionElemsImage =creatElement_("img");

//link of course
let learningSectionCourseContainer =creatElement_("div");
let learningSectionLinkContainer =creatElement_("div");
let learningSectionLinkHeader =creatElement_("h3");
let learningSectionLink =creatElement_("a");
let learningSectionLinkTextContainer =creatElement_("div");
let learningSectionLinkTextNode =createTextNode_("How to Create an Online Course")

let learningSectionDescriptionLayout =creatElement_("div");
let learningSectionDescriptionTextContainer =creatElement_("span");
let learningSectionDescriptionTextNode =createTextNode_("Use our recommended best practices to plan, produce, and publish a well-designed, high quality Udemy course");

//append 
learningSection.appendChild(learningSectionLayout);
learningSectionLayout.appendChild(learningSectionContainer);
learningSectionContainer.appendChild(learningSectionHeader);

learningSectionContainer.appendChild(learningSectioContentContainer);

//grid elems 
learningSectioContentContainer.appendChild(learningSectionElems);
learningSectionElems.appendChild(learningSectionElemsLayout);

learningSectionElemsLayout.appendChild(learningSectionElemsImageConatiner);
learningSectionElemsImageConatiner.appendChild(learningSectionElemsImage);

learningSectionElemsLayout.appendChild(learningSectionCourseContainer);

learningSectionCourseContainer.appendChild(learningSectionLinkContainer);
learningSectionLinkContainer.appendChild(learningSectionLinkHeader);
learningSectionLinkHeader.appendChild(learningSectionLink);
learningSectionLink.appendChild(learningSectionLinkTextContainer);
learningSectionLinkTextContainer.appendChild(learningSectionLinkTextNode);
//text
learningSectionCourseContainer.appendChild(learningSectionDescriptionLayout);
learningSectionDescriptionLayout.appendChild(learningSectionDescriptionTextContainer);
learningSectionDescriptionTextContainer.appendChild(learningSectionDescriptionTextNode);

//style header
setElementAttribute(learningSectionLayout,
    {
        "style":
            `
            box-sizing: border-box;
            column-gap :32px;
            display :flex;
            flex-direction :column;
            margin :0px;
            padding:0px;
            row-gap :32px;
            width :100%;
            `
    })
setElementAttribute(learningSectionContainer ,
    {
        "style":
        `
        box-sizing :border-box;
        display :flex;
        flex-direction :column;
        margin :0px;
        padding :0px;
        width :100%;
        `
    }
)
setElementAttribute(learningSectionHeader,
    {
        "style":
        `
        box-sizing :border-box;
        color :rgb(48, 49, 65);
        display :block;
        font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :23.36px;
        font-weight :700;
        height :28.025px;
        letter-spacing :normal;
        line-height :28.032px;
        margin-block:0px;
        margin-inline:0px;
        margin:0px;
        max-width :840.96px;
        padding:0px 5px;
        text-size-adjust :100%;
        width :100%;
        `
    }
)

//style elems
setElementAttribute(learningSectioContentContainer,
    {
        "style":
        `           
            box-sizing :border-box;
            column-gap :16px;
            display :grid;
            grid-template-columns :30% 30% 30%;
            grid-auto-flow :row ;
            grid-auto-rows :30vh;
            height 100%;
            line-height: 22.4px;
            margin:16px 0px 0px 0px ;
            padding:0px;
            row-gap :16px;
            width 100%;
        `
    }
)

setElementAttribute(learningSectionElems,
    {
        "style":
        `
        background-color :rgb(255, 255, 255);
        //background-image: linear-gradient(blue,rgb(255,255,255));
        border-radius :16px;
        border:.8px solid rgb(233, 234, 242);
        box-sizing :border-box;
        display : flex;
        flex-direction :column;
        height :406.6px;
        margin:0px;
        padding:0px;
        width :100%;
        box-shadow :2px 4px 5px rgb(45, 136, 233);;
        `
    }
)

setElementAttribute(learningSectionElemsLayout,
    {
        "style":
        `
        box-sizing :border-box;
        column-gap :16px;
        display :flex;
        flex-basis :auto;
        flex-direction :column;
        flex-grow :1;
        flex-shrink :0;
        height :100%;
        margin :0px;
        padding :16px;
        row-gap :16px
        width 100%;
        `
    }
)

setElementAttribute(learningSectionElemsImageConatiner,
    {
        'style':
        `
        box-sizing: border-box;
        display :block;
        height :auto ;
        margin :0px;
        padding:0px 1vw;
        width : 100%;
        `
    }
)

setElementAttribute(learningSectionElemsImage,
    {
        "style":
        `
        aspect-ratio: 1.77778 / 1;
        border-radius :8px;
        box-sizing :border-box;
        contain :size;
        // contain-intrinsic-height :150px;
        // contain-intrinsic-width :300px;
        display :block;
        height :120px;
        margin:0px;
        max-width :100%;
        object-fit :cover;
        overflow-clip-margin :content-box;
        overflow-x :clip;
        overflow-y :clip;
        padding :0px;
        `,
        "src":"../../imagee/js2.png",
        "alt":"js course"
    }
)

setElementAttribute(learningSectionCourseContainer,
    {
        "style":
        `
        box-sizing: border-box;
        column-gap :4px;
        display :flex;
        flex-direction :column;
        height :100%;
        margin:0px;
        padding :0px;
        row-gap :4px;
        width :100%;
        `
    }
)
setElementAttribute(learningSectionLinkContainer,
    {
        "style":
        `
        box-sizing: border-box;
        display: block;
        height:64px;
        margin :0px;
        padding :10px 0px;
        width :100%;
        `
    }
)
setElementAttribute(learningSectionLinkHeader,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        height :64.275px;
        margin-block:0px;
        margin-inline:0px;
        margin:0px
        max-width :642.853px;
        padding:0px;
        text-size-adjust: 100%;
        width :auto ;
        `
    }
)
setElementAttribute(learningSectionLink,
    {
        "style":
            `
            box-sizing :border-box;
            cursor :pointer;
            display :block;
            height :64.275px;
            margin:0px;
            padding :0px;
            text-decoration-color: rgb(216, 217, 232);
            text-decoration-line :none;
            text-decoration-style :solid;
            text-decoration-thickness :auto;
            width : auto;
            `
    }
)
setElementAttribute(learningSectionLinkTextContainer,
    {
        "style":
        `
        box-sizing :border-box;
        color :rgb(48, 49, 65);
        cursor :pointer;
        display :block;
        font-family :apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :17.857px;
        font-weight :700;
        height :64.275px;
        letter-spacing :normal;
        // line-height :21 ;
        margin :0px;
        overflow-x :hidden;
        overflow-y :hidden;
        padding:0px;
        text-overflow :ellipsis;
        text-size-adjust :100%;
        text-wrap-mode: wrap;
        white-space-collapse :collapse;
        width :auto;
        `
    }
)

setElementAttribute(learningSectionDescriptionLayout,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        height :44.8px;
        margin :0px;
        padding :0px;
        width :100%;
        `
    })
setElementAttribute(learningSectionDescriptionTextContainer,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        height :44.8px;
        margin:0px;
        max-width :600px;
        overflow-x :hidden;
        overflow-y :hidden;
        padding:0px;

        width :100%;
        `
    })
setElementAttribute(learningSectionDescriptionTextContainer,
    {
        "style":
        `
        box-sizing: border-box;
        display :inline;
        font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :16px;
        font-weight :400;
        height :auto;
        line-height :22.4px;
        margin :0px;
        padding:0px;
        text-size-adjust: 100%;
        text-wrap-mode :wrap;
        white-space-collapse :collapse;
        width :auto;
        `
    })