// ES5 - arguments object
const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(2, 3, 'extra argument'));

// ES6 - No arguments object
const addArrow = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(addArrow(5, 5, 'extra argument (Arrow)'));

const user = {
    name: 'Leon Garibello',
    cities: ['Medellin', 'Rionegro', 'Bogota'],

    getCities: function () {
        const parent = this;

        // ES5
        this.cities.forEach(function (city) {
            console.log(parent.name + ' has lived in ' + city);
        });
    },

    // ES6
    getCitiesArrow() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    },

    // ES6
    getCitiesMap() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,

    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());