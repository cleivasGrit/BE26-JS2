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