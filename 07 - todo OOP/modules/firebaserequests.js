export const baseURL = 'https://be26-demo-default-rtdb.europe-west1.firebasedatabase.app/todo';

// Tar emot en string som ska vara värdet av nya tasksens task
export async function postTask(newTask){

    try{
        const option = {
            method: 'POST',
            body: JSON.stringify({task: newTask, isDone: false}),
            // Content-type headern talar om vilken typ av data som bodyn innehåller.
            headers: {
                'Content-type': 'application/json'
            }
        }
    
        const response = await fetch(baseURL + '.json', option);
    
        if(!response.ok){
            throw new Error('Post failed');
        }
    
        const data = await response.json();
        return data;
    }
    catch(error){
        throw error;
    }
}

export async function getAllTasks(){
    try{
        const response = await fetch(baseURL + '.json');
        if(!response.ok){
            throw new Error('Fetching tasks failed');
        }
    
        const data = await response.json();
        return data;
    }
    catch(error){
        throw error;
    }
}