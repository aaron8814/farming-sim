<script lang="ts">
    import type { IPlantable } from "$lib/models/plantables";
    import { createStore } from "$lib/stores/store";

  
    import { createWallet } from "../stores/money";
    import { createInventory } from "$lib/stores/inventory";
    import Stock from "./stock.svelte";
    import Plantable from "./plantable.svelte";

    const wallet = createWallet(); 
    const store = createStore(); 
    const inventory = createInventory();

   
    let dialog: HTMLDialogElement;

    function sellFromPlayer(detail: {product: IPlantable, amount: number}) {
        
        store.sell(detail.product, detail.amount);
        wallet.sell(detail.product.price, detail.amount);
        inventory.remove(detail.product, detail.amount);
        
    }

    function sellFromStore() {

    }
</script>

<dialog bind:this={dialog} class="modal modal-box">
    <form class="flex flex-col justify-between h-full">
        
        <div class="mb-20"> 
            <h1 class="text-6xl mb-4">Welcome to Jinnies Store</h1> 
            <div class="flex flex-row justify-between">
                <button class="btn btn-link">buy</button>
                <input class="input input-primary" type="text " readonly value={"you have $" + $wallet}>
                <button class="btn btn-error">sell</button>

            </div>
        </div>
        <div>
        
            Sell From Player Inventory
            
            {#each $inventory as plantable}
                {#if plantable.quantity > 0}
                    <Stock {plantable} on:sell={(event) => sellFromPlayer(event.detail)}></Stock>
                    
                {/if}
        
            {/each}
        </div>
       
        <button  class ="btn btn-warning" value="cancel" formmethod="dialog">Exit</button>
    </form>
</dialog>

<button class ="btn btn-success" on:click={() => dialog.showModal()}>Go to Store</button>

<style>
    dialog {
        
        border: 1px solid;
        border-radius: 6px;
        width: 50%;
        margin: 0 auto;
        max-width: 800px;
    }
</style>