// for
for (let i = 0; i < 5; i++) {
    console.log(1+i);
    console.log();
}
// while 
let i = 1;
while (i<=5) {
    console.log(i);
    i++;
}
// do-while
let j=1;
do {
    console.log(j);
    j++;
} while (j<=5);
// for-of
let str = "RishavRajSah"; 
for (const i of str) {
    console.log(i);
}
// for-in loop
let student={
    name:"Rishav",
    age:20,
    cgpa:8.95,
    isPass:true
};
// this will print keys of object not the value
for (const key in student) {
    console.log(key);
}
// this will print values of object 
for (const key in student) {
    console.log(student[key]);
}