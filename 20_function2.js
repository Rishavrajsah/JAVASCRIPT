function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(3,4);
// console.log(result);   // undefine : because values are not return 

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


// function loginUserMessage(username){
//     return `${username} just login`
// }
// console.log(loginUserMessage("rishav")); //rishav just login
// console.log(loginUserMessage()); //undefined just login


// function loginUserMessage(username){
//     // if(username === undefined){
//     //     console.log("PLease enter a username");
//     //     return;
//     // }
//     //or
//     if(!username){
//         console.log("PLease enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage("rishav"))
// console.log(loginUserMessage())

// give default values

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("hitesh"))