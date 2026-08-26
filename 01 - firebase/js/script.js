import { addName } from "./firebaserequests.js";

const addNameBtn = document.querySelector('button');

addNameBtn.addEventListener('click', () => {

    addName()
        .then( data => console.log(data))
        .catch( error => console.log(error));

})