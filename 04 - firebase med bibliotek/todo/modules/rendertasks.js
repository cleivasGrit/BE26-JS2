
export function renderTasks(tasksObj){

    const ul = document.querySelector('ul');
    ul.innerHTML = '';

    for(const key in tasksObj){
        console.log(key, tasksObj[key]);

        const li = document.createElement('li');
        const p = document.createElement('p');
        ul.append(li);
        li.append(p);

        li.id = key;
        p.innerText = tasksObj[key].task;

        if(tasksObj[key].done){
            const delBtn = document.createElement('button');
            li.append(delBtn);
            li.classList.add('done');

            delBtn.innerText = 'X';
        }
    }
}