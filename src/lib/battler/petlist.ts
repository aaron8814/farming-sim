import type { ICharacter } from "./character";
import { v4 } from "uuid";


export const PETS: ICharacter[] = [
    { damage: 0, name: "bat familiar", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "blueb", attack: 6, health: 50, price: 10 },
    { damage: 0, name: "crabboid", attack: 8, health: 20, price: 10 },
    { damage: 0, name: "crow", attack: 5, health: 13, price: 10 },
    { damage: 0, name: "dragon", attack: 10, health: 30, price: 10 },
    { damage: 0, name: "furbat", attack: 5, health: 12, price: 10 },
    { damage: 0, name: "gryphon", attack: 9, health: 15, price: 10 },
    { damage: 0, name: "imp", attack: 9, health: 17, price: 10 },
    { damage: 0, name: "maiden", attack: 7, health: 25, price: 10 },
    { damage: 0, name: "ogre", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "orb weaver", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "skelly archer", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "skelly daggers", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "skelly mage", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "skelly sword", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "snek", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "steel golem", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "stone golem", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "treant", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "troll", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "unknown", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "venus muncher", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "wisp", attack: 5, health: 10, price: 10 },
    { damage: 0, name: "wolfren", attack: 5, health: 10, price: 10 },
];
export function getRandomPets() {
    const randomNumber = Math.floor(
        Math.random() * PETS.length
    );

    return {
        ...PETS[randomNumber],
        id: 'id' + v4(),
    }
}