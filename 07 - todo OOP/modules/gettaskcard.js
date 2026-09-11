// tak är en instans av klassen Task
export function getTaskCard(task) {
    console.log(task);
    const cardDiv = document.createElement('div');
    const taskP = document.createElement('p');
    const delBtn = document.createElement('button');

    cardDiv.append(taskP, delBtn);
    delBtn.innerText = 'X';
    taskP.innerText = task.getTask(); //taskgenskapen är privat, så vi använder gettern

    // Lägg till eventlistener för att ta bort tasken
    delBtn.addEventListener('click', async () => {
        try {
            await task.delete();
            cardDiv.remove();
        }
        catch (error) {
            console.log(error);
        }
    })


    if (task.getIsDone()) {
        taskP.classList.add('done');
    }
    else{
        //gömmer deleteknappen
        delBtn.classList.add('hidden');
    }


    // Patcha isDone
    taskP.addEventListener('click', async () => {
        // Om patchen lyckas behöver vi uppdatera DOM:en så att det aktuella taskCard visar rätt utseende beroende på värdet av isDone
        try {
            await task.patchIsDone()
            //Lägg till eller ta bort css-klasser
            taskP.classList.toggle('done'); 
            delBtn.classList.toggle('hidden');
        }
        catch (error) {
            console.log(error)
        }
    })
    return cardDiv;
}