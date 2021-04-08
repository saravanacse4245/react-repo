function sum1(x, y){
    return x + y;
}

const sum2 = function(x, y){
    return x + y;
};

// console.log(sum1(12,13));
// console.log(sum2(12,13));

const sum3 = (x, y) => {
    return x + y;
};

const sum4 = (x, y) =>  x + y;
// console.log(sum4(12,13));

const sum5 = x =>  x + x;
console.log(sum5(12));

// const sum4 = (x, y) => x + y;
// console.log(sum4(12,13));

// const sum5 = x => x * y;
// console.log(sum5(12));