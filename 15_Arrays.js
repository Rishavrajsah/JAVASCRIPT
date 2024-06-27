// **avaScript array-copy operations create shallow copies.  check mdn

let arr = [5,4,3,2,1];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);
// console.log(typeof arr);   // object 
let arr2 =["rishav",27,"raj"]; // not preferred to store different data types in single array 
// loops
let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//      console.log("at i =",i,"value =",arr[i]); 
//      sum += arr[i];
// }
//avg of all numbers
//console.log(sum/arr.length);

// Array methods
let foodItems = ["apple","litchi","mango"];
//push 
console.log(foodItems);
foodItems.push("papaya");
console.log(foodItems);
console.log(foodItems.length);
foodItems.push("papaya","tamato","potato");
console.log(foodItems);
console.log(foodItems.length);
// pop
foodItems.pop(); // last iteam will remove - potato
console.log(foodItems);
// toString
console.log(foodItems.toString());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100,200,300]

