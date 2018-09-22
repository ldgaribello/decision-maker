class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
    getGreeting() {
        //return 'Hi, I\'m ' + this.name + '!';
        return `Hi, I'm ${this.name}!`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    getDescription(){
         let description = super.getDescription();

         if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
         }
         return description;
    }

    hasMajor(){
         return !!this.major;
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }

    getGreeting(){ 
        let greeting = super.getGreeting();

        if(this.location) { 
            greeting += ` I'm visiting from ${this.location }`;
        }
        return greeting;
    } 
}

const me = new Student('Leon Garibello', 27, 'Software Engineer');
console.log(me.getDescription());

const other = new Student('Juan Garibello', 22);
console.log(other.getDescription());

const traveler1 = new Traveler('Pedro Perez', 20, 'Medellin');
console.log(traveler1.getGreeting());

const traveler2 = new Traveler('Fulano Tal', 30);
console.log(traveler2.getGreeting());
