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
    // To Display the Option that was selected in the dropdown menu.
    var submitedValue = document.getElementById("select").value;
    console.log(document.querySelector(`option[value="${submitedValue}"]`).innerText);
    // console.log(document.getElementById("select").innerText);
}

var testButton = document.querySelector("#testButton");
testButton.addEventListener("click", (event) => testButtonClick(event), {once: true,passive: false});
function testButtonClick(event){
    event.preventDefault();
    console.log("Test Button Clicked! - Limited to once");
    console.log(document.getElementById("select").value);
}
testButton.addEventListener("click", ()=> console.log("Clicked Me!"));

var category = document.getElementById("category-filter");
var productList = document.querySelectorAll(".product");
category.addEventListener("change", (event) => {
    let selectedCategory = event.target.value;
    productList.forEach((product) => {
        let productName = product.getAttribute("data-category");
        if (selectedCategory === "all" || productName === selectedCategory){
            product.style.display = "block";
        } else{
            product.style.display = "none";
        }
    })
});

// Event Bubbling in DOM 
var body = document.getElementsByTagName("body")[0];
body.addEventListener("click", (event) => console.log("body Clicked"));