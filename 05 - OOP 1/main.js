import { Counter } from "./modules/Counter.js";
import { getUsers } from "./modules/getusers.js";
import { User } from "./modules/User.js";

const a = new Counter(0);
const b = new Counter(100);
a.render(document.body);
b.render(document.body);


getUsers()
    .then(users =>{
        console.log(users) //Arrayen med users från dummyjson
        const wrapper = document.querySelector('#usersWrapper'); //elementet vi ska visa alla users i

        // Här loopar vi igenom alla users från API:et och destructar varje objekt/element i arrayen
        for(const {id, firstName, lastName} of users){

            // Skapar en ny instans av User-klassen
            const user = new User(id, firstName, lastName);
            // console.log(user);
            user.render(wrapper); //Renderar en user i wrapper
        }
    })
    .catch(error => console.log(error))



// Vi kan enkelt skapa hur många counters som helst
// for(let i=0; i<100; i++){
//     const c = new Counter(i);
//     c.render(document.body);
// }

// console.log(a, b);
// a.add();
// a.add();
// a.add();
// a.add();
// b.subtract();
// b.subtract();
// b.subtract();
// console.log(a, b);