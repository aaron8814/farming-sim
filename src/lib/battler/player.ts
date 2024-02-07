import { writable, type Writable } from "svelte/store";
import type { ICharacter } from "./character";

export const player = writable<ICharacter[]>([]);
export const enemy = writable<ICharacter[]>([]);

export function getPlayer(store: Writable<ICharacter[]>) {
    const { subscribe, update, set } = store

    return {
        add: (pet: ICharacter) => update(state => [...state, pet]),
        attacked: (attacker: ICharacter, defender: ICharacter) =>
            update((state) => attack(state, attacker, defender)),
        remove: (pet: ICharacter) => update(state => state.filter(
            p => p.id !== pet.id
        )),

        resetDamage: () => update(resetDamage),
        stopAction: () => update(stopAction),
        cleanup: () => update(cleanUp),
        subscribe,
        set,
    }
}


function resetDamage(list: ICharacter[]) {

    return list.map((character) => {
        character.damage = 0;
        character.dead = false;
        return character;

    })
}



function attack(
    list: ICharacter[],
    attacker: ICharacter,
    defender: ICharacter,
) {
    return list.map((character, i) => {
        if (defender.id === character.id) {
            character.damage += attacker.attack;
            character.act = true;
        }

        return character;
    });
}

function stopAction(list: ICharacter[]) {
    return list.map((character) => ({
        ...character,
        act: false,

    }));
}

function cleanUp(list: ICharacter[]) {
    return list.map((character) => ({
        ...character,
        dead: character.health <= character.damage,

    }));
}