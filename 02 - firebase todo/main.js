import { getAllTasks, postTask } from "./modules/requests.js";
import { renderTasks } from "./modules/rendertasks.js";

const form = document.querySelector('form');

getAllTasks()
    .then( renderTasks )
    .catch( error => console.log(error));


form.addEventListener('submit', event => {
    event.preventDefault();

    // Hämta det första inputelementet i form-element
    // querySelector använder css-selektor för att hämta ett element
    const newTask = form.querySelector('input').value;
    console.log(newTask);

    postTask(newTask)
        .then( getAllTasks )
        .then( renderTasks )
        .catch(error => console.log(error))
})



// Eftersom getAllTasks är en async funktion returnerar det ett promise
// console.log( getAllTasks() )

