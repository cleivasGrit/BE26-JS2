import { onValue, ref, push, update } from "firebase/database";
import { db } from "./firebaseconfig";
import type {FirebaseObjs} from "./models.ts"
import { Task } from "./Task.ts";
import { getTaskCard } from "./rendertask.ts";

const addTaskForm = document.querySelector('form');
const taskWrapper = document.querySelector('#taskWrapper') as HTMLDivElement;

let tasks: Task[] = [];

const todoRef = ref(db, '/todo'); // Skapa en referens till noden "todo" i databasen db


// Prenumerera på ändringar under todoRef
onValue(todoRef, snapshot => {
    const todos: FirebaseObjs = snapshot.val();
    taskWrapper.innerHTML = '';

    // Skapa en Task-instans för varje task i databasen
    for(const firebaseID in todos){
        const task = new Task(firebaseID, todos[firebaseID].task, todos[firebaseID].isDone);
        tasks.push(task)

        const taskCard = getTaskCard(task);
        taskWrapper.append(taskCard);
    }

    console.log(tasks);
})

// ? innebär att eventlistenern endast läggs till om addTaskForm inte är null
addTaskForm?.addEventListener('submit', async event =>{
     event.preventDefault();

    const newTask = {
        task: addTaskForm.querySelector('input')?.value,
        done: false
    };

    const newID = push(todoRef).key;     // Genererar nytt firebaseid under todoRef
    const newTaskRef = ref(db, `/todo/${newID}`)     // skapar en ny referens till det nya idt

    addTaskForm.reset();

    try{
        await update(newTaskRef, newTask)         // Lägger till det nya objektet till referensen/noden
    }
    catch(error){
        console.log(error);
    }
})