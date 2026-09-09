class Account{
    #name;
    #balance;
    constructor(name, balance){
        this.#name = name;
        this.#balance = balance;
        // return Object.seal(this); //såhär skulle man kunna göra om man vill att alla instanser ska vara non extensible
    }
    showBalance(){
        console.log('The balance is of ',this.#name, ' is ', this.#balance, ' SEK');
    }
    // Detta är en setter eftersom den ändrar på #balance
    deposit(amount){
        this.#balance += amount;
    }
    // Detta är en setter eftersom den ändrar på #balance
    withdraw(amount){
        if(amount > this.#balance) console.log('Not enough funds.');
        else this.#balance-=amount;
    }
    getBalance(){
        return this.#balance;
    }
    getName(){
        return this.#name;
    }
}

const savings = new Account('savings', 10000);
savings.showBalance()
savings.withdraw(5000);
savings.showBalance()
savings.withdraw(6000);
savings.deposit(20)
savings.showBalance()

const fun = new Account('fun', 0);
fun.showBalance();

// savings.balance = -10000;
savings.showBalance();
console.log(savings.getBalance())
console.log(fun.getBalance())
// console.log(fun.#name) //ger error 

savings.balance = 1000;
savings.name = 'bla bla bla';
console.log(savings)
console.log(fun)


const obj = {};
Object.seal(obj)
console.log(obj)
//obj.prop = 'en egenskap' //pgs Object.seal får vi ett felmeddelande här
console.log(obj)

