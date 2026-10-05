import {Task} from './Task'

// Skapar och returnerar en div med alla element för att visa en task 
export function getTaskCard(task: Task): HTMLDivElement {
    const cardDiv = document.createElement('div');
    const taskP = document.createElement('p');
    const delBtn = document.createElement('button');

    delBtn.innerText = 'X';
    taskP.innerText = task.task;
    cardDiv.append(taskP, delBtn);


    // Om tasken är utförd kommer P-elementet bli överstruket och knappen gömmas, med hjälp av css-klasser
    if (task.isDone) {
        taskP.classList.add('done');
    }
    else{
        delBtn.classList.add('hidden');
    }

    delBtn.addEventListener('click', ()=>{
        try{
            task.delete();
        }
        catch(error){
             // I slutprojektet visa ett informativt meddelande för användaren om något går fel
            // jag kommer testa detta utan internetuppkoppling 
            console.log(error)
        }
    })

    // Uppdatera isDone
    taskP.addEventListener('click', async () => {
        // Om uppdateringen lyckas anropas callbackfunktionen i onValue i main.ts igen
        try {
            await task.toggleIsDone()
        }
        catch (error) {
            // I slutprojektet visa ett informativt meddelande för användaren om något går fel
            // jag kommer testa detta utan internetuppkoppling 
            console.log(error)
        }
    })


    return cardDiv;
}