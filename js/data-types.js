
// primitive data types 

let age = 35 ;
console .log(age);

let price = 200;

let fullName="harsh chaudhari";
console.log(fullName);

isFollow = true;

// let x;

// let y ="null";

let  x = BigInt("1234");

let  y = Symbol("123");

// Noprimitive data type key: value store

// multipule value store object

const student = {
    fullName: "Harsh chaudhari", 
    age:20,
    cgpa:9.2,
    isPass:true,
};
// update age

student["age"] = student["age"] +1;
student["fullName"] = "Piyush chaudhari";
console.log(fullName);
console.log(student);
console.log(student["age"]);

// object are key this fullName and age cgpa ispass it are key

const product = {
    fullName:'Ball Pen',
    rating:4,
    offer:10,
    prices:270,

}

console .log(product);

const profile ={
    username:'harsh',
    isFollow:false,
    followers:550,
    followeing:1200,
}
console.log(profile);
console .log(typeof profile["username"]);