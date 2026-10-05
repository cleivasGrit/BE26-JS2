class User {
    public readonly id: string;
    public readonly name: string;
    public isAdmin: boolean;
    
    // age som ska vara public och som ska gå att ändra men endast till ett number som är minst 18
    // private age: number;
    // Om get och set används måste fältet heta något annat än dem
    private _age: number;

    constructor(id: string, name: string, isAdmin: boolean, age:number){
        this.id = id;
        this.name = name;
        this.isAdmin = isAdmin;

        if(age < 18) throw new Error('för ung');
        this._age = age;
    }

    // getter och setter för age
    // getAge(){
    //     return this.age;
    // }
    // setAge(newAge: number){
    //     if(newAge < 18) throw new Error('för ung');
    //     this.age = newAge;
    // }

    // keyword get och set age 
    get age(){
        return this._age;
    }
    set age(newAge: number){
        if(newAge < 18) throw new Error('för ung');
        this._age = newAge;
    }

}

const user = new User('sdlkfslkdjflk', 'Sotis', true, 34);
// console.log(user.test)
console.log(user.id, user.name);
// user.id = 'AAAA'; //får ej göra så
// console.log(user.id)
console.log(user.isAdmin)
// user.isAdmin = 'sdfsfd';
user.isAdmin = false;
// user.age = 2;

// console.log(user.getAge())
// user.setAge(24)
// console.log(user.getAge())

console.log(user.age)
user.age = 29;
console.log(user.age)