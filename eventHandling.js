var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");
// console.log(menuTrigger, menu);


function showMenu(ele){
    ele.style.display = "block";
    console.log("It entered here");
}

function hideMenu(ele){
    ele.style.display = "none";
}

function toggleMenu(ele){
    var disp = ele.style.display;
    if (disp === "none" || disp === ""){
        ele.style.display = "block";
    }
    else if (disp === "block"){
        ele.style.display = "none";
    }
}

// menuButton.addEventListener("click", () => showMenu(menu));
// menu.addEventListener("mouseleave", () => hideMenu(menu));

// menuTrigger.addEventListener("mouseenter", showMenu);

menuButton.addEventListener("click", () => toggleMenu(menu));

var text = document.getElementById("text");
// console.log(`textBefore: ${text}`)

function validateInput(){
    console.log("Key Pressed");
}
// function downKey(){

// }
// function upKey(){    
//     console.log("Charer count:" + document.getElementById("text").value.length, text);
// }

text.addEventListener("keydown", (event) => console.log(`Key Down: ${event.key}`));
text.addEventListener("keyup", (event) => console.log(`key Released: ${event.key}`));
//text.addEventListener("keyup", () => console.log("Key Up"));

var checkBox = document.getElementById("check");

// checkBox.addEventListener("click", (event) => {event.preventDefault()});
checkBox.addEventListener("click", (event) => console.log(`Checkbox: ${event.target.checked}`));

function HandleSubmit(event){
    event.preventDefault();
    console.log("Form Submitted!");
    console.log(document.getElementById("select").value);
}