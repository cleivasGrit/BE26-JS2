// tak är en instans av klassen Task
export function getTaskCard(task) {
    console.log(task);
    const cardDiv = document.createElement('div');
    const taskP = document.createElement('p');
    const delBtn = document.createElement('button');

    cardDiv.append(taskP);
    delBtn.innerText = 'X';
    taskP.innerText = task.getTask(); //taskgenskapen är privat, så vi använder gettern

    if (task.getIsDone()) {
        cardDiv.append(delBtn);
        taskP.classList.add('done');
       
        // Ta bort tasken
        delBtn.addEventListener('click', async ()=>{
            try{
                await task.delete();
                cardDiv.remove();
            }
            catch(error){
                console.log(error);
            }
        })
    }


    // Patcha isDone
    taskP.addEventListener('click', async () => {
        // Om patchen lyckas behöver vi uppdatera DOM:en så att det aktuella taskCard visar rätt utseende beroende på värdet av isDone
        try {
            await task.patchIsDone()
            taskP.classList.toggle('done'); //Lägg till eller ta bort css-klassen
            
            // Lägg till eller ta bort knappen
            if (task.getIsDone()) cardDiv.append(delBtn);
            else delBtn.remove();
        }
        catch (error) {
            console.log(error)
        }
    })
    return cardDiv;
}