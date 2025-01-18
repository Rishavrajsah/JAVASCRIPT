//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory       provide a copy
// means change
let myName ="Rishav";
let anotherName = myName;
anotherName = "Somya";
console.log(myName);
console.log(anotherName);
// here myName didnt change beacuase myName give a copy to anotherName 



// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory             give reference of an object
let userOne = {
    email:"rishav@",
    id :3211
}
let userTwo = userOne;
console.log(userOne.email);
userTwo.email = "Somy@";
console.log(userOne.email);
console.log(userTwo.email);

