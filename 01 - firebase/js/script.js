import { addName, getAllNames, post, patch, del } from "./firebaserequests.js";
import { displayNames } from "./display.js";


getAllNames()
    .then( displayNames)
    .catch(error => console.log(error))


// Lägg till ditt namn med en patch request
const addNameBtn = document.querySelector('button');

addNameBtn.addEventListener('click', () => {
    addName()
        .then( data => console.log(data))
        .catch( error => console.log(error));
})


// Posta en ny nod med ett firebaseID under ditt namn
const postBtn = document.querySelector('#post');

postBtn.addEventListener('click', () => {
    post()
        .then( data => console.log(data))
        .catch( error => console.log(error));
})

// Patcha nickname under ditt namn
const patchBtn = document.querySelector('#patch');

patchBtn.addEventListener('click', () => {
    patch()
        .then( data => console.log(data))
        .catch( error => console.log(error));
})

// Deletea en nod under ditt namn
const delBtn = document.querySelector('#delete');

delBtn.addEventListener('click', () => {
    del()
        .then( data => console.log(data))
        .catch( error => console.log(error));
})