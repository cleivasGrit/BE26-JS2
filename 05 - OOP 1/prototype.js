// Här skapar vi en konstruktor för en prototyp som vi kallar för Character
function Character(name, type, health, damage){
    this.name = name;
    this.type = type;
    this.health = health;
    this.damage = damage;
}

// Här lägger vi till en metod till prototypen Character
Character.prototype.takeDamage = function(damage){
    this.health-=damage;
}

console.log(Character);

// Här skapar vi två instanser av prototypen Character. Dvs två stycken separata objekt som har exakt samma struktur som bestämdes av prototypen
const laura = new Character('laura', 'warrior', 100, 100);
const lucifer = new Character('lucifer', 'fairy', 669, 13);
console.log(laura);
console.log(lucifer);

// lucifer skadar laura
laura.takeDamage(lucifer.damage);
console.log(laura);
console.log(lucifer);
