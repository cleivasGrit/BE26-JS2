// user - id, för och efternamn, patchmetod (ena klassen ha en rendermetod)

class UserRender{
    // visar vad som behövs för att skapa en ny user
    constructor(id, lastName, firstName){
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
    }
    patch(parameter){
        // Här skulle kod för att skicka en patch request finnas 
        console.log(this.id, parameter);
    }
    render(){
        console.log('renderar')
        this.patch('argumentet');
    }
}

const userRender = new UserRender(1232, 'Hansson', 'Felix');
console.log(userRender)
userRender.render();

class User{
    // visar vad som behövs för att skapa en ny user
    constructor(id, lastName, firstName){
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
    }
    patch(parameter){
        // Här skulle kod för att skicka en patch request finnas 
        console.log(this.id, parameter);
    }
}

const user = new User(231, 'Leivas', 'Clara');
user.patch();

function createGUI(userObj){
    userObj.patch('från funktionen createGUI')
}

createGUI(user)

