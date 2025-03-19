//ints
let x = 5;
let y = 7;
let z = x + y;
console.log(z);

//strings
let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function loop(l) {
    l.forEach(item => { 
        if (item === "Banana") {
            alert("Banana found in the array");
        }
    });
}

// loop(L1);
// loop(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    if (h < 5) {
        message = "Good night my name is André Miller";
    } else if (h < 12) {
        message = "Good morning, my name is André Miller";
    } else if (h < 18) {
        message = "Good afternoon, my name is André Miller";
    } else if (h < 20) {
        message = "Good evening, my name is André Miller";
    } else {
        message = "Good night, my name is André Miller";
    }
    let E = document.getElementById("greeting");
    E.innerHTML = message;
}

window.onLoad = greetingFunc;

greetingFunc();

function year() {
    let d = new Date();
    let y = d.getFullYear();
    let E = document.getElementById("copyYear").innerHTML += y;
}

window.onLoad = year();

function showList() {
    let list = document.getElementById("funList");
    let button = document.getElementById("showButton");
    
    if (list.style.display!="block") {
        list.style.display = "block";
    }
    else {
        list.style.display = "none";
    }
}

$(document).ready(function(){
    $("#readMore").click(function(){
      $("#readMore").hide();
      $("#short").hide();
      $("#readLess").show();
      $("#long").show();
    }); 
    $("#readLess").click(function(){
      $("#readLess").hide();
      $("#long").hide();
      $("#readMore").show();
      $("#short").show();
    });
  });

function validate(event) {
    let isValid = true;

    function checkField(inputId, errorId, message) {
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);

        if (!input.value.trim()) {  // Check if empty
            error.textContent = message;
            input.classList.add("input-error");
            isValid = false;
        } else {
            error.textContent = "";
            input.classList.remove("input-error");
        }
    }

    function checkEmail(inputId, errorId) {
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email regex

        if (!input.value.trim()) {
            error.textContent = "Please enter an email.";
            input.classList.add("input-error");
            isValid = false;
        } else if (!emailPattern.test(input.value)) {  // Check if valid email
            error.textContent = "Please enter a valid email (e.g., name@example.com).";
            input.classList.add("input-error");
            isValid = false;
        } else {
            error.textContent = "";
            input.classList.remove("input-error");
        }
    }

    // Validate fields
    checkField("name", "nameError", "Please enter your name.");
    checkEmail("email", "emailError");  // Special email validation
    checkField("comment", "commentError", "Please enter a comment.");

    if (!isValid) {
        event.preventDefault();  // Stop the form from submitting if invalid
    }
}