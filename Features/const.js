/* scope wise const variable follow same scope rules as let */
const x;
/*we can not omit the initalize */
// node const.js
const x = 1;
x =2; 
/* error */
// node const.js

 const john ={
     name : 'ram',
     age : 32
 }

john ={
    name : 'rearrange',
    age : 32
}

/* we can not do  */
// node const.js



const john ={
    name : 'ram',
    age : 32
}

john.name = 'rearrange'
console.log(john);
/* Object is still mutable  */
// node const.js


const numbers = [1,2,3,4]
numbers.push (5);
console.log(numbers);
/* adding new items   */
// node const.js