const baseUrl = 'https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main';

export async function addName() {
    const options = {
        // Använder patch för att vi vill lägga till en nod med ett namn, inte ett firebase id
        method: 'PATCH',
        body: JSON.stringify({ 
            lisa: {
                nickname: 'pepsi'
            }
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await fetch(`${baseUrl}.json`, options);
        if(!response.ok) {
            throw 'Something went wrong';
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        throw error;
    }
}

export async function getAllNames(){
    try{
        const response = await fetch(`${baseUrl}.json`);
        if(!response.ok) {
            throw 'Something went wrong';
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        throw error;
    }
}

// POST
export async function post() {
    const options = {
        // post skapar ett firebase ID
        method: 'POST',
        body: JSON.stringify(
            {
                prop: 'value'
            }
        ),
        headers:{
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await fetch(`${baseUrl}/clara.json`, options);
        if(!response.ok) {
            throw 'Something went wrong';
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        throw error;
    }
}

// PATCH
export async function patch() {
    const options = {
        // 
        method: 'PATCH',
        body: JSON.stringify(
            {
                nickname: 'the mighty'
            }
        ),
        headers:{
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await fetch(`${baseUrl}/clara.json`, options);
        if(!response.ok) {
            throw 'Something went wrong';
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        throw error;
    }
}

// DELETE
export async function del() {
    const options = {
        method: 'DELETE'
    }

    try{
        const response = await fetch(`${baseUrl}/clara/-P-xHTuhXm8n37UwegN0.json`, options);
        if(!response.ok) {
            throw 'Something went wrong';
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        throw error;
    }
}