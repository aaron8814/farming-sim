import type { IPlantable } from "$lib/models/plantables";
import type { Stock } from "$lib/models/stock";
import { writable } from "svelte/store";

const inventory = writable([] as Stock[]);

const { subscribe, update } = inventory;

function harvest(item: IPlantable, quantity = 1) {

    update(state => {

        let found = false;
        const updated = [...state.map(stock => {
            if (
                stock.product.name === item.name &&
                stock.product.quality === item.quality
            ){
                stock.quantity += quantity;
                found = true;
            }
            return stock;
        })]
        if (!found) {
            return [...state, { product: item, quantity }];
        }
        return updated;   
    })
}

function remove(item: IPlantable,quantity = 1) {
    update(state => {
        return state.map(stock=>{
            if(
                stock.product.name === item.name &&
                stock.product.quality === item.quality &&
                stock.quantity <= quantity 
            ) {
                stock.quantity -= quantity;
            }
            return stock;
        });
    })

}

export  function createInventory() {
    return{
    subscribe,
    update,
    harvest,
    remove,
    }
}