

// Bracket notation

const obj = {
    0: 'en nolla',
    egenskap: 100,
    prop: 'fantasi',
    test: 'ett test'
}

console.log(obj[0])
console.log(obj['egenskap'])
console.log(obj.egenskap)

const prop = 'egenskap'
console.log(obj[prop])

// for in
console.log(obj)
for(const key in obj){
    console.log(key, obj[key])
}