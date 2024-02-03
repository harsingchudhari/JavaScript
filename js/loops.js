// FOR LOOPS

// for (let cound=1; cound<=5; cound++){
//     console.log("hello harsh");
// }

// for(let i=1; i<=1000; i++){
//     console.log("harsh chaudhari")
// }
// let sum= 0;
// for(let i=1; i<=5; i++){
//     sum =sum +i;
// }
// console.log("sum =", sum);

// Infinite Loop :A Loop that never ends
// while loop
// syntax

// while(condition){
//     // do some work
// }

// let i = 1;
// while (i<=5){
//     console.log(i);
//     i++;
// }

// do -while loops
 
// do {
//     //do some work
// } while(condition);

// let i= 1;
// do{
//     console.log("i=", i);
//     i++;
// } while(i<=10);


// for-of-loops

// for(let val of strVar){
//     //do some work
// }

// let str = "Red and white";

// for(let i of str ){
//     console.log(i);
// }


// let str ="javascript";

// let size =0
// for(let val of str){
//     console.log(" val=", val);
//     size++;
// }
// console.log("String size =", size);

// //for in loop

// let student={
//     name:"harsh",
//     age:24,
//     cgpa:8.7,
//     isPass:true,
// };
// for (let key in student){
//     console.log("key=", key , "value=", student[key]);
// }

1,5,2,10,3,15,4,20,5..

i=1;
j=5;

while(i<=10) {
    console.log(i,j)
    i++,
    j=j+5
}


// let's Practice
// prin all even numaber from 0 to 100,

for(let num =0; num <=100; num++){
    if(num%2 === 0)
    console.log("num=", num);
}

// let's Practice

//Practice Q2
let gameNum = 25;

 let userNum =prompt("Guess the game number:");
while(userNum !== gameNum){
    userNum =prompt("you are not :");

}
console.log("Congratulation, you entered the right number");



