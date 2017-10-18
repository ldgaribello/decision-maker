var nameVar = 'Leon';
var nameVar = 'Dario';
console.log('nameVar', nameVar);

let nameLet = 'Juan';
nameLet = 'Esteban';
console.log('nameLet', nameLet);

const nameConst = 'Jose';
console.log('nameConst', nameConst);

// Block scope (const, let)
const fullname = 'Leon Garibello';
let firstName;

if(fullname){
    firstName = fullname.split(' ')[0];
    console.log('Firstname: ', firstName);
}
console.log(firstName);