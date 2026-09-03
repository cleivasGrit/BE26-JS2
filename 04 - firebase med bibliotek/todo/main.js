import { ref, onValue, update, push, remove } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";
import { db } from "./modules/firebaseconfig.js";
import { renderTasks } from "./modules/rendertasks.js";

const todoRef = ref(db, '/todo')
const form = document.querySelector('form');
const ul = document.querySelector('ul');

// Hämta och visa alla tasks
onValue(todoRef, snapshot => {
    const tasks = snapshot.val();
    renderTasks(tasks);
})

// Lägg till en ny task
form.addEventListener('submit', event => {
    event.preventDefault();

    const newTask = {
        task: form.querySelector('input').value,
        done: false
    };
    // console.log(newTask);
    const newID = push(todoRef).key;
    const newTaskRef = ref(db, `/todo/${newID}`)
    update(newTaskRef, newTask)
        .then(info => console.log(info))
        .catch(error => console.log(error));

    form.reset();
})


// 
ul.addEventListener('click', event => {
    // console.log(event.target.tagName);

    // Om man har klickat på p-elementet uppdaterar vi taskens done
    if (event.target.tagName === 'P') {
        const li = event.target.parentElement;
        const id = li.id;
        // console.log('done: ', li.classList.contains('done'))

        const taskRef = ref(db, `/todo/${id}`);

        update(taskRef, { done: !li.classList.contains('done') })
            .then(info => console.log(info))
            .catch(error => console.log(error));
    }
    // Om har klickat på en knapp vill vi ta bort tasken
    else if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement;
        const id = li.id;
        const taskRef = ref(db, `/todo/${id}`);
        remove(taskRef)
            .then(info => console.log(info))
            .catch(error => console.log(error));
    }
})
