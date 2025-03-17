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

loop(L1);
loop(L2);

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