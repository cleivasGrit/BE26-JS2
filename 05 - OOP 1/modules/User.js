export class User {
    constructor(id, firstName, lastName){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Skickar en patchrequest till användarens id
    async patch(patchObj){
        const url = `https://dummyjson.com/users/${this.id}`;
     
        const options = {
            method: 'PATCH',
            body: JSON.stringify(patchObj),
            headers: {'Content-type': 'application/json'}
        }

        try{
            const response = await fetch(url, options);
            if(!response.ok){
                throw new Error('Patch failed');
            }
            const data = await response.json()
            console.log(data)
        }
        catch(error){
            throw error;
        }
    }

    // Skapar alla element som behövs för att visa usern
    // Inklusive ett form för att uppdatera efternamnet
    render(wrapper){
        const div = document.createElement('div');
        const p = document.createElement('p');
        const form = document.createElement('form');
        const input = document.createElement('input');
        const button = document.createElement('button');

        wrapper.append(div);
        div.append(p, form);
        form.append(input, button);

        p.innerText = this.firstName + ' ' + this.lastName;
        button.innerText = 'Change last name';

        form.addEventListener('submit', event => {
            event.preventDefault();
            const newLastName = input.value;
            this.patch({lastName: newLastName})
                .then( () => {
                    // Lyckades requesten uppdaterer vi lokalt
                    this.lastName = newLastName;
                    p.innerText = this.firstName + ' ' + this.lastName;
                })
                .catch(error => console.log(error));

            form.reset();

        })
        
    }
}