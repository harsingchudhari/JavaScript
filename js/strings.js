//Strings
// let str="red and white";
// console.log(str[8]);

//Template Literals

let specialStringn = `This is a template literal`;
console.log(typeof specialStringn);

let obj ={
    item:"pen",
    price:20,
};

let output =`the cost of ${obj.item} is ${obj.price}`;
console.log(output)
console.log(obj.item, obj.price)

//String Methods in js

//1 str.toUpperCase()-->new string
//2 str.toLowerCase()
//str.trim() //removes whitespaces

let str ="Red&white";
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);

//slice

let name ="red&white";
console.log(name.slice(2,6));

// concat methods

// let result=str.concat(name);
let result=str + (name);
console.log(result);

console.log(str.replace("Red&white","White&Red"));

// charAT-index
console.log(str.charAt(3));


// Practice qs

