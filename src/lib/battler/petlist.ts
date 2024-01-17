import type { ICharacter } from "./character";



export const PETS: ICharacter[] = [
    { name: "dog", attack: 5, health: 10 },
    { name: "cat", attack: 5, health: 10 },
    { name: "bat", attack: 6, health: 9 },
    { name: "frog", attack: 6, health: 9 },
    { name: "monkey", attack: 10, health: 20 },
    { name: "turtle", attack: 3, health: 50 },
    { name: "horse", attack: 7, health: 15 },
    { name: "hyena", attack: 10, health: 15 },
    { name: "honey badger", attack: 8, health: 30 },
    { name: "sea cucumber", attack: 1, health: 50 },
]


export function getRandomPets() {
    const randomNumber = Math.floor(
        Math.random() * PETS.length
    );

    return PETS[randomNumber]
}