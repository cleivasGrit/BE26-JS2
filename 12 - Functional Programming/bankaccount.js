class Account{
    #name;
    #balance;
    constructor(name, balance){
        this.#name = name;
        this.#balance = balance;
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

// Samma men med FP
const savingsFP = {balance: 10000, name: 'savingsFP'};

const withdraw = (accountObj, amount) => {
    const accountClone = {...accountObj}

    if(amount > accountClone.balance){
        console.log('Not enough funds.')
    }
    else accountClone.balance -= amount;
    return accountClone;
}

const deposit = (accountObj, amount) => {
     const accountClone = {...accountObj};
     accountClone.balance += amount;
     return accountClone;
}

const savingsFP2 = withdraw(savingsFP, 1000);
console.log(savingsFP, savingsFP2)

const savingsFP3 = deposit(savingsFP2, 1);
console.log(savingsFP, savingsFP3)

let funAccount = {balance: 0, name: 'fun'};
funAccount = deposit(funAccount, 100);
funAccount = deposit(funAccount, 1000);
funAccount = withdraw(funAccount, 100);
funAccount = deposit(funAccount, 100);
console.log(funAccount)