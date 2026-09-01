const user = {
    id: 'sdfskfjldskfjalkjdl',
    name: 'Kim',
    type: 'Super admin',
    favcol: 'limegreen'
};

// Detta får samma resultat som när vi destructar nedan
// const name = user.name;
// const type = user.type;

const {name, type} = user;
console.log(name, type);

// Destructar parametern direkt
function displayUser({name, favcol}){
    console.log('displaying: ', name, favcol);
}

displayUser(user);


const arr = [1, 2, 3, 4, 5];
// const d = arr[3];
const [a, b, c, d] = arr;

console.log(a, b, c, d);

// Object shorthand properties
const make = ' Saab';
const model = '95';
const year = '2007';

const car = {make, model, year};
console.log(car)
