const form = document.querySelector('form');
form.addEventListener('submit', event =>{
    event.preventDefault();

    // console.log('submit')
    const formData = new FormData(form);
    console.log(formData);

    // vi kan loopa igenom om vi behöver
    for(const pair of formData){
        console.log(pair)
    }

    // Ger ett tomt objekt eftersom formData inte är ett vanligt objekt
    // const json = JSON.stringify(formData);
    // console.log(json)
    
    // Omvandlar till vanligt objekt
    const regObj = Object.fromEntries(formData.entries());
    console.log(regObj);
    const json = JSON.stringify(regObj);
    console.log(json)
})