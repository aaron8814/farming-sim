import { writable } from "svelte/store";
import type { IPlantable } from "../models/plantables";
import type { Stock } from "$lib/models/stock";




const store = writable([] as Stock[]);


export function createStore() {
    const { subscribe, update } = store;
    return {
       
        sell: (item: IPlantable, quantity: number) => {
           
            update(state => {
                let found = null;

                const updated = state.map(stock => {
                   
                    if (stock.product.name === item.name) {
                        // if found, set it to our found object
                        found = {...stock};
                        // increase the amount we have in the inventory
                        stock.quantity += quantity;
                    }
                    return stock;
                });
                if (found) {
                    return updated;
                }
                // if not found, create a new entry in the store list
                return [...state, { product: item, quantity }];
            });
            // run logic here to check demand for product
            // if we're overstocked, buy for lower amount
            // if no stock, we buy for increased amount
            // return total sell price of the players items
        },
        // sell to the player
        buy: (quantity: number) => {
            update(state => {
                // sell seeds
                return state
            });
        },
        subscribe
    }
}