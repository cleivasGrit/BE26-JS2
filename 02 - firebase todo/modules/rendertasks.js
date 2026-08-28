import { deleteTask, getAllTasks, patchDone } from "./requests.js";

export function renderTasks(tasksObj){
    const ul = document.querySelector('ul');
    ul.innerHTML = '';

    for(const key in tasksObj){
        console.log(key, tasksObj[key]);

        const li = document.createElement('li');
        const p = document.createElement('p');
        ul.append(li);
        li.append(p);

        p.innerText = tasksObj[key].task;
        p.addEventListener('click', ()=>{
            patchDone(key, !tasksObj[key].done)
                .then(getAllTasks)
                .then(renderTasks)
                .catch(error => console.log(error));
        })

        if(tasksObj[key].done){
            const delBtn = document.createElement('button');
            li.append(delBtn);
            li.classList.add('done');

            delBtn.innerText = 'X';

            delBtn.addEventListener('click', ()=>{
                deleteTask(key)
                    .then(getAllTasks)
                    .then(renderTasks)
                    .catch(error => console.log(error));
            })
        }
    }
}