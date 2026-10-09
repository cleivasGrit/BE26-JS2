const square = x => x*x;
const double = x => x+x;
const half = x => x*0.5;

const map = (arr, func) => {
    const results = [];
    console.log('func = ', func);
    console.log('arr = ', arr);


    for(const el of arr){
        console.log(el, func(el))
        results.push( func(el) );
        console.log('results = ', results)
    }
    return results;
}


const numbers = [1, 2, 3, 4, 5];

console.log('Map med square')
console.log( map(numbers, square) );
//[1, 4, 9, 16, 25]
console.log('Map med double')
console.log( map(numbers, double) );
//[2, 4, 6, 8, 10]

console.log( map(numbers, half) );


// Pure
console.log('--------PURE-PRINCIPEN--------')
// const isInStock = x => {
    //     const stock = ['pen', 'pencil', 'notepad', 'highlighter'];
    //     for(const item of stock){
        //         if(x === item) return true;
//     }
//     return false;
// };

let stock = ['pen', 'pencil', 'notepad', 'highlighter'];


const isInStock = x => {

    for(const item of stock){
        if(x === item) return true;
    }
    return false;
};

console.log(isInStock('pen'))
stock = ['pencil']
console.log(isInStock('pen'))

console.log(isInStock('rubber'))


console.log('--------UNDVIK SIDOEFFEKTER--------')
//Inga sidoeffekter - remove returnerar en ny array som innehåller ändringarna
const fruits = ['banana', 'orange', 'apple', 'banana', 'pear'];

// const remove = (word, array)=> {
//     const arrayClone = [...array];


//     for(let i =0; i<arrayClone.length; i++){
//         if(word === arrayClone[i]) arrayClone.splice(i, 1);
//     }
//     return arrayClone;
// }


// const newFruits = remove('banana', fruits)
// console.log('Fruits: ', fruits, 'NewFruits: ', newFruits)

//Skapar en sidoeffekt eftersom arrayen fruits ändras
// const fruits = ['banana', 'orange', 'apple', 'banana', 'pear'];


const remove = (word, array)=> {

    for(let i =0; i<array.length; i++){
        if(word === array[i]) array.splice(i, 1);
    }
	return array;
}

// const remove = (word)=> {

//     for(let i =0; i<fruits.length; i++){
//         if(word === fruits[i]) fruits.splice(i, 1);
//     }
// 	return fruits;
// }


const newFruits = remove('banana', fruits)
console.log('Fruits: ', fruits, 'NewFruits: ', newFruits)


