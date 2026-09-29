function doSomething(par: number| string): string | number {

    // det går endast att använda toUpperCase om par är en string, därför måste vi narrow the type down först
    if(typeof par === 'string') return par.toUpperCase();
    else return par * 1000;
}

console.log( doSomething(300) );
console.log( doSomething('test') );


const btn = document.querySelector('button');
console.log(btn);

// Truthiness narrowing, så att vi vet att btn inte är null
if(btn){
    // TypeScript har ett Interface för HTMLButtonElement där test inte finns som en egenskap
    // btn.test;
    btn.addEventListener('click', ()=>{
        console.log('klickat')
    })
}