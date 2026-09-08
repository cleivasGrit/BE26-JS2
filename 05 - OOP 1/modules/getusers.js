// Vi använder dummyjson för att få tillgång till en massa placeholderinfo från databaser
// Vi hämtar alla users för- och efternamn samt id.

const URL = 'https://dummyjson.com/users?select=firstName,lastName,id'

export async function getUsers(){
    try{
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error('Something went wrong.')
        }
        const data = await response.json();
        return data.users;
    }
    catch(error){
        throw error;
    }
}