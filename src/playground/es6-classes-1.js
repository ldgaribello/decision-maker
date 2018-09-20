class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
    getGreeting() {
        //return 'Hi, I\'m ' + this.name + '!';
        return `Hi, I'm ${this.name}!`;
    }
}

const me = new Person('Leon Garibello', 26);
console.log(me.getDescription());