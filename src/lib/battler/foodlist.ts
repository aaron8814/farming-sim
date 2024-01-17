import type { ICharacter } from "./character";


export const ITEMS: ICharacter[] = [
    {
        name: 'banana',
        attack: 0,
        health: 3,
    },
    {
        name: "apple",
        attack: 1,
        health: 5,

    },
    {
        name: "honey",
        attack: 2,
        health: 2,

    },
    {
        name: "spam",
        attack: 2,
        health: 4,

    },
    {
        name: "cactus",
        attack: 6,
        health: -2,

    },
    {
        name: "paint",
        attack: 0,
        health: -4,

    },
    {
        name: "lead",
        attack: 0,
        health: -5,

    },
    {
        name: "steroid",
        attack: 7,
        health: -5,

    },
    {
        name: "drugs",
        attack: -3,
        health: -5,

    },
];

export function getRandomItem() {
    const randomNumber = Math.floor(
        Math.random() * ITEMS.length
    );

    return ITEMS[randomNumber]
}
