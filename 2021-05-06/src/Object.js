const test = [ 1, 2, 3 ];
const test1 = [ 'A', true, 3 ];
const test2 = [ 'A', true, 3 , {x: 'A', y: 'B'} ];
const test3 = [ {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : () => {
      return firstName + " " + lastName;
    }
  }
]
console.log(test);
console.log(test1);
console.log(test2);
console.log(test3.fullName);
