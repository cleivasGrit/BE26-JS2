import { db } from "./modules/firebaseconfig.js";
import {ref, onValue, remove, update, push} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

// console.log(db)

const usersRef = ref(db, '/users');
// console.log(usersRef);

onValue(usersRef, snapshot => {
    const users = snapshot.val();
    console.log(users)
})

// Remove node
const btn = document.querySelector('#remove');
btn.addEventListener('click', () =>{

    const albinRef = ref(db, '/users/test');
    remove(albinRef)
        .then(info => console.log(info))
        .catch(error => console.log(error));
})

// Update node
const btnUpdate = document.querySelector('#updateadmin');
btnUpdate.addEventListener('click', () =>{

    const claraRef = ref(db, '/users/-asldkjflkadsf');
    update(claraRef, {test: true})
        .then(info => console.log(info))
        .catch(error => console.log(error));
})

// Push and update - lägga till en nod med ett firebase ID 
const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () =>{

    const newID = push(usersRef).key;
    console.log(newID);

    const newUserRef = ref(db, `/users/${newID}`);
    const user = {
        name: 'Gandalf',
        admin: true
    }

    update(newUserRef, user)
        .then( info => console.log(info))
        .catch(error => console.log(error))
})

