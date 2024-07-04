// const tinderUser = new Object()  // this is singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

// nested object 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
} 
// console.log(regularUser.fullname.userfullname.firstname);

// merging two object 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 //const obj3 = Object.assign({}, obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } it return new object

const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 //console.log(obj3);

 //
 const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
//  console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

// destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor);
// console.log(course["courseInstructor"]);
//or
const {courseInstructor}= course;
console.log(courseInstructor);
//or
const {courseInstructor:instructor}= course;
console.log(instructor);