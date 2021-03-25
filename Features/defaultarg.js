function greet (message, name ){
    console.log(`${message} ${name}!`); 
}

greet('Hello', 'World');
greet('Hello');

/* allowed in JS (compile time error in other language, but javascript in run time )*/

/* all default value as ****,  *** are the special value */

function greet (message = 'Hello', name = 'World' ){
    console.log(`${message} ${name}!`); 
}


greet('Hello', 'World');
greet('Hello');
greet('Good Morning', 'John');
greet('Good Morning');
greet(undefined, 'John');
/* Default Argument  */