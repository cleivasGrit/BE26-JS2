import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.8/underscore-esm.js";
import {getAllCountries} from './modules/restcountries.js'

// Kortlek
const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Kn', 'Q', 'K', 'A'];
const deck = [];

for(const suit of suits){
    for( const char of chars){
        deck.push({suit, char});
    }
}
console.log(deck);

const shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck)

// random
console.log(_.random(0, 51));

// sample
const card = _.sample(deck);
console.log(card);

const deck2 = _.without(deck, card);
console.log(deck2)

const hand = _.sample(shuffledDeck, 5);
console.log(hand)

const shuffledDeck2 = _.without(shuffledDeck, ...hand);
console.log(shuffledDeck2);

// console.log(deck)
console.log(hand)
console.log(...hand)


// REST Countries

getAllCountries()
    .then( countries => {
        console.log(countries);

        const names = _.pluck(countries, 'names');
        console.log(names)

        const highestPopulation = _.max(countries, country => country.population);
        
        console.log(highestPopulation)

        const biggestArea = _.max(countries, country => country.area.kilometers);
        console.log(biggestArea);

        // sortBy- official name 
        const sortedByOfficial = _.sortBy(countries, 'official');
        console.log(sortedByOfficial);

        for(const country of sortedByOfficial){
            console.log(country.names.official)
        }

    })