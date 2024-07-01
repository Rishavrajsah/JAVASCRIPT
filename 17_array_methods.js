//map 
let arr =[1,2,3,4,5,6];
let newArr = arr.map(val =>{
    // console.log(val**2);
    return val**2;
});
console.log(newArr);
// filter 
let newArr2 = arr.filter((val)=>{
    return val%2===0;
});
console.log(newArr2);

//Reduce
let output = arr.reduce((pre,cur)=>{
    return pre+cur;
});
console.log(output);
// maximim number in an array
let maxnum = arr.reduce((pre,cur)=>{
    return pre>cur ? pre :cur;
});
console.log(maxnum);
// minimum number in an array
let minnum = arr.reduce((pre,cur)=>{
    return pre<cur ? pre :cur;
});
console.log(minnum);
// factorial
let fact = arr.reduce((pre,cur)=>{
    return pre*cur;
});
console.log(fact);
