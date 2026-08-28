const baseUrl = 'https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/todo-list'

export async function getAllTasks(){
    try{
        const response = await fetch(baseUrl + '.json');
        if(!response.ok) throw new Error('Something went wrong');

        const tasks = await response.json();
        return tasks;
    }
    catch(error){
        throw error;
    }
}

export async function postTask(newTaskString){
    const newTaskObj = {
        task: newTaskString,
        done: false
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(newTaskObj),
        headers: {
            "Content-type": 'application/json'
        }
    }

    try{
        const response = await fetch(baseUrl + '.json', options);
        if(!response.ok) throw new Error('Something went wrong');

        const firebaseID = await response.json();
        return firebaseID;
    }
    catch(error){
        throw error;
    }
}

export async function patchDone(firebaseID, isDone){

    const options = {
        method: 'PATCH',
        body: JSON.stringify({done: isDone}),
        headers: {
            "Content-type": 'application/json'
        }
    }

    try{
        const response = await fetch(`${baseUrl}/${firebaseID}.json`, options);
        if(!response.ok) throw new Error('Something went wrong');

        const data = await response.json();
        return data;
    }
    catch(error){
        throw error;
    }
}


export async function deleteTask(firebaseID){

    const options = {
        method: 'DELETE',
    }

    try{
        const response = await fetch(`${baseUrl}/${firebaseID}.json`, options);
        if(!response.ok) throw new Error('Something went wrong');

        const data = await response.json();
        return data;
    }
    catch(error){
        throw error;
    }
}