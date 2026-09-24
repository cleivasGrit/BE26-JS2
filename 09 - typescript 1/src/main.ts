let firstName = 'Clara';
// firstName = 10;

console.log(firstName)


let age:number;
// age = 'hej hej';
age = 12;

console.log(age);

let numbers: number[];
numbers = [2, 3, 5];
numbers.push(3);
// numbers.push('string');

// Funktioner

function logName(first: string, last:string): void{
    console.log(first, last);
}

logName('Clara', 'Leivas');
// logName(212)

const multiply = (x:number, y = 10): number =>{
    return x*y;
}

console.log(multiply(3))
console.log(multiply(30, 4))
// console.log(multiply(30, 4, 4))
// console.log(multiply(30, '4'))

const calcArray = (arr:number[], callback: Function)=>{
    const result:number[] = [];

    for(const num of arr){
        result.push(callback(num));
    }
    return result;
}

// const double = (x:string) => x+x;
const double = (x:number) => x+x;
const half = (x:number) => x/2;

// Exakt samma som arrowfunktionen
// function double(x:number){
//     return x*2;
// }

console.log(calcArray([1, 2, 3, 4, 5], double));
console.log(calcArray([1, 2, 3, 4, 5], half));

// Union types
let mynt: 'klave'|'krona';
// mynt = 'test';
// mynt = 889;
mynt = 'klave';

let value: string|number;
value = 33;
value = '214';
// value = true;

let test: number|'1'|'2'|'3';
test = 89;
test = '1';
// test = 'npgot annat';


// Type aliases
type Coin = 'heads'|'tails';
function flipCoin(): Coin{
    // const random = Math.random();
    // if(random < 0.5) return 'heads';
    // else return 'tails';
    return Math.random()<0.5 ? 'heads':'tails';
}

let result: Coin;
result = flipCoin();
console.log(result);

// Ternary expression
type Feeling = 'cold'|'hot';
let feeling: Feeling;
const temp = 3;

// if(temp < 20) feeling = 'cold';
// else feeling = 'hot';

feeling = (temp < 20) ? 'cold': 'hot';
console.log(feeling)

// Type aliases & arrayer
type Vector = [number, number, number?];

// x, y, z
const position:Vector = [4, 2.66, 399];
console.log(...position);
console.log(position[0], position[1], position[2])

function moveLeft(pos:Vector, xDif: number): Vector {
    // Vi använder spread här för att klona arrayen
    const newPos: Vector = [...pos];
    newPos[0] -= xDif;

    return newPos;
}

const newPos = moveLeft(position, 10);
console.log(newPos)


const nyVec: Vector = [1, 2];

const coinArr: Coin[] = ['heads', 'tails', 'heads'];

type CoinArray = [Coin, Coin, Coin];


// Objekt

type User = {
    id: number,
    name: string,
    isAdmin: boolean,
    position: Vector
}

const user: User = {
    id: 345345,
    name: 'karl',
    isAdmin: false,
    position: [3, 2, 34]
}

console.log(user);