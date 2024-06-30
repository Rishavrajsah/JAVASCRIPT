// creating a function
function myfunction() {
    console.log("hello world!");
}
// calling a function
myfunction();

//with parameters
function add(a,b) {
    console.log(a+b);
}
// calling a function
add(5,7);

//with parameters and return
function add2(a,b) {
    // a & b are local variable
    s=a+b;
    return s;
}
// calling a function
console.log(add2(3,3));

// Arraw Function
const sum = (a,b)=>{
    console.log(a+b);
}
sum(5,5);

const mul = (a,b)=>{
    return a*b;
}
console.log(mul(5,5));

const printHello = ()=>{
    console.log("(hello :)");
}
// count vowels

function countVowels(str1) {
    let count =0;
    for (let c =0; c<str1.length;c++) {
        if (str1.charAt(c) ==="a"||str1.charAt(c) ==="e"||str1.charAt(c) ==="i" ||str1.charAt(c) ==="o"||str1.charAt(c) ==="u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("rishav"));
// function countVowels(str1) {
//     let count =0;
//     for (const c of str1) {
//         if(c ==="a" || c ==="e"|| c  ==="i" || c ==="o"|| c ==="u") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("rishav"));


function abc() {
    console.log("hello!");
}
function myfun(abc) {
    return abc;
}
// Call myfun with the abc function as an argument
var returnedFunction = myfun(abc);

// Call the returned function
returnedFunction();  // This will log "hello!" to the console

// for each  loop
let arr = [1,2,3,4,5];
arr.forEach(element => {
    console.log(element);
});

arr.forEach(function printval(val ,index , arr) {
    console.log(val,index,arr);
});

arr.forEach((element,ind,arr)=> {
    console.log(element,ind,arr);
});
arr.forEach(i => {
    console.log(`square of number ${i} is equal to ${i*i}`);
});
let calSqr = (i => {
    console.log(`square of number ${i} is equal to ${i*i}`);
});
arr.forEach(calSqr);