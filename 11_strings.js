let str ="rishav";
console.log(str);
console.log(str.length);

let obj ={
    iteam:"pen",
    price:20
};
console.log("the price of",obj.iteam,"is",obj.price,"rupees");
// Template Literals 
// String interpolation
let str2 = `the price of ${obj.iteam} is ${obj.price} rupees`;
console.log(str2);
// escape character
console.log("rishav\nraj");
console.log("rishav\traj");
// String methods
let fname ="rishav Raj sah";
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log(fname.toLocaleLowerCase());
console.log(fname.toLocaleUpperCase());
console.log(fname.trim());
console.log(fname.slice(1,4));
console.log(fname.slice(1));
console.log(fname.concat(str));
console.log(fname.replace("Raj",123));
let enterName = prompt("Enter your name");
let userName = `Your username will be @${enterName+enterName.length}`;
console.log(userName);