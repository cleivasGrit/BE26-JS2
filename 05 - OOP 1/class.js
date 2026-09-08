// let num = 100;
// num = num - 5;
// num-=5;
// console.log(num)

// Här definierar vi en klass som fungerar exakt likadant som prototypen. Trots att det är en klass är det egentligen en prototype
class Character{
    // konstruktorn används för att skapa instanser
    constructor(name, type, health, damage){
        this.name = name;
        this.type = type;
        this.health = health;
        this.damage = damage;
    }
    takeDamage(amount){
        this.health -= amount;
    }
}

// Två instanser skapas 
const laura = new Character('laura', 'warrior', 100, 100);
const lucifer = new Character('lucifer', 'fairy', 669, 13);
console.log(laura);
console.log(lucifer);

// lucifer skadar laura
laura.takeDamage(lucifer.damage);
console.log(laura);
console.log(lucifer);

console.log(Object.getPrototypeOf(laura));