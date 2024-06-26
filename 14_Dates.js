// Dates
// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// Dates

let myDate = new Date()   
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);    // this is a object

// let myCreatedDate = new Date(2023, 0, 23) // my created date 0 refer jan month
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // year month date hour min 
// let myCreatedDate = new Date("2023-01-14") // yy-mm-dd
let myCreatedDate = new Date("01-14-2023")    // mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // time in millisecond form 1 jan 1970

// console.log(myCreatedDate.getTime()); // time in millisecond

// console.log(Math.floor(Date.now()/1000)); // millisec to second   
// date.now() gives current date

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",era                    // click crt+ space for more function
    
})
