console. log("hello");
console. log("hello");
console. log("hello");

{
    let a =5;
    console.log(a);
}

const accountId = 276;
let accouuntEmail = "rishav@gmail.com";
var accountPass = 123;
accountCity = "pune";
// console.log(accountCity);

console.table([accountId,accouuntEmail,accountPass,accountCity]);
// to check data type of variable 
// only work in condole in browser
console.log(typeof accouuntEmail);
typeof accountPass;


// all 7 primitive datatypes
let name = "rishav"; // string
let roll = 1; // number 
let isFollow = true; // boolean
let a;    // undefined
let b = null; // object 
let c = BigInt(123); // bigint 
let d = Symbol("hello"); // symbol


// non - primitive data types 
// object
const student={
    fullName : "rishav",
    age:20,
    CGPA : 8.95,
    isPass:true
};
console.log(student);
console.log(student["CGPA"]);
console.log(student.fullName);
student["age"]=student["age"]+1;
console.log(student.age);
student.fullName = "m";
console.log(student.fullName);
