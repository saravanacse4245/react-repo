/* Template String */

const message ='Good Morning', name ='John!'
console.log(message + ' ' + name + '!'); 
// node stringopt.js

console.log(`${message} ${name}!`); 
/* Back tick */
// node stringopt.js

console.log(`${1+2} ${name}!`); 

/* expression */
// node stringopt.js

console.log(`${test()} ${name}!`); 

function test(){
    return 5;
}

/* function */
// node stringopt.js



/* These Strings concordinate the api areas */