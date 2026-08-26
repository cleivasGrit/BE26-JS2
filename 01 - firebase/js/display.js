export function displayNames(nameObj){
    const wrapper = document.querySelector('#nameWrapper');
    wrapper.innerHTML = '';

    for(const key in nameObj){
        const nameEl = document.createElement('h2');
        const nickname = nameObj[key].nickname;

        console.log(nameObj[key].nickname)

        // Lägg till så att även smeknamnet visas i samma element 
        nameEl.innerText = key + " - " + nickname;

        wrapper.append(nameEl);
    }
}