//isteed of local storage
// let jsObj;
// var xhr = new XMLHttpRequest();

// xhr.open("GET", "../Json/user.json", true);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && (xhr.statusText == "ok" || xhr.status == 200)) {
//         jsObj = JSON.parse(xhr.response).data;
//     }
// }
// xhr.send()

// /* ######################## change Attribute #####################*/
// function updateStyleAtrributes(elem ,attribute,styleOfAttribute)
// {
//     let currentStyle =  elem.getAttribute("style") || "";
//     // Add or update one style (e.g., change attribute)
//     let myVar = `${attribute}:[^;]*;`;
//     let regex = new RegExp(myVar); // same as /test/
//     currentStyle = currentStyle.replace(regex,''); // remove if exists
//     currentStyle += `${attribute}:${styleOfAttribute};`;
//     // Set the new style attribute
//     elem.setAttribute("style", currentStyle);
// }
// /* ######################## Creat element method ###############*/
// function creatElement_(ele) {
//     return document.createElement(ele);
// }
// /* ######################### creat textnode method ################ */
// function createTextNode_(text) {
//     return document.createTextNode(text);
// }
// /* ################## Set Elment Attribute method ##################### */
// function setElementAttribute(ele, obj) {
//     for (let key in obj) {
//         ele.setAttribute(key, obj[key])
//     }
// }

// /* ################  main design sections ################## */
// var breakSpace = document.createElement("br");
// var body = document.body;

// var instrcutorPageFrame =creatElement_("div");
// var instructorSideNav =creatElement_("div");
// var instructorMainContainer =creatElement_("div");
// var instructorRespContent =creatElement_("div");
// var instructorPrfileHeader =creatElement_("header");
// var header = creatElement_("header");
// var tabModuleContainer =creatElement_("div");

// //creation
// instrcutorPageFrame.appendChild(instructorSideNav);
// instrcutorPageFrame.appendChild(instructorMainContainer);
// instructorMainContainer.appendChild(instructorRespContent);
// body.appendChild(instructorPrfileHeader);
// instructorRespContent.appendChild(header);
// instructorRespContent.appendChild(tabModuleContainer);
// body.appendChild(instrcutorPageFrame);

// //#################### style  main design sections ###########
// setElementAttribute(instrcutorPageFrame,
//     {
//         "style":
//         `
//             box-sizing: border-box;
//             display :flex;
//             margin :-72px 0px 0px 0px ;
//             padding :0px;
//         `
//     }
// )
// setElementAttribute(instructorSideNav,
//     {
//         "style":
//             `
//                 box-sizing :border-box ;
//                 display: none;
//                 margin:0px;
//                 min-width :56px;
//                 padding:0px;
//                 unicode-bidi :isolate;
//                 z-index :1010 ;
//             `
//     }
// )
// setElementAttribute(instructorMainContainer,
//     {
//         "style":
//         `
//         box-sizing :border-box;
//         display :block;
//         flex-basis :0%;
//         flex-grow :1;
//         flex-shrink :1;
//         margin-bottom :64px;
//         min-width :1px;
//         padding : 72px 0px 0px 0px ;
//         `
//     }
// )
// setElementAttribute(instructorRespContent,
//     {
//         "style":
//         `
//         box-sizing : border-box;
//         display: block;
//         margin :0px;
//         max-width :1536px;
//         min-height :720px;
//         padding :0px 5px;
//         `
//     }
// )
// setElementAttribute(instructorPrfileHeader ,
//     {
//         "style":
//         `
//         align-items :center;
//         background-clip :border-box;
//         background-image: linear-gradient(rgba(189, 114, 198, 0.98),rgba(129, 183, 203, 0));
//         background-color :;
//         border-radius : 5px;
//         box-shadow :none;
//         box-sizing :border-box;
//         display :flex;
//         height :72px;
//         margin :0px ;
//         padding :0px 24px;
//         position: relative;
//         z-index: 1010;
//         `
//     }
// )
// /* #################### Creat Elment From type Input ################## */
// function creatInputElement() {
//     let lable = arguments[0];
//     let input = arguments[1];
//     let inputFiledObj = arguments[2];
//     for (let iter = 0; iter < inputFiledObj.lableContent.length; iter++) {

//         lable[iter] = creatElement_("label");
//         let textNode = createTextNode_(inputFiledObj.lableContent[iter]);
//         lable[iter].appendChild(textNode);
//         input[iter] = creatElement_("input");
//         setElementAttribute(lable[iter],
//             {
//                 "for": inputFiledObj.lableForContent[iter],
//                 "style":
//                     `
//             align-items :center;
//             box-sizing : border-box;
//             color : rgb(48, 49, 65);
//             cursor :default;
//             display :flex;
//             font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//             font-size :14px;
//             font-weight :700;
//             height :28px;
//             letter-spacing : normal;
//             line-height :16.8px;
//             margin:0px;
//             min-height  : 28px;
//             padding :0px 0px 0px 8px;
//             text-size-adjust :100%;
//             visibility: visible;
//             width :600px;
//             `
//             })
//         setElementAttribute(input[iter],
//             {
//                 "type": inputFiledObj.inputtype[iter],
//                 "id": inputFiledObj.inputId[iter],
//                 "name": inputFiledObj.inputName[iter],
//                 "value": inputFiledObj.inputValue[iter]
//             }
//         )
//     }
// }

// //######################## instructor header section #########
// let instructorHeaderContainer1 =creatElement_("div");
// let instructorHeaderStudentContainer =creatElement_("div");
// let instructorHeaderImgContainer=creatElement_("div");

// let instructorHeaderStudentContainerAnckorLink =creatElement_("a");
// let instructorHeaderImgContainerAnchorLink=creatElement_("a");

// let instructorHeaderStudentContainerText =creatElement_("span");
// let instructorHeaderImgContainerImg=creatElement_("img");

// let instructorHeaderStudentContainerAnckorLinkText =createTextNode_("My profile");


// //append section 
// instructorPrfileHeader.appendChild(instructorHeaderContainer1);
// instructorPrfileHeader.appendChild(instructorHeaderStudentContainer);
// instructorPrfileHeader.appendChild(instructorHeaderImgContainer);

// //append student and img elems
// instructorHeaderStudentContainer.appendChild(instructorHeaderStudentContainerAnckorLink);
// instructorHeaderImgContainer.appendChild(instructorHeaderImgContainerAnchorLink);

// instructorHeaderStudentContainerText.appendChild(instructorHeaderStudentContainerAnckorLinkText);
// instructorHeaderStudentContainerAnckorLink.appendChild(instructorHeaderStudentContainerText);
// instructorHeaderImgContainerAnchorLink.appendChild(instructorHeaderImgContainerImg);

// //style student link
// setElementAttribute(instructorHeaderContainer1,
//     {
//         "style":
//         `
//         box-sizing :border-box;
//         display :block;
//         flex-basis :100%;
//         flex-grow :1;
//         flex-shrink : 1;
//         margin:0px;
//         padding:0px;
//         `
//     }
// )

// setElementAttribute(instructorHeaderStudentContainer,
//     {
//         "style":
//         `
//         box-sizing :border-box;
//         display :block;
//         padding:0px;
//         margin:0px;
//         position :relative;
//         `
//     }
// )

// setElementAttribute(instructorHeaderStudentContainerAnckorLink,
//     {
//         "style":
//         `
//         align-items :center;
//         background-color :rgba(0, 0, 0, 0);
//         border :0px none white ;
//         box-sizing :border-box;
//         color  :rgb(48, 49, 65);
//         cursor :pointer;
//         display :inline-flex;
//         font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//         font-size :14px;
//         font-weight :700;
//         height :40px;
//         justify-content :center;
//         letter-spacing :normal;
//         line-height :16.8px;
//         margin :12px 0px ;
//         max-width :100%;
//         min-width :0px;
//         padding :0px 12px;
//         position :relative;
//         text-decoration-line :none;
//         text-decoration-style :solid;
//         text-decoration-thickness :auto;
//         text-size-adjust :100%;
//         text-wrap-mode: nowrap;
//         user-select :none;
//         vertical-align :bottom;
//         white-space-collapse :collapse;
//         width :auto;
//         `,
//         "href":"../HTML/profilePicrure.html",
//         "target":"_self"
//     })
// setElementAttribute(instructorHeaderStudentContainerText,
//     {
//         "style":
//         `
//         box-sizing :border-box;
//         cursor :pointer;
//         display :block;
//         white-space-collapse : collapse;
//         `
//     }
// )

// //style image link
// setElementAttribute(instructorHeaderImgContainer,{
//     "style":
//     `
//     box-sizing :border-box;
//     display :block;
//     padding :0px;
//     margin :0px;
//     position :relative;
//     `
// })
// setElementAttribute(instructorHeaderImgContainerAnchorLink,
//     {
//         "style":
//         `
//         align-items: center;
//         background-color: rgba(0, 0, 0, 0);
//         border :0px none rgb(109, 40, 210);
//         border-radius :4px;
//         box-sizing :border-box;
//         cursor :pointer;
//         display :inline-flex;
//         height :40px;
//         justify-content: center;
//         margin :12px 0px ;
//         max-width  :100%;
//         min-width :0px;
//         padding :0px 4px;
//         position :relative;
//         vertical-align: bottom;
//         `
//     })
// setElementAttribute(instructorHeaderImgContainerImg,
//     {
//         "style":
//         `
//             align-items :center;
//             aspect-ratio :auto 32 / 32;
//             background-clip :border-box;
//             background-color :rgba(0, 0, 0, 0);
//             background-origin :padding-box;
//             border-radius :1000px;
//             border-top-style solid rgb(209, 210, 224);
//             border : .8px solid 
//             box-sizing: border-box;
//             cursor :pointer;
//             display :flex;
//             height : 32px;
//             justify-content :center ;
//             margin :8px ;
//             max-width :100%;
//             object-fit :cover;
//             overflow-clip-margin :content-box;
//             overflow-x : clip;
//             overflow-y :clip ;
//             padding :0px;
//             vertical-align :middle;
//             width :32px;
//         `,
//         "src":"../../imagee/img1.png",
//         "alt":"personal image",
//     }
// )
// // ###################  Header Section #################
let jsObj;
var xhr = new XMLHttpRequest();

xhr.open("GET", "../Json/user.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && (xhr.statusText == "ok" || xhr.status == 200)) {
        jsObj = JSON.parse(xhr.response).data;
    }
}
xhr.send()

/* ######################## change Attribute #####################*/
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

/* ################  main design sections ################## */
var breakSpace = document.createElement("br");
var body = document.body;

var instrcutorPageFrame =creatElement_("div");
var instructorSideNav =creatElement_("div");
var instructorMainContainer =creatElement_("div");
var instructorRespContent =creatElement_("div");
var instructorPrfileHeader =creatElement_("header");
var header = creatElement_("header");
var tabModuleContainer =creatElement_("div");
//creation
instrcutorPageFrame.appendChild(instructorSideNav);
instrcutorPageFrame.appendChild(instructorMainContainer);
instructorMainContainer.appendChild(instructorRespContent);
instructorRespContent.appendChild(header);
instructorRespContent.appendChild(tabModuleContainer);
body.appendChild(instructorPrfileHeader);
body.appendChild(instrcutorPageFrame);

//#################### style  main design sections ###########
setElementAttribute(instrcutorPageFrame,
    {
        "style":
        `
            box-sizing: border-box;
            display :flex;
            margin :0px 0px 0px 0px ;
            padding :0px 0px;
        `
    }
)
setElementAttribute(instructorSideNav,
    {
        "style":
            `
                box-sizing :border-box ;
                display: none;
                margin:0px;
                min-width :56px;
                padding:0px;
                unicode-bidi :isolate;
                z-index :1010 ;
            `
    }
)
setElementAttribute(instructorMainContainer,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        flex-basis :0%;
        flex-grow :1;
        flex-shrink :1;
        margin-bottom :64px;
        min-width :1px;
        padding : 72px 0px 0px 0px ;
        `
    }
)
setElementAttribute(instructorRespContent,
    {
        "style":
        `
        box-sizing : border-box;
        display: block;
        margin :0px;
        max-width :1536px;
        min-height :720px;
        padding :0px 5px;
        `
    }
)
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
        width:100vw;
        height :72px;
        margin :0px ;
        padding :0px 24px;
        position: fixed;
        top :0px;
        left :0px;
        `
    }
)
/* #################### Creat Elment From type Input ################## */
function creatInputElement() {
    let lable = arguments[0];
    let input = arguments[1];
    let inputFiledObj = arguments[2];
    for (let iter = 0; iter < inputFiledObj.lableContent.length; iter++) {

        lable[iter] = creatElement_("label");
        let textNode = createTextNode_(inputFiledObj.lableContent[iter]);
        lable[iter].appendChild(textNode);
        input[iter] = creatElement_("input");
        setElementAttribute(lable[iter],
            {
                "for": inputFiledObj.lableForContent[iter],
                "style":
                    `
            align-items :center;
            box-sizing : border-box;
            color : rgb(48, 49, 65);
            cursor :default;
            display :flex;
            font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :14px;
            font-weight :700;
            height :28px;
            letter-spacing : normal;
            line-height :16.8px;
            margin:0px;
            min-height  : 28px;
            padding :0px 0px 0px 8px;
            text-size-adjust :100%;
            visibility: visible;
            width :600px;
            `
            })
        setElementAttribute(input[iter],
            {
                "type": inputFiledObj.inputtype[iter],
                "id": inputFiledObj.inputId[iter],
                "name": inputFiledObj.inputName[iter],
                "value": inputFiledObj.inputValue[iter]
            }
        )
    }
}
//######################## instructor header section #########
let instructorHeaderContainer1 =creatElement_("div");
let instructorHeaderStudentContainer =creatElement_("div");
let instructorHeaderImgContainer=creatElement_("div");

let instructorHeaderStudentContainerAnckorLink =creatElement_("a");
let instructorHeaderImgContainerAnchorLink=creatElement_("a");

let instructorHeaderStudentContainerText =creatElement_("span");
let instructorHeaderImgContainerImg=creatElement_("img");

let instructorHeaderStudentContainerAnckorLinkText =createTextNode_("My profile");


//append section 
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
setElementAttribute(instructorHeaderContainer1,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        // flex-basis :100%;
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
        display :block;
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
    display :block;
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
        `
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
// ###################  Header Section #################
// h1 section
var h1 =creatElement_("h1");
setElementAttribute(h1,
    { "style": 
        `
        box-sizing :border-box;
        color: rgb(48, 49, 65);
        display :block;
        font-family :SuisseWorks, Georgia, Times, "Times New Roman", serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :27.2593px;
        font-weight :700;
        height :34.075px;
        letter-spacing :-0.16px;
        line-height : 34.0741px ;
        margin-block-end  :32px;
        margin-block-start : 8px;

        margin-inline :0px;
        margin :8px 0px 32px 0px ;
        max-width :auto;
        padding:0px;
        text-size-adjust :100%;
        `
    }
)
var h1Text = createTextNode_("Profile & settings");
h1.appendChild(h1Text);
header.appendChild(h1);

//*******************************  section nav bar  ###################*/
var navSection = creatElement_("section"); //sect 
tabModuleContainer.appendChild(navSection);
//******** style section */
setElementAttribute(navSection,
    {
        "style":
            `
        border-bottom : 1px solid gray ;
        box-sizing :border-box;
        color : rgb(48, 49, 65);
        display :block;
        font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :16px;
        font-weight :400;
        height  :50px;
        line-height : 22px;
        margin :0px ;
        padding :0px ;
        position: relative;
        text-size-adjust : 100% ;
        width : 100% ;
        `
    }
)
var navContainar = creatElement_("div"); //div_1
navSection.appendChild(navContainar);
//******** style navContainar */
setElementAttribute(navContainar,
    {
        "style":
            `
        box-sizing :border-box;
        color :rgb(48, 49, 65);
        display : grid ;
        grid-auto-columns : max-content ;
        grid-auto-flow :column;
        column-gap : 16px;
        row-gap :16px ;
        font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size  :16px;
        font-weight :400;
        height  :50px ;
        line-height :20px ;
        margin:0px;
        padding :0px ;
        overflow-x hidden ;
        overflow-y hidden ;
        // scroll-snap-stop always
        // scroll-snap-type x mandatory
        // scrollbar-width none
        text-size-adjust 100%
        width:100% ;
        `
    }
)
var navinnerContainer = []; //div_2
var navbuttonContainer = []; //div_3
var navButton = [];  //button
var navContainerInneText = []; //span
var navButtonInneText = [];
var navinnerText = ["Instructor Profile", "Instructor Picture", "Privecy Setting"]
for (var i = 0; i < 3; i++) {
    //<span > text </span>
    navButtonInneText[i] = createTextNode_(navinnerText[i]); //text node
    navContainerInneText[i] = creatElement_("span"); //span
    navContainerInneText[i].appendChild(navButtonInneText[i]);
    setElementAttribute(navContainerInneText[i],
        {
            "style":
                `
            box-sizing :border-box;
            color: rgb(48, 49, 65);
            cursor :default;
            display :block;
            font-family:  -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-feature-settings :normal;
            font-kerning :auto;
            font-optical-sizing :auto;
            font-size :16px;
            font-size-adjust: none;
            font-stretch :100%;
            font-style :normal;
            font-variant :normal ;
            font-weight :700;
            height : 19.2px;
            letter-spacing : normal;
            line-height :19.2px;
            margin :0px ;
            overflow-x :visible;
            overflow-y :visible ;
            padding :0px;
            text-align :center;
            text-indent :0px;
            text-overflow :ellipsis;
            text-rendering: auto;
            text-shadow :none;
            text-size-adjust: 100%;
            text-transform: none;
            text-wrap-mode :nowrap;
            user-select: none;
            white-space-collapse: collapse;
            width :106.65px;
            word-spacing: 0px;
            `
        }
    )
    //<button><span>text</span></button>
    navButton[i] = creatElement_("button");
    navButton[i].appendChild(navContainerInneText[i]);
    setElementAttribute(navButton[i],
        {
            "style":
                `
            align-items : center;
            appearance :auto;
            background-clip : border-box ;
            background-color :rgba(0, 0, 0, 0);
            background-size :auto ;
            border: 0px none rgb(48, 49, 65);
            border-radius : 4px ;
            border-image-width : 1px;
            box-sizing :border-box ;
            color :rgb(48, 49, 65);
            cursor :default;
            display :inline-flex;
            font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :16px;
            font-size-adjust :none;
            font-stretch : 100% ;
            font-style : normal;
            font-variant :normal ;
            font-weight :700;
            height :48px;
            justify-content :center;
            letter-spacing :normal;
            line-height :20px;
            margin:0px;
            max-width :100%;
            min-width :0px;
            outline-offset : -4px ;
            padding-block :8px;
            padding-inline :4px;
            padding:8px 4px ;
            position :relative ;
            text-align :center ;
            text-indent :0px;
            text-rendering :auto;
            text-shadow :none;
            text-size-adjust :100%;
            text-wrap-mode :nowrap;
            user-select : none;
            vertical-align :bottom;
            white-space-collapse : collapse;
            width :114.65px;
            word-spacing : 0px;
            `
        }
    )
    // <div> <button><span>text</span></button> </div>
    navbuttonContainer[i] = creatElement_("div");
    navbuttonContainer[i].appendChild(navButton[i]);
    setElementAttribute(navbuttonContainer[i],
        {
            "style":
                `
                display : block ;
                flex-basis : auto ;
                flex-grow : 1;
                flex-shrink :1 ;
                box-sizing :border-box;
                color :rgb(48, 49, 65);
                display :block;
                font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :16px;
                font-weight :400;
                height :50px ;
                line-height : 20px;
                margin :0px;
                padding : 0px;
                width :115px ;
                text-size-adjust :100%;
            `
        }
    )
    //<div> <div> <button><span>text</span></button> </div> </div>
    navinnerContainer[i] = creatElement_("div");
    navinnerContainer[i].appendChild(navbuttonContainer[i]);
    setElementAttribute(navinnerContainer[i],
        {
            "style":
                `
                box-sizing :border-box;
                color :rgb(48, 49, 65);
                display :block;
                font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :16px;
                font-weight :400;
                height :50px ;
                line-height : 20px;
                margin :0px 5px;
                padding : 0px;
                min-width :1px ;
                text-size-adjust :100%;
            `
        }
    )
    navContainar.appendChild(navinnerContainer[i]);
}

//###################### body section1 ###################
var section = [];
var counter = [0, 0, 0]
for (let i = 0; i < 3; i++) {
    section[i] = document.createElement("section")
}
navButton[0].onclick = function (eve) {
    counter[0]++;
    counter[1] = 0;
    counter[2] = 0;
    if (counter[0] == 1) {
        eve.preventDefault();
        section[2].remove();
        section[1].remove();
        /* ########### Creat body section */
        //div 1
        section[0] = creatElement_("div");
        tabModuleContainer.appendChild(section[0]);
        //style of body
        setElementAttribute(section[0],
            {
                "style":
                    `
                background-image: radial-gradient(circle, rgba(229, 124, 220, 0.5),rgba(221, 201, 220, 0.5) , rgba(251, 249, 251, 0.91));
                box-sizing :border-box;
                cursor :auto;
                display :block;  
                border-radius : 5px;      
                margin :0px;
                overflow-x :visible;
                overflow-y :visible;
                padding:16px 0px 0px 0px ;
                position :relative;
                visibility :visible ;
                width :auto;
                `
            }
        )
        //div 2 form container
        var formContainer = creatElement_("div");
        section[0].appendChild(formContainer);
        //style 
        setElementAttribute(formContainer, {
            "style":
                `
            box-sizing :border-box;
            cursor :auto;
            display :block;
            margin :0px;
            overflow-x :visible;
            overflow-y :visible;
            padding:0px 0px 0px 0px ;
            position :relative;
            max-width :auto;
            text-size-adjust :100%;
            visibility :visible;
            `
        })
        //form
        var bodyForm = creatElement_("form");
        formContainer.appendChild(bodyForm);
        //form style
        setElementAttribute(bodyForm,
            {
                "style":
                    `
                box-sizing :border-box;
                cursor :auto;
                display :block;
                margin :0px;
                overflow-x :visible;
                overflow-y :visible;
                padding:0px 0px 0px 0px ;
                position :relative;
                text-size-adjust :100%;
                visibility :visible;
                `
            }
        )
        //formSection tab1_col0 tab1_col1 tab1_col2
        let formSection = [];
        for (let i = 0; i < 3; i++) {
            formSection[i] = creatElement_("div");
            bodyForm.appendChild(formSection[i]);
        }
        //style  formsection 1
        setElementAttribute(formSection[0], {
            "style":
                `
                box-sizing :border-box;
                column-gap :50px;
                align-items :baseline;
                align-content :space-evenly;
                row-gap :32px;
                cursor :auto;
                display : flex;
                flex-wrap :wrap;
                line-height:22.4px;
                margin : 0px ;
                padding :0px;
                visibility: visible;
                `
        })
        //formsection 1
        var formSection1Container = [];
        for (let i = 0; i < 2; i++) {
            formSection1Container[i] = creatElement_("div");
            formSection[0].appendChild(formSection1Container[i]);
            setElementAttribute(formSection1Container[i],
                {
                    "style":
                        `
                    box-sizing :border-box;
                    cursor :auto;
                    display : block;
                    flex-basis :auto;
                    flex-grow :1;
                    flex-shrink :1;
                    margin : 0px ;
                    padding :0px;
                    max-width :600px;
                    min-width :375px;
                    text-size-adjust :100%;
                    visibility: visible;
                    `
                }
            )
            
        }
        //formSection1ContainerElem 5
        var formSection1Container1Elems = [];
        for (let i = 0; i < 5; i++) {
            formSection1Container1Elems[i] = creatElement_("div");
            formSection1Container[0].appendChild(formSection1Container1Elems[i]);
        }
        var formSection1Container2Elems = [];
        for (let i = 0; i < 5; i++) {
            formSection1Container2Elems[i] = creatElement_("div");
            formSection1Container[1].appendChild(formSection1Container2Elems[i]);
        }
        //lable and input
        let lable = [];
        let input = [];
        let inputFiledObj =
        {
            lableContent:
                ["First Name", "Last Name", "Headline", "Biography", "Language", "Website", "Facebook", "Instagram", "LinkedIn", "TikTok", "X", "YouTube"],
            lableForContent:
                ["First_Name", "Last_Name", "Headline", "Biography", "Language", "Website", "Facebook", "Instagram", "LinkedIn", "TikTok", "X", "YouTube"],
            inputId:
                ["First_Name", "Last_Name", "Headline", "Biography", "Language", "Website", "Facebook", "Instagram", "LinkedIn", "TikTok", "X", "YouTube"],
            inputName:
                ["First_Name", "Last_Name", "Headline", "Biography", "Language", "Website", "Facebook", "Instagram", "LinkedIn", "TikTok", "X", "YouTube"],
            inputtype: ["text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text"],
            inputValue: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]
        }
        creatInputElement(lable, input, inputFiledObj);
        //field 1 and field 2
         //message error section
         let meassgeErrorC=[];
         let meassgeError =createTextNode_("filed may be not blank");
         let meaageErrorConatiner =[];
         let meaageErrorStyle =
         {
             "style":
             `
                 color : red ;
                //  background-color :rgb(255,255,255);
                font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :16px;
                font-weight :400;
                 box-sizing : border-box ;
                 display :block ;
                 padding :5px 0px;
                 font-size : 12px;
                 font-weight : 400;
             `
         }
        for (let i = 0; i < 2; i++) {
            formSection1Container1Elems[i].appendChild(lable[i]);
            formSection1Container1Elems[i].appendChild(input[i]);
            meaageErrorConatiner[i] =creatElement_("span");
            meassgeErrorC[i] =createTextNode_("filed May be not blank");
            meaageErrorConatiner[i].appendChild(meassgeErrorC[i]);
            console.log( meaageErrorConatiner[i])
            formSection1Container1Elems[i].appendChild(meaageErrorConatiner[i]);
            setElementAttribute(meaageErrorConatiner[i],meaageErrorStyle );
            setElementAttribute(formSection1Container1Elems[i], {
                "style":
                    `
                box-sizing :border-box;
                cursor :auto;
                display: block;
                height :auto;
                margin : 24px 0px 0px 0px  ;
                padding :0px;
                max-width :600px;
                min-width :180px;
                visibility: visible;
                width :600px;
            `
            })
            setElementAttribute(input[i], {
                "style":
                    `
                appearance : none;
                background-color : rgb(255, 255, 255);
                border :.8px solid rgb(145, 148, 172);
                border-radius :4px;
                box-sizing : border-box;
                color :rgb(48, 49, 65);
                cursor :text;
                display :block;
                font-weight :400;
                height :40px;
                letter-spacing: normal;
                line-height : 19.6px;
                margin:0px;
                padding :0px 16px ;
                padding-block :0px;
                padding-inline :16px;
                text-align  :start;
                text-indent :0px ;
                text-rendering :auto;
                text-shadow :none;
                text-size-adjust :100%;
                text-transform :none;
                visibility :visible;
                width :600px;
                word-spacing :0px;
            `
            })
        }
        //filed 3
        formSection1Container1Elems[2].appendChild(lable[2]);
        //style field 3
        setElementAttribute(formSection1Container1Elems[2], {
            "style":
                `
            box-sizing :border-box;
            color : rgb(48, 49, 65);
            cursor :auto;
            displayv : block;
            font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :16px;
            font-weight :400;
            height :68px;
            line-height :22.4px;
            margin : 24px 0px 0px 0px ;
            padding :0px;
            max-width :600px;
            min-width :180px;
            text-size-adjust :100%;
            visibility: visible;
            width :600px;
        `
        })
        var filed3Container = creatElement_("div");
        formSection1Container1Elems[2].appendChild(filed3Container);
        //meaage error
        meaageErrorConatiner[2] =creatElement_("span")
        meaageErrorConatiner[2].appendChild(meassgeError);
        formSection1Container1Elems[2].appendChild(meaageErrorConatiner[2]);
        setElementAttribute( meaageErrorConatiner[2],meaageErrorStyle);
        setElementAttribute(filed3Container, {
            "style":
                `
            align-items : center ;
            background-color :rgb(255, 255, 255);
            box-sizing :border-box ;
            color : rgb(48, 49, 65);
            cursor :auto;
            display :flex;
            font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :16px;
            font-weight :400;
            height :40px;
            line-height :22.4px;
            margin :0px;
            padding : 0px;
            position :relative;
            top:0px;
            left:0px;
            text-size-adjust :100%;
            visibility :visible;
            width :600px;
            z-index :0;
        `
        })

        filed3Container.appendChild(input[2]);
        setElementAttribute(input[2],
            {
                "placeholder": "Instructor at Elearning",
                "style":
                    `
            outline-offset: 0px;
            outline-style: none;
            appearance : none;
            background-color : rgba(240, 231, 231, 0);
            border-bottom-color: rgb(145, 148, 172);
            border-bottom-left-radius :4px;
            border-bottom-right-radius :0px;
            border-bottom-style :solid;
            border-bottom-width: 0.8px;
            border-image-width: 1;
            border-left-color :rgb(145, 148, 172);
            border-left-style :solid;
            border-left-width :0.8px;
            border-right-color: rgb(48, 49, 65);
            border-right-style :none;
            border-right-width :0px;
            border-top-color :rgb(145, 148, 172);
            border-top-left-radius :4px;
            border-top-right-radius :0px;
            border-top-style: solid;
            border-top-width: 0.8px;

            /* // border-radius :4px 0px; */
            box-sizing : border-box;
            color :rgb(48, 49, 65);
            cursor :text;
            display :block;
            flex-basis : 0% ;
            flex-grow :1;
            flex-shrink :1;
            font-weight :400;
            height :40px;
            letter-spacing: normal;
            line-height : 19.6px;
            margin:0px;
            padding :0px 0px 0px 16px ;
            padding-block :0px;
            padding-inline :16px;
            text-align  :start;
            text-indent :initial ;
            text-shadow :none;
            text-size-adjust :100%;
            visibility :visible;
            width :548.362px;
            word-spacing :0px;
        `
            })

        var filed3Span = creatElement_("span");
        var spanTextNde = createTextNode_("60");
        filed3Span.appendChild(spanTextNde);
        filed3Container.appendChild(filed3Span);
        setElementAttribute(filed3Span,
            {
                "style":
                    ` 
            box-sizing: border-box;
            color: rgb(48, 49, 65);
            display :block;
            font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :16px;
            font-weight :400;
            height :22.4px;
            line-height :22.4px;
            margin:0px;
            padding:0px ;
            text-size-adjust: 100%;
            visibility :visible;
            width :52.025px;
            `
            }
        )
        var filed3Box = creatElement_("div");
        filed3Container.appendChild(filed3Box);
        setElementAttribute(filed3Box,
            {
                "style":
                    `
            border:.8px solid  rgb(145, 148, 172);
            border-radius :4px ;
            position :absolute;
            right :0px;
            text-size-adjust: 100%;
            top :0px;
            bottom : 0px;
            left :0px;
            box-sizing :border-box;
            color :rgb(48, 49, 65);
            cursor :auto;
            display :block;
            font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :16px;
            font-weight :400;
            height :40px;
            line-height :22.4px;
            margin:0px;
            padding:0px;
            visibility :visible;
            width: 600px;
            z-index :-2;
            `
            }
        )
        //Biography section
        formSection1Container1Elems[3].appendChild(lable[3]);
        //style formSection1Container1Elems
        setElementAttribute(formSection1Container1Elems[3],
            {
                "style":
                    `
            box-sizing :border-box;
            color : rgb(48, 49, 65);
            cursor :auto;
            displayv : block;
            font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :16px;
            font-weight :400;
            height :181.2px;
            line-height :22.4px;
            margin : 24px 0px 0px 0px ;
            padding :0px;
            max-width :600px;
            min-width :180px;
            text-size-adjust :100%;
            visibility: visible;
            width :600px;
            `
            }
        )
        //creat div1 div2 biosect1 biosect2
        var bioSection = [];
        for (let i = 0; i < 2; i++) {
            bioSection[i] = creatElement_("div");
            formSection1Container1Elems[3].appendChild(bioSection[i]);
        }
        setElementAttribute(bioSection[0],
            {
                "style":
                    `
                border-radius : 4px;
                box-sizing :border-box;
                color :rgb(48, 49, 65);
                cursor :auto;
                display :block;
                font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :16px;
                font-weight :400;
                height :111.6px;
                line-height :22.4px;
                margin :0px ;
                padding :0px ;
                position :relative;
                text-size-adjust :100%;
                visibility :visible;
                width :600px;
                z-index : 0;
                `
            }
        )
        var bioSectionTextNode = createTextNode_("To help learners learn more about you, your bio should reflect your Credibility, Empathy, Passion, and Personality. Your biography should have at least 50 words, links and coupon codes are not permitted.");
        bioSection[1].appendChild(bioSectionTextNode);
        setElementAttribute(bioSection[1],
            {
                "style":
                    `
                align-items :center;
                box-sizing :border-box;
                color :rgb(48, 49, 65);
                cursor :auto;
                display :flex;
                flex-wrap :wrap;
                font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :12px;
                font-weight :400;
                height :41.6px;
                line-height :16.8px;
                margin :0px ;
                padding :8px 0px 0px 0px ;
                position :relative;
                text-size-adjust :100%;
                visibility :visible;
                width :600px;
                `
            }
        )
        //biosect1 div1 div2
        var bioSectio1Container = [];
        for (let i = 0; i < 2; i++) {
            bioSectio1Container[i] = creatElement_("div");
            bioSection[0].appendChild(bioSectio1Container[i]);
        }

        var conatainer1 = creatElement_("div");
        bioSectio1Container[0].appendChild(conatainer1);
        setElementAttribute(bioSectio1Container[0],
            {
                "style":
                    `
                background-color : rgb(255, 255, 255);
                border :.8px solid rgb(145, 148, 172);
                border-radius :4px;
                box-sizing : border-box;
                color :rgb(48, 49, 65);
                cursor :text;
                display :block;

                font-weight :400;
                height :40px;
                letter-spacing: normal;
                line-height : 19.6px;
                margin:0px;
                padding :0px 16px ;
                padding-block :0px;
                padding-inline :16px;
                position :sticky ;
                top :0px;
                text-align  :start;
                text-indent :0px ;
                text-rendering :auto;
                text-shadow :none;
                text-size-adjust :100%;
                text-transform :none;
                visibility :visible;
                width :600px;
                word-spacing :0px;
                z-index :1;
            `
            }
        )
        setElementAttribute(bioSectio1Container[1],
            {
                "style":
                    `
                background-color : rgb(255, 255, 255);
                border-left :.8px solid rgb(145, 148, 172);
                border-right :.8px solid rgb(145, 148, 172);
                border-bottom :.8px solid rgb(145, 148, 172);
                border-top :0px none rgb(145, 148, 172);
                border-radius :4px;
                box-sizing : border-box;
                color :rgb(48, 49, 65);
                cursor :text;
                display :block;

                font-weight :400;
                height :70px;
                letter-spacing: normal;
                line-height : 19.6px;
                margin:0px;
                padding :0px 16px ;
                padding-block :0px;
                padding-inline :16px;
                position :sticky ;
                top :0px;
                text-align  :start;
                text-indent :0px ;
                text-rendering :auto;
                text-shadow :none;
                text-size-adjust :100%;
                text-transform :none;
                visibility :visible;
                width :600px;
                word-spacing :0px;
                z-index :1;
            `
            }
        )
        //conatiner1
        setElementAttribute(conatainer1,
            {
                "style":
                    `
            align-items :center;
            box-sizing :border-box;
            color :rgb(48, 49, 65);
            cursor: auto;
            display :flex;
            flex-grow :1;
            flex-wrap: wrap;
            height :40px;
            margin:0px;
            padding :0px ;
            visibility :visible;
            width :598.4px;
            `
            }
        )
        //buuton and div
        var bioButton = [];
        var buttonImages = []
        for (let i = 0; i < 2; i++) {
            bioButton[i] = creatElement_("button");
            buttonImages[i] = creatElement_("img");
            bioButton[i].appendChild(buttonImages[i]);
            conatainer1.appendChild(bioButton[i]);
            setElementAttribute(bioButton[i],
                {
                    "style":
                        `
                    background-color :rgba(0, 0, 0, 0);
                    border : 0px none black ;
                    appearance :auto;
                    box-sizing: border-box;
                    cursor :pointer;
                    display :flex;
                    height :40px ;
                    justify-content :center;
                    margin :0px -4px ;
                    max-width : 100% ;
                    min-width  :auto ;
                    padding-block :0px ;
                    padding-inline :10px ;
                    padding :0px 10px ;
                    position :relative;
                    white-space-collapse :collapse;
                    vertical-align :bottom;
                    visibility : visible;
                    width :40px;
                    `
                }
            )
        }
        setElementAttribute(buttonImages[0],
            {
                "src": "../../imagee/bold_icon.jfif",
                "width": '30px',
                "height": "20px",
                "style":
                    `
                position :relative ;
                top : 10px ;
                box-sizing: border-box;
             `
            }
        )
        setElementAttribute(buttonImages[1],
            {
                "src": "../../imagee/italic.jpg",
                "width": '30px',
                "height": "20px",
                "style":
                    `
                position :relative ;
                top : 10px ;
                box-sizing: border-box;
             `
            }
        )
        var containerSec3 = creatElement_("div");
        setElementAttribute(containerSec3,
            {
                "style":
                    `
            align-items :center;
            box-sizing :border-box;
            color :rgb(48, 49, 65);
            cursor: auto;
            display :flex;
            flex-grow :1;
            flex-wrap: wrap;
            height :0px;
            margin:0px;
            padding :0px;
            justify-content :flex-end;
            padding :0px ;
            visibility :visible;
            width :534.4px;
            `
            }
        )
        conatainer1.appendChild(containerSec3);


        var textArea = creatElement_("textarea");
        bioSectio1Container[1].appendChild(textArea);
        setElementAttribute(textArea,
            {
                "style":
                    `
            outline-offset: 0px;
            outline-style: none;
            height :68px;
            width :596px;
            padding :10px 20px;
            position :absolute;
            left :0px ;
            margin:0px;
            border-radius : 4px;
            box-sizing: border-box;
            border: 0px none #ccc;
            background-color: rgb(255, 255, 255);
            resize: none;
            font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :12px;
            font-weight :400;
            line-height :16.8px;
            text-align  :start;
            text-indent :0px ;
            text-rendering :auto;
            text-shadow :none;
            text-size-adjust :100%;
            text-transform :none;
            visibility :visible;
            `
            }
        )

        //Language
        //append elelment 
        formSection1Container1Elems[4].appendChild(lable[4]);
        var lanContainer = creatElement_("div");
        var langSelect = creatElement_("select");
        var selectIconContainer = creatElement_("div");
        var selectIconImg = creatElement_("img");
        formSection1Container1Elems[4].appendChild(lable[4]);
        formSection1Container1Elems[4].appendChild(lanContainer);
        lanContainer.appendChild(langSelect);
        lanContainer.appendChild(selectIconContainer);
        selectIconContainer.appendChild(selectIconImg);
        var langOption = [];
        var langOptionTextNode = [];
        var optionlangus =
        {
            value: ["default", "1", "2", "3", "4", "5", "6"],
            optionContent: ["Select language", "English", "Francais (France)", "Italiano", "Polski", "Arabic ( Egypt )"]
        }
        for (let i = 0; i < 6; i++) {
            langOption[i] = creatElement_("option");
            langOptionTextNode[i] = createTextNode_(optionlangus.optionContent[i]);
            langOption[i].appendChild(langOptionTextNode[i]);

            langSelect.appendChild(langOption[i]);
            setElementAttribute(langOption[i],
                {
                    "value": optionlangus.value[i],
                    "style":
                        `
                align-items :center;
                background-color rgb(255, 255, 255)
                box-sizing ;border-box ;
                color : rgb(48, 49, 65);
                column-gap :7px;
                cursor :pointer;
                display :block;
                font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :14px;
                font-size-adjust :none;
                font-stretch :100%;
                font-style :normal;
                font-variant :normal ;
                font-weight :400;
                height :auto;
                letter-spacing :normal;
                line-height :19.6px;
                margin :0px ;
                min-block-size :24px;
                min-inline-size: 24px;
                padding :0px;
                padding-block : 0px ;
                padding-inline :0px ;
                row-gap :7px;
                text-align :start;
                text-indent: 0px;
                text-rendering :auto;
                text-shadow :none;
                text-size-adjust : 100%;
                text-transform :none;
                text-wrap-mode :nowrap;
                user-select :auto;
                visibility :visible;
                white-space-collapse : collapse;
                width : auto;
                word-spacing :0px;
                `
                });

        }
        //style  section 5
        setElementAttribute(formSection1Container1Elems[4],
            {
                "style":
                    `
             box-sizing :border-box;
            color : rgb(48, 49, 65);
            cursor :auto;
            displayv : block;
            font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :16px;
            font-weight :400;
            height :68px;
            line-height :22.4px;
            margin : 24px 0px 0px 0px ;
            padding :0px;
            max-width :600px;
            min-width :180px;
            text-size-adjust :100%;
            visibility: visible;
            width :600px;
            `
            }
        )
        setElementAttribute(lanContainer,
            {
                "style":
                    `
            box-sizing :border-box;
            cursor : auto;
            display :block;
            height :40px ;
            margin:0px;
            padding :0px ;
            position :relative;
            text-size-adjust :100%;
            visibility :visible;
            width :600px;
            `
            }
        )
        //select 
        setElementAttribute(langSelect,
            {
                "style":
                    `
            align-items :center;
            appearance :none;
            background-color: rgb(255, 255, 255);
            border :.8px solid rgb(145, 148, 172);
            border-radius :4px;
            box-sizing :border-box;
            column-gap :normal;
            cursor :pointer;
            display :block;
            height :40px;
            line-height :19.6px;
            margin:0px;
            min-block-size :0px;
            min-inline-size : 0px;
            overflow-x :visible;
            overflow-y :visible;
            padding-block :0px;
            padding-bottom :0px ;
            padding-inline-end: 40px;
            padding-inline-start :12px;
            padding-left : 12px;
            padding-right :40px;
            padding-top :0px;
            row-gap :normal;

            visibility : visible;
            white-space-collapse : preserve;
            width :600px;
            word-spacing :0px;
            `
            }
        )
        //select icon
        setElementAttribute(selectIconContainer,
            {
                "style":
                    `
            align-items :center;
            box-sizing :border-box;
            cursor :auto;
            display :flex;
            height :40px;
            line-height :22.4px;
            margin:0px ;
            padding :0px 8px ;
            pointer-events :none;
            position :absolute;
            right :0px;
            text-size-adjust :100%;
            top :0px;
            visibility :visible;
            width :36px;
            `
            }
        )
        setElementAttribute(selectIconImg,
            {
                "src": "../../imagee/dropIcon.jpg",
                "width": '15px',
                "height": "10px",
                "style":
                    `
                position : relative ;
                right :3px ;
               box-sizing: border-box;
            `
            }
        )

        // formSection1Container[1] section 2 contain on 7 elements
        var container2Elements = [];
        let textInput =[] ; //div1
        let textInputContainer =[]//div12
        let socialUrlText =[]; //div121
        let socialInputBox =[] //div122
        let socialUrlTextNode_ =[];
        /* style of  var container2Elements = [];
        let textInput =[] ; //div1
        let textInputContainer =[]//div12
        let socialUrlText =[]; //div121
        let socialInputBox =[] //div122
        */
        let textInputStyle ={
            "style":
            `
                box-sizing :border-box;
                cursor :auto;
                display :block;
                height :40px;
                margin:0px;
                padding:0px;
                visibility :visible;
                width :600px;
            `
        }
        let textInputContainerStyle=
        {
            "style":
            `
                align-items :center;
                background-color: rgb(255, 255, 255);
                box-sizing :border-box;
                cursor :auto;
                display :flex;
                height : 40px;
                margin:0px;
                padding :0px;
                position :relative;
                visibility :visible;
                width :600px;
                z-index :0;
            `
        }
        let socialUrlTextStyle =
        {
            "style":
                `
                align-self: stretch;
                background-clip :border-box;
                background-color rgb(246, 247, 249)
                background-origin :padding-box;
                background-position-x: 0%;
                background-position-y :0%;
                background-repeat :repeat;
                background-size :auto;
                border-bottom-left-radius :4px;
                border-bottom-right-radius :0px;
                border-top-left-radius :4px;
                box-sizing :border-box;
                color :rgb(48, 49, 65);
                cursor :auto;
                display :block;
                font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :16px;
                font-weight :400;
                height : 38px;
                line-height: 22.4px;
                margin : 2px 0px 1px 1px ;
                padding :5px 16px ;
                text-size-adjust:100%;
                visibility visible
                `
        }
        let socialUrlTextWidth =["143px" ,"147px","131px","116px"," 83px","133px"];

        let socialUrlTextNode =["facebook.com/","instagram.com/","linkedin.com/","tiktok.com/","x.com/","youtube.com/"];
        let socialInputplaceHolder =["Username","Username","Public profile url","@Username","Username","Username"]

        let socislInputStyle =
        {
             "style":
                    `
                appearance : none;
                background-color : rgb(255, 255, 255);
                border :.8px solid rgb(145, 148, 172);
                border-top-left-radius :0px;
                border-top-right-radius: 4px;
                border-bottom-left-radius :0px;
                border-bottom-right-radius: 4px;
                box-sizing : border-box;
                color :rgb(48, 49, 65);
                cursor :text;
                display :block;

                font-weight :400;
                height :40px;
                letter-spacing: normal;
                line-height : 19.6px;
                margin:0px;
                padding :0px 16px ;
                padding-block :0px;
                padding-inline :16px;
                text-align  :start;
                text-indent :0px ;
                text-rendering :auto;
                text-shadow :none;
                text-size-adjust :100%;
                text-transform :none;
                visibility :visible;
                width :600px;
                word-spacing :0px;
            `
        }
        let socislInputWidth =["457px","453px","469px","484px","517px","466px"]

        let socialInputBoxStyle =
        {
            "style":
            `
                border :.8px solid rgb(145, 148, 172);
                border-radius :4px;
                bottom :0px;
                box-sizing : border-box ;
                display :block;
                height :40px;
                position :absolute;
                right: 0px;
                left: 0px;
                top :0px;
                margin :0px;
                padding :0px ;
                visibility: visible;
                width :600px;
                z-index :-1;
            `
        }
        for (let i = 0; i < 7; i++) {
            container2Elements[i] = creatElement_("div");
            container2Elements[i].appendChild(lable[i+5]);
            formSection1Container[1].appendChild(container2Elements[i]);
            if (i == 0) {
                container2Elements[i].appendChild(input[i+5]);
                setElementAttribute(input[i+5],
                    {
                        "placeholder":"URL",
                        "style":
                       ` appearance : none;
                        background-color : rgb(255, 255, 255);
                        border :.8px solid rgb(145, 148, 172);
                        border-radius :4px;
                        box-sizing : border-box;
                        color :rgb(48, 49, 65);
                        cursor :text;
                        display :block;
                        font-weight :400;
                        height :40px;
                        letter-spacing: normal;
                        line-height : 19.6px;
                        margin:0px;
                        padding :0px 16px ;
                        padding-block :0px;
                        padding-inline :16px;
                        text-align  :start;
                        text-indent :0px ;
                        text-rendering :auto;
                        text-shadow :none;
                        text-size-adjust :100%;
                        text-transform :none;
                        visibility :visible;
                        width :600px;
                        word-spacing :0px;`
                    }
                )
                setElementAttribute(container2Elements[i],
                    {
                        "style":
                            `
                    box-sizing :border-box;
                    color : rgb(48, 49, 65);
                    cursor :auto;
                    displayv : block;
                    font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                    font-size :16px;
                    font-weight :400;
                    height :68px;
                    line-height :22.4px;
                    margin :0px ;
                    padding :0px;
                    max-width :600px;
                    min-width :180px;
                    text-size-adjust :100%;
                    visibility: visible;
                    width : 600px;
                    `
                    }
                )
            }
            else {
                //creation
                textInput[i]=creatElement_("div");
                textInputContainer[i]=creatElement_("div");
                socialUrlText[i]=creatElement_("div");
                socialUrlTextNode_[i] =createTextNode_(socialUrlTextNode[i-1]);
                socialInputBox[i]=creatElement_("div");
                //append child
                textInput[i].appendChild(textInputContainer[i]);
                textInputContainer[i].appendChild( socialUrlText[i]);
                textInputContainer[i].appendChild( input[i+5]);
                textInputContainer[i].appendChild( socialInputBox[i]);
                socialUrlText[i].appendChild(socialUrlTextNode_[i]);
                container2Elements[i].appendChild(textInput[i]);
                //style section
                setElementAttribute(container2Elements[i],
                    {
                        "style":
                            `
                        box-sizing :border-box;
                        color : rgb(48, 49, 65);
                        cursor :auto;
                        displayv : block;
                        font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                        font-size :16px;
                        font-weight :400;
                        height :68px;
                        line-height :22.4px;
                        margin :24px 0px 0px 0px ;
                        padding :0px;
                        max-width :600px;
                        min-width :180px;
                        text-size-adjust :100%;
                        visibility: visible;
                        width : 600px;
                        `
                    }
                )
                setElementAttribute(textInput[i],textInputStyle);
                setElementAttribute(textInputContainer[i],textInputContainerStyle);
                setElementAttribute(socialUrlText[i],socialUrlTextStyle);
                setElementAttribute(socialUrlText[i],
                    {
                        "width":socialUrlTextWidth[i-1],
                    }
                )

                setElementAttribute(input[i+5],socislInputStyle);
                setElementAttribute(input[i+5],
                    {
                        "width":socislInputWidth[i-1],
                        "placeholder":socialInputplaceHolder[i-1]
                    } );
                
                setElementAttribute( socialInputBox[i],socialInputBoxStyle);
            }

        }

        //#################  Save Button Design ###############
        //creation 
        var formButton =creatElement_("button");
        var buttonContentContainer = creatElement_("span");
        var buttonContent =createTextNode_("Save");

        //append
        formSection[1].appendChild(formButton);
        formButton.appendChild(buttonContentContainer);
        buttonContentContainer.appendChild(buttonContent);
        
        //style 
        setElementAttribute(formSection[1],
            {
                "style":
                `
                    box-sizing : border-box;
                    display :block;
                    height :40px;
                    margin :32px 0px 0px 0px ;
                    padding :0px ;
                    visibility : visible ;
                    width : 600px ;
                `
            }
        )
        setElementAttribute(formButton,
            {
                "type":"submit",
                "style":
                `
                align-items :center;
                appearance :auto;
                background-color :rgb(105, 44, 180);
                border :0px none white ;
                border-radius :4px ;
                box-sizing: border-box;
                cursor :auto;
                display :inline-flex;
                font-weight :700;
                height :40px;
                justify-content :center;
                margin :0px;
                max-width :100%;
                min-width :80px;
                opacity :1 ;
                padding-block :0px ;
                padding-inline :12px ;
                padding : 0px 12px ;
                position :relative;
                text-wrap-mode :nowrap;
                user-select :none;
                vertical-align :bottom;
                visibility :visible;
                width :80px;
                `
            }
        )
        setElementAttribute(buttonContentContainer ,
            {
                "style":
                `
                box-sizing :border-box;
                color: rgb(255, 255, 255);
                cursor :auto;
                display :block;
                font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-feature-settings: normal;
                font-kerning :auto;
                font-optical-sizing :auto;
                font-size :14px;
                font-size-adjust :none;
                font-stretch :100%;
                font-style :normal;
                font-variant :normal ;
                font-weight :700;
                height :16.8px;
                letter-spacing :normal;
                line-height :16.8px;
                margin :0px ;
                overflow-x :hidden;
                overflow-y :hidden;
                padding :0px ;
                text-align :center;
                text-indent :0px;
                text-overflow :ellipsis;
                text-rendering: auto;
                text-shadow :none;
                text-size-adjust: 100%;
                text-wrap-mode :nowrap; 
                user-select :none;
                visibility :visible;
                white-space-collapse : collapse;
                width :32.225px;
                word-spacing :0px;
                `
            }
        )

        //tp prevent sibling form section 3
        setElementAttribute(formSection[2],
            {
                "style":
                `
                display : none;
                height :0px;
                line-height: 22.4px;
                margin :0px;
                padding : 0px;
                visibility :visible;
                width : 600px ;
                `
            }
        )
   
        //animation of section 0
        for(let i =0 ; i<input.length ; i++)
        {
            input[i].onmouseover=function()
            {
                updateStyleAtrributes(input[i],'background-image','linear-gradient(rgb(100, 164, 215)  ,rgb(218, 47, 221) )');


                // let currentStyle = input[i].getAttribute("style") || "";

                // // Add or update one style (e.g., change background-color)
                // currentStyle = currentStyle.replace(/background-color:[^;]*;/, ''); // remove if exists
                // currentStyle += "background-color: rgba(118, 113, 113, 0.2);";

                // // Set the new style attribute
                // input[i].setAttribute("style", currentStyle);
                
            }
            input[i].onmouseout=function()
            {
                updateStyleAtrributes(input[i],'background-image','none');
            }
        }
        for(let i=0 ; i <formSection1Container1Elems.length ;i++)
        {
            formSection1Container1Elems[i].onmouseover=function()
            {
                updateStyleAtrributes(formSection1Container1Elems[i],'background-image','linear-gradient(rgb(100, 164, 215)  ,rgb(218, 47, 221) )');

            }
            formSection1Container1Elems[i].onmouseout=function()
            {
                updateStyleAtrributes(formSection1Container1Elems[i],'background-image','none');

            }
        }

        //dispaly error meaage
        for(let i=0 ; i<3 ; i++)
        {
            input[i].onblur =function()
            {
    
                if(input[i].value == "")
                {
                    updateStyleAtrributes(meaageErrorConatiner[i],'display','block');
                    console.log(meaageErrorConatiner[i].getAttribute("style"));
                }
                else
                {
                    updateStyleAtrributes(meaageErrorConatiner[i],"display","none");
                    console.log(meaageErrorConatiner[i].getAttribute("style"));
                }
            }
        }
        var instrcturInfo =
        {
            firstName:" ",
            lastName :" ",
            headLine :" ",
            bioGraphy :" ",
            language :" ",
            Facebook :" ",
            Instagram:" ",
            LinkedIn :" ",
            TikTok:" ",
            X :" ",
            YouTube :" "
        }
        formButton.onclick =function(eve)
        {
            eve.preventDefault();
            var counter =0 ;
            for(let key in instrcturInfo)
            {   
                if(counter== 2)
                {
                    instrcturInfo[key]=textArea.value ;
                    counter++;
                    continue;
                }
                if(counter == 3)
                {
                    instrcturInfo[key] =langSelect.value;
                    counter++;
                    continue;
                }
                instrcturInfo[key] =input[counter].value;
                counter++;
            }
            //to store data at local storage
            localStorage.setItem("userData", JSON.stringify(instrcturInfo));
            //to retrive it 
            //const storedUser = JSON.parse(localStorage.getItem("userData"));
        }

    }
}

navButton[1].onclick = function (eve) {

    counter[1]++;
    counter[0] = 0;
    counter[2] = 0;
    if (counter[1] == 1) {
        eve.preventDefault();
        section[0].remove();
        section[2].remove();
        section[1] = creatElement_("div");
        //create  div element 
        // let conatiner = document.createElement("div");
        // var imag = document.createElement("img");

        // let inputFileload = document.createElement("input");

        // let uplaodPhoto = document.createElement("button");
        // let uplaodPhotoText = document.createTextNode("uplaodPhoto");
        // uplaodPhoto.appendChild(uplaodPhotoText);
        // setElementAttribute(conatiner, { "style": "border :2px solid red; " })

        // setElementAttribute(inputFileload,
        //     {
        //         "type": "file",
        //         "id": "inputFileLoad",
        //         "name": "my_photo",
        //     })
        // setElementAttribute(imag,
        //     {
        //         "alt": "profile photo",
        //         "style": "width:120px;height:120px ; padding:5px",
        //         "src": jsObj.avater,
        //     })
        // conatiner.appendChild(imag);
        // section[1].appendChild(conatiner);
        // section[1].appendChild(inputFileload);
        // section[1].appendChild(uplaodPhoto)

        // body.appendChild(section[1]);
        tabModuleContainer.appendChild(section[1]);
        //creation
        let section2FormContainer =creatElement_("div");
        let section2Form =creatElement_("form");
        let section2FormGroub =creatElement_("div");
        let section2FormFooter =creatElement_("div");
        let section2ForSpacer =creatElement_("div");

        // creat section2FormGroub elems
        //lable
        let section2FormGroubLable =creatElement_("lable");
        let section2FormGroubLableTextNode =createTextNode_("Image preview");
        let sectionImageBtnsCotainer =creatElement_("div");//ud

        //creat sectionImageBtnsCotainer elems
        //image
        let section2ImageContainer =creatElement_("div");
        let section2ImageBorder =creatElement_("div");
        let section2Image =creatElement_("img");

        //button
        let section2buttonContainer =creatElement_("div"); //wrpaer
        let section2buttonBorder =creatElement_("div"); //ud-form-groub

        //option lable
        let section2buttonBorderLableTextNode =createTextNode_("add/change File");
        let section2buttonBorderLable =creatElement_("label");
        section2buttonBorderLable.appendChild(section2buttonBorderLableTextNode);
        let section2FileUploaderBtnContainer =creatElement_("div");//file-uploader

        let section2FileUploaderBtn =creatElement_("input");
        let section2FileUploaderBtnLable =creatElement_("label");

        let lableSect1Container =creatElement_("span");
        let lableSect2Container =creatElement_("span");

        let lableSect1Border =creatElement_("span");
        let lableSect2Border =creatElement_("span");

        let lableSect1Text =createTextNode_("No file selected")
        let lableSect2Text =createTextNode_("Upload image");

        //append
        section[1].appendChild(section2FormContainer);
        section2FormContainer.appendChild(section2Form);
        section2Form.appendChild(section2FormGroub);
        section2Form.appendChild(section2FormFooter);
        section2Form.appendChild(section2ForSpacer);

        //append section2FormGroub elems 
        //image
        section2FormGroubLable.appendChild(section2FormGroubLableTextNode);
        section2FormGroub.appendChild(section2FormGroubLable);
        section2FormGroub.appendChild(sectionImageBtnsCotainer);

        //append sectionImageBtnsCotainer elems
        section2ImageContainer.appendChild(section2ImageBorder);
        section2ImageBorder.appendChild(section2Image);
        sectionImageBtnsCotainer.appendChild(section2ImageContainer);
 
        //button
        sectionImageBtnsCotainer.appendChild(section2buttonContainer);
        section2buttonContainer.appendChild(section2buttonBorder);
        section2buttonBorder.appendChild(section2buttonBorderLable);
        section2buttonBorder.appendChild(section2FileUploaderBtnContainer);
        section2FileUploaderBtnContainer.appendChild(section2FileUploaderBtn)
        section2FileUploaderBtnContainer.appendChild(section2FileUploaderBtnLable)

        section2FileUploaderBtnLable.appendChild(lableSect1Container)
        section2FileUploaderBtnLable.appendChild(lableSect2Container)

        lableSect1Container.appendChild(lableSect1Border);
        lableSect2Container.appendChild(lableSect2Border);

        lableSect1Border.appendChild(lableSect1Text);
        lableSect2Border.appendChild(lableSect2Text);
        //style of elements 
        setElementAttribute(section[1],
            {
                "style":
                `
                box-sizing :border-box ;
                display :block;
                margin :0px ;
                max-height :none;
                max-width :none ;
                overflow-x : visible ;
                overflow-y :visible ;
                padding :16px 0px 0px 0px ;
                position :relative;
                visibility :visible;
                `
            }
        )
        setElementAttribute(section2FormContainer,
            {
                "style":
                `
                box-sizing :border-box;
                display :block;
                margin :0px;
                max-width :600px;
                padding :0px;
                visibility :visible;
                `
            }
        )
        setElementAttribute(section2Form,{
            "style":
            `
            box-sizing : border-box ;
            display :block;
            margin :0px;
            padding :0px ;
            visibility :visible;
            `
        })
        setElementAttribute(section2FormGroub ,
            {
                "style":
                `
                box-sizing :border-box ;
                display :block;
                margin :0px;
                max-width :600px;
                min-width :180px;
                padding :0px;
                visibility :visible;
                `
            }
        )
        setElementAttribute(section2FormGroubLable,
            {
                "style":
                ` 
                align-items :center;
                box-sizing :border-box;
                color :rgb(48, 49, 65);
                cursor :default;
                display :flex;
                font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :14px;
                font-weight :700;
                letter-spacing :normal;
                line-height :16.8px;
                margin :0px ;
                min-height :28px;
                padding :0px 0px 8px 0px ;
                text-size-adjust :100%;
                visibility :visible;
                
                `
            }
        )
        setElementAttribute(sectionImageBtnsCotainer,{
            "style":
            `
            box-sizing : border-box;
            display :block;
            margin :0px;
            padding :0px;
            visibility :visible;
            `
        })
        setElementAttribute(section2ImageContainer,
            {
                "style":
                `
                border :.8px solid rgb(145,148,172);
                box-sizing :border-box;
                display :block ;
                margin :0px 0px 16px  0px;
                padding :16px;
                visibility :visible;
                `
            }
        )
        setElementAttribute(section2ImageBorder ,
            {
                "style":
                `
                align-items: center;
                background-clip :border-box;
                background-color :rgb(246, 247, 249);
                box-sizing : border-box;
                cursor :auto;
                display :flex;
                height :200px;
                justify-content: center;
                margin:0px;
                padding :0px ;
                position :relative;
                visibility : visible;
                `
            }
        )
        setElementAttribute(section2Image,
            {
                "style":
                `
                aspect-ratio: auto 200 / 200;
                box-sizing :border-box;
                display: block;
                height :200px;
                margin :0px;
                max-height :200px;
                max-width :100%;
                overflow-clip-margin :content-box;
                overflow-x :clip;
                overflow-y :clip;
                padding :0px;
                vertical-align: middle;
                visibility :visible;
                width :200px;
                `,
                "src":"../../imagee/img1.png",
                "alt":"Instructor photo"
            }
        )
        //button style section
        setElementAttribute(section2buttonContainer,
            {
                "style":
                `
                box-sizing :border-box;
                display: block;
                margin :0px;
                padding :0px;
                visibility: visible;
                `
            }
        )
        setElementAttribute(section2buttonBorder,
            {
                "style":
                `
                box-sizing: border-box;
                display : block;
                margin :0px;
                max-width :600px;
                min-width :180px;
                padding :0px;
                visibility :visible;
                `
            }
        )
        setElementAttribute(section2FileUploaderBtnContainer,
            {"style":
                `
                box-sizing :border-box;
                display :block;
                height : 48px;
                margin :0px;
                padding :0px;
                visibility :visible;
                `
            }
        )
        setElementAttribute(section2FileUploaderBtn,
            {
                "style":
                `
                align-items: baseline;
                appearance :none;
                background-color: rgba(0, 0, 0, 0);
                border :0px none rgb(48, 49, 65);
                box-sizing :border-box;
                display :block;
                height :1px;
                margin :0px;
                overflow-clip-margin :0px;
                overflow-x :clip;
                overflow-y :clip;
                padding-block :0px;
                padding-inline :0px;
                padding :0px;
                position :absolute;
                top:0px;
                visibility :visible;
                display: none;
                width :300px;
                `,
                "id":"form_group",
                "type":"file",
                "accept":".gif,.jpg,.jpeg,.png",
            }
        )
        setElementAttribute(section2FileUploaderBtnLable,
            {
                "style":
                `
                box-sizing :border-box;
                color :rgb(48, 49, 65);
                column-gap: 8px;
                cursor :pointer;
                display :flex;
                height :48px;
                margin:0px;
                padding:0px;
                row-gap :8px;
                visibility :visible;
                `,
                "for":"form_group"
            }
        )
        setElementAttribute(lableSect1Container ,
            {
                "style":
                `
                align-items: center;
                background-color :rgb(255, 255, 255);
                border-radius:4px;
                border: 0.8px solid rgb(145, 148, 172);
                box-sizing :border-box;
                cursor :pointer;
                display :flex;
                flex-basis :0%;
                flex-grow :1;
                flex-shrink :1;
                height :48px;
                line-height :22.4px;
                margin:0px;
                min-width :442.362px
;
                padding :0px 16px ;
                visibility :visible;
                `
            }
        )
        setElementAttribute(lableSect2Container,
            {
                "style":
                `
                align-items :center;
                background-color: rgba(0, 0, 0, 0);
                border-radius :4px;
                border :0.8px solid rgb(109, 40, 210);
                box-sizing :border-box;
                cursor :pointer;
                display: flex;
                height :48px;
                justify-content :center;
                margin :0px;
                max-width :100%;
                min-width :80px;
                padding :0px 12px;
                position :relative;
                text-wrap-mode :nowrap;
                user-select :none;
                vertical-align: bottom;
                visibility :visible;
                white-space-collapse :collapse;
                `
            }
        )

        setElementAttribute(lableSect1Border,
            {
                "style":
                `
                box-sizing :border-box;
                color :rgb(48, 49, 65);
                cursor :pointer;
                display :block;
                font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :16px;
                font-weight :bold;
                line-height :22.4px;
                margin :0px;
                overflow-x :hidden;
                overflow-y :hidden;
                padding :0px;
                text-overflow :ellipsis;
                text-size-adjust :100%;
                text-wrap-mode :nowrap;
                visibility :visible;
                white-space-collapse :collapse;
                `
            }
        )
        setElementAttribute(lableSect2Border,
            {
                "style":
                `
                box-sizing :border-box;
                color :rgb(109, 40, 210);
                cursor :pointer;
                display :block;
                font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :16px;
                font-weight :bold;
                line-height :22.4px;
                margin :0px;
                overflow-x :hidden;
                overflow-y :hidden;
                padding :0px;
                text-overflow :ellipsis;
                text-size-adjust :100%;
                text-wrap-mode :nowrap;
                visibility :visible;
                white-space-collapse :collapse;
                `
            }
        )

        //style last lable 
        setElementAttribute(section2buttonBorderLable,
            {
                "style":
                `
                align-items :center;
                box-sizing :border-box;
                clip :rect(1px, 1px, 40px, 40px);
                color :rgb(48, 49, 65);
                cursor :default;
                display :flex;
                font-family :"Udemy Sans", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :14px;
                font-weight :700;
                height :28px;
                letter-spacing :normal;
                line-height: 16.8px;
                margin :0px;
                min-height :28px;
                overflow-x :hidden;
                overflow-y: hidden;
                padding :0px 0px 8px 0px;
                position :absolute;
                top:0px;
                text-size-adjust :100%;
                visibility :visible;
                width :300px;
                `,
                "for":"form-group"
            }
        )

        //save button creation
        var section2SumbitButton =creatElement_("button");

        var section2SumbitTextContainer =creatElement_("span");
        var section2SumbitTextNode = createTextNode_("Save")

        //append
        section2FormFooter.appendChild(section2SumbitButton);
        section2SumbitButton.appendChild(section2SumbitTextContainer);
        section2SumbitTextContainer.appendChild(section2SumbitTextNode);

        //style
        setElementAttribute(section2FormFooter,
            {
                "style":
                `
                box-sizing :border-box;
                display :block;
                margin :32px 0px 0px 0px ;
                padding :0px;
                visibility :visible;
                `
            }
        )

        setElementAttribute(section2SumbitButton,
            {
                "style":
                `
                align-items: center;
                appearance :aut;
                background-color : rgb(165, 27, 228);
                border-radius :4px;
                border :0px none  rgb(255, 255, 255);
                box-sizing :border-box;
                cursor  :default ;
                display :inline-flex ;
                height :40px;
                justify-content: center;
                margin:0px;
                max-width :100%;
                min-width :80px;
                // opacity 0.5
                padding-block :0px;
                padding-inline :12px;
                padding :0px 12px ;
                position: relative;
                vertical-align: bottom;
                visibility :visible;
                white-space-collapse :collapse;
                `,
                "type":"submit"
            }
        )
        setElementAttribute(section2SumbitTextContainer,
            {
                "style":
                `
                box-sizing: border-box;
                color :rgb(255, 255, 255);
                cursor :allowed;
                font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :14px;
                font-size-adjust :none;
                font-stretch :100%;
                font-style :normal;
                font-variant :normal;
                font-weight :700;
                letter-spacing :normal;
                line-height: 16.8px;
                margin :0px;
                overflow-x :hidden;
                overflow-y :hidden;
                padding :0px;
                text-align :center;
                text-indent :0px;
                text-overflow: ellipsis;
                text-shadow :none;
                text-size-adjust :100%;
                text-wrap-mode :nowrap;
                visibility :visible;
                white-space-collapse: collapse;
                word-spacing :0px;
                `
            }
        )
        //############# Save Event ##############
        section2SumbitButton.onclick =function(eve)
        {
            eve.preventDefault();
            
            let img =section2FileUploaderBtn.value ;
            localStorage.setItem("instructorImage",img);
            setElementAttribute(section2Image ,{"src":img})
            //to store data at local storage
            // localStorage.setItem("userData", JSON.stringify(instrcturInfo));
            //to retrive it 
            //const storedUser = JSON.parse(localStorage.getItem("userData"));
        }
    }  
}

navButton[2].onclick = function (eve) {
    counter[2]++;
    counter[0] = 0;
    counter[1] = 0;
    if (counter[2] == 1) {
        eve.preventDefault()
        section[0].remove();
        section[1].remove();
        section[2] = creatElement_("div");
        tabModuleContainer.appendChild(section[2]);
        console.log(tabModuleContainer);
        //creation
        let section3FormContainer =creatElement_("div");
        let section3Form=creatElement_("form");

        let section3FormFieldset =creatElement_("fieldset");
        let section3FormBtnContainer =creatElement_("div");
        let section3FormFooter =creatElement_("div");

        //button
        let section3SumbitButton =creatElement_("button");
        let section3SumbitTextContainer =creatElement_("span");
        let section3SumbitTextNode = createTextNode_("Save")

        //append buuton
        section3FormBtnContainer.appendChild(section3SumbitButton);
        section3SumbitButton.appendChild(section3SumbitTextContainer);
        section3SumbitTextContainer.appendChild(section3SumbitTextNode);
        //append
        section[2].appendChild(section3FormContainer);
        section3FormContainer.appendChild(section3Form);
        section3Form.appendChild(section3FormFieldset);
        section3Form.appendChild(section3FormBtnContainer);
        section3Form.appendChild(section3FormFooter);

        //fieldset
        let section3FieldsetLabel =[];
        let section3FieldsetLabelText =[];

        let section3FieldsetInput =[];

        let section3FieldsetLabelTextNode =["Show your profile to logged-in user","Show courses you\'re taking on your profile page"]

        let section3FieldsetLabelForContent=["checkbox1","checkbox2"];
        let section3FieldsetInputId =["checkbox1","checkbox2"];
        let section3FieldsetInputName =["profileVisible","courseListVisible"];
        let section3FieldsetInputValue =["1","2"];

        let section3FieldsetInputType ="checkbox";

        for(let i =0 ; i<2 ; i++)
        {
            section3FieldsetLabel[i]=creatElement_("label");
            section3FieldsetInput[i]=creatElement_("input");
            section3FieldsetLabelText[i] = createTextNode_(section3FieldsetLabelTextNode[i]);

            section3FieldsetLabel[i].appendChild( section3FieldsetInput[i]);
            section3FieldsetLabel[i].appendChild(section3FieldsetLabelText[i])
            section3FormFieldset.appendChild(section3FieldsetLabel[i]);
            setElementAttribute( section3FieldsetLabel[i],
                {
                    "style":
                        `
                        box-sizing :border-box;
                        color :rgb(48, 49, 65);
                        cursor :pointer;
                        display :flex;
                        font-family :"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                        font-size :14px;
                        font-weight: bold;
                        line-height :19.6px;
                        margin :0px;
                        max-width :600px ;
                        min-width :180px ;
                        padding :8px 0px ;
                        text-size-adjust :100%;
                        user-select :none;
                        visibility :visible;
                        `,
                    "for":section3FieldsetLabelForContent[i]
                })
            setElementAttribute(section3FieldsetInput[i],
                {
                    "style":
                        `
                        box-sizing :border-box;
                        appearance :auto;
                        cursor :default;
                        display :inline-block;
                        margin :3px;
                        padding :0px;
                        position : relative;
                        top :0px;
                        visibility :visible;
                        height :15px;
                        width :15px;
                        `,
                    "id":section3FieldsetInputId[i],
                    "type":section3FieldsetInputType,
                    "name" :section3FieldsetInputName[i],
                    "value" :section3FieldsetInputValue[i]
                }
            )
        }

        //style section 3 form
        setElementAttribute(section[2],
            {
                "style":
                `
                box-sizing :border-box;
                display :block;
                margin :0px;
                max-height :none;
                max-width :none;
                overflow-x :visible;
                overflow-y :visible;
                padding :16px 0px 0px 0px ;
                position :relative;
                visibility : visible;
                `
            })
        setElementAttribute(section3FormContainer,
            {
                "style":
                `
                box-sizing :border-box ;
                display :block ;
                margin :0px;
                max-width :600px;
                padding :0px;

                visibility :visible;
                `
            })
        setElementAttribute(section3Form,
            {
                "style":
                `
                box-sizing :border-box;
                display :block;
                margin :0px;
                padding:0px;
                visibility :visible;   
                `
            })
        setElementAttribute(section3FormFieldset,
            {
            "style":
            `
            border :0px none rgb(48, 49, 65);
            box-sizing: border-box;
            display :block;
            margin-inline:0px;
            margin :0px 3px;
            max-width :600px;
            min-inline-size :180px;
            min-width :180px;
            padding-block :0px;
            padding-inline :0px;
            padding ;0px;
            visibility :visible;
            `
            })
        
        //style save button section 3
         setElementAttribute(section3FormBtnContainer,
            {
                "style":
                `
                box-sizing :border-box;
                display :block;
                margin :32px 0px 0px 0px ;
                padding :0px;
                visibility :visible;
                `
            }
        )

        setElementAttribute(section3SumbitButton,
            {
                "style":
                `
                align-items: center;
                appearance :aut;
                background-color : rgb(109, 40, 210);
                border-radius :4px;
                border :0px none  rgb(255, 255, 255);
                box-sizing :border-box;
                cursor  :default ;
                display :inline-flex ;
                height :40px;
                justify-content: center;
                margin:0px;
                max-width :100%;
                min-width :80px;
                // opacity 0.5
                padding-block :0px;
                padding-inline :12px;
                padding :0px 12px ;
                position: relative;
                vertical-align: bottom;
                visibility :visible;
                white-space-collapse :collapse;
                `,
                "type":"submit"
            }
        )
        setElementAttribute(section3SumbitTextContainer,
            {
                "style":
                `
                box-sizing: border-box;
                color :rgb(255, 255, 255);
                cursor :allowed;
                font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size :14px;
                font-size-adjust :none;
                font-stretch :100%;
                font-style :normal;
                font-variant :normal;
                font-weight :700;
                letter-spacing :normal;
                line-height: 16.8px;
                margin :0px;
                overflow-x :hidden;
                overflow-y :hidden;
                padding :0px;
                text-align :center;
                text-indent :0px;
                text-overflow: ellipsis;
                text-shadow :none;
                text-size-adjust :100%;
                text-wrap-mode :nowrap;
                visibility :visible;
                white-space-collapse: collapse;
                word-spacing :0px;
                `
            }
        )

        section3SumbitButton.onclick =function(eve)
        {
            eve.preventDefault();
            
            if(section3FieldsetInput[0].checked && section3FieldsetInput[1].checked )
            {
                console.log(true)
            }
            else if(section3FieldsetInput[0].checked)
            {
                console.log(true)
            }
            else if(section3FieldsetInput[1].checked)
            {
                console.log(true)
            }
            else
            {
                console.log(false)
            }
            //to store data at local storage
            // localStorage.setItem("userData", JSON.stringify(instrcturInfo));
            //to retrive it 
            //const storedUser = JSON.parse(localStorage.getItem("userData"));
        }
    }

}

//profile page