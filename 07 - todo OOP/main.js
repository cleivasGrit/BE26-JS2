import { getTaskCard } from "./modules/gettaskcard.js";
import { getAllTasks, postTask } from "./modules/firebaserequests.js";
import { Task } from "./modules/Task.js";

// I den här versionen, varje gång databasen uppdateras så uppdaterar vi den lokala infon och hur DOM:en ser ut, istället för att hämta hela databasen igen vid varje ändring. 

const wrapper = document.querySelector('#taskWrapper');
const form = document.querySelector('form')

// Eftersom getAllTasks inte anropas inifrån en funktion kan vi inte använda await
getAllTasks()
    .then(renderAllTasks)
    .catch(error => console.log(error));

form.addEventListener('submit', async event =>{
    event.preventDefault();

    const newTask = form.querySelector('input').value;
    // postTask(newTask)
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));

        // Samma som arrowfunktionen i then
        // function(data){
        //     console.log(data);
        // }

    // Detta är exakt samma som rad 8 till 10
    try{
        const data = await postTask(newTask);
        // console.log(data);
        // Vi skapar en ny instans med id:t från firebase och infon från inputen
        const task = new Task(data.name, newTask, false)
        const card = getTaskCard(task); //getTaskCard returnerar en div
        wrapper.append(card);
    }
    catch(error){
        console.log(error);
    }
})



function renderAllTasks(tasks){
    for(const id in tasks){
        const task = new Task(id, tasks[id].task, tasks[id].isDone)
        const card = getTaskCard(task); //getTaskCard returnerar en div
        wrapper.append(card);
    }
}
