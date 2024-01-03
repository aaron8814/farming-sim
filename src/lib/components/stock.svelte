<script lang="ts">
    import type { IPlantable } from "$lib/models/plantables";
    import type { Stock } from "$lib/models/stock";
   
    import input from "postcss/lib/input";
    import { createEventDispatcher } from "svelte";








    export let plantable: Stock;
    let dispatcher = createEventDispatcher();
    let amount = plantable.quantity;

    function sellFromPlayer(product: IPlantable) {
        if (!error()) {
            dispatcher('sell',{
                product,
                amount
            })
        }
    }

    $: error = () => {
        if (amount > plantable.quantity) {
            setTimeout(() => {
                amount = plantable.quantity;
            }, 7000);
            return true;
        }
        if (amount < 1) {
            setTimeout(() => {
                amount = 1;
            }, 7000);
            return true;
        }

        return false;
    }


</script>


<div class="flex justify-between">
    <div class="flex-grow w-[200px]">
        {plantable.quantity} {plantable.product.name} ${plantable.product.price}
    </div>
    <input class="input w-20"
    class:input-primary={!error()}
    class:input-secondary={error()}
    bind:value={amount} type="number" max={plantable.quantity}>

    <button class="btn btn-ghost" on:click={() => sellFromPlayer(plantable.product)}>
    Sell
    </button>

</div>