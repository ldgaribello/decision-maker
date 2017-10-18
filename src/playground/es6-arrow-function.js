// ES5
const square = function (x) {
    return x * x;
};
console.log(square(3));

function square2(x) {
    return x * x;
};
console.log(square2(4));

// ES6
const firstName = (y) => {
    return y.split(' ')[0];
};
console.log(firstName('Leon Garibello'));

const getFirstName = (y) => y.split(' ')[0];
console.log(getFirstName('Jose Manuel'));