import { writable } from "svelte/store";

const money = writable(50);


export function createWallet() {
    const { subscribe, update } = money;
    return {
        buy: (cost: number, amount: number) => {
            let success = false;

            update(state => {
                const tolal = cost * amount
                if (state >= cost) {
                    state -= cost;
                    success = true;
                }
                return state;
            });

            return success;
        },
        sell: (cost: number, amount: number) => {
            update(state => {
                state += cost * amount;
                return state
            });
        },
        subscribe
    }
}