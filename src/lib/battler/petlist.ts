import type { ICharacter } from "./character";



export const PETS: ICharacter[] = [
    { name: "dog", attack: 5, health: 10, price: 10 },
    { name: "cat", attack: 5, health: 10, price: 10 },
    { name: "bat", attack: 6, health: 9, price: 10 },
    { name: "frog", attack: 6, health: 9, price: 10 },
    { name: "monkey", attack: 10, health: 20, price: 20 },
    { name: "turtle", attack: 3, health: 50, price: 30 },
    { name: "horse", attack: 7, health: 15, price: 15 },
    { name: "hyena", attack: 10, health: 15, price: 17 },
    { name: "honey badger", attack: 8, health: 30, price: 30 },
    { name: "sea cucumber", attack: 1, health: 50, price: 5 },
]


export function getRandomPets() {
    const randomNumber = Math.floor(
        Math.random() * PETS.length
    );

    return PETS[randomNumber]
}