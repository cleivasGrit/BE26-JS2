// Primitive (String, boolean, number) and non primitive (object inklusive arrayer)

// Skillnad på hur de hanteras i minnet

// Primitiva värden
// Variabeln = allokerat minne. Det minnet innehåller värdet själv
let primitive = 100;
let primitiveCopy = primitive;

primitive = 999;
console.log(primitive, primitiveCopy); //100


// Icke primitive 
// Variabel = allokerat. Det minnet innehåller en pekare till värdet

const obj = {a:1, b: 2};
const objCopy = obj;
obj.a = 999;
console.log(obj, objCopy);


// Spread
const numbers = [3, 42, 4, 2, 57, 34, 87, 23];
console.log(numbers);
console.log(...numbers)
console.log(3, 42, 4, 2, 57, 34, 87, 23 )

console.log( Math.max(...numbers) )

// Sammanfoga objekt
const obj1 = {
  p1: 'från objekt 1'
}
const obj2 = {
  p2: 'från objekt 2',
  p3: 'också från objekt 2'
}

const obj3 = {...obj1, ...obj2};
console.log(obj3)

// Klona med spread
const objSpreadCopy = {...obj};
obj.b = 999;
console.log(objSpreadCopy, obj)