// Interface 
// interface User{
//     name:string,
//     logIn: Function,
//     age: number,
//     isOld?: boolean
// };

// I detta fall är det ingen skillnad att använda type eller interface
type User = {
    name:string,
    logIn: Function,
    age: number,
    isOld?: boolean   
}

const user: User = {
    name: 'Kim',
    age: 56,
    logIn(){
        console.log('loging in');
    }
};
console.log(user)

type Position = [number, number];

// Utbytbara typer i interface
interface Character<type>{
    name: string,
    position: Position,
    strength: type
}

const felix: Character<number> = {
    name: 'Sören',
    position: [300, 798],
    strength: 78
}
console.log(felix)

const oskar:Character<string> = {
    name: "Ragnar",
    position: [0, 0],
    strength: 'unlimited'
}
console.log(oskar)

// Här gör vi samma men med type alias 
type Test<changeable> = {
    prop: changeable
}

const test: Test<number> = {
    prop: 324
}
console.log(test);


