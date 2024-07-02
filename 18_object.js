// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
   // mySym: "mykey1",
    [mySym]: "mykey1", // to use this as symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// //console.log(typeof JsUser.mySym) // this will give string and optput mykey1
// console.log(JsUser[mySym])

// change values
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(JsUser.greeting); // undefine
console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());