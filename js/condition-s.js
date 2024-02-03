// Conditional Statements

// if statements

// let age=22;
// if(age >18){
//     console.log("you can vote");
// }
// if(age >15){
//     console.log("you cannot vote"); //false
// }

// if else statements

// let num = 20;
// if(num % 4 === 0){
//     console.log("even");
// } else{
//     console.log("odd");
// }

// else if statements


let mode ="black";
if(mode === "green"){
    color="green";
}
else if(mode == "white"){
    color="white";
}

else if(mode == "black"){
    color="black";
}
else{
    color ="yellow";
}
console.log(color);

let num = prompt("enter a number:");

if(num % 5 === 0) {
    console.log(num,"is a multiple of 5");
}
else{
    console.log(num, "is not a multiple of 5");
}

// Practice -2

let marks= prompt("Enter your marks (0-100):");
let grade;
if(marks >=90 && marks <=100){
    grade="A";
}
else if(marks >=70 && marks <=89){
    grade="B";
}
else if(marks >=50 && marks <=69){
    grade="c";
}
else if(marks >=35 && marks <=49){
    grade="d";
}
else if(marks >=0 && marks <=34){
    grade="F"
}

console.log("your grade:", grade)