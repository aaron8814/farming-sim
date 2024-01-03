<script lang="ts">
    import { onMount } from "svelte";
    import { plantables } from "../models/plantables";
    import Inventory from "./inventory.svelte";
    import { createFarm } from "../stores/farm";
    import Plantable from "./plantable.svelte";

    

    let selectedPlant = plantables.strawberry;
    const farm = createFarm();

    onMount(() => {
        farm.resetFarm();
    });

    function changeItem(item: { detail: string }) {
        console.log(item.detail);
    }

    
    function changePlant(item: { detail: string }) {
       
        switch (item.detail) {
            case "strawberry":
                selectedPlant = plantables.strawberry;
                break;

            case "carrot":
                selectedPlant = plantables.carrot;
                break;

            // homework, add your own items to plantables.ts
            // case 'potato':
            //     selectedPlant = plantables.potato;
            //     break;

            default:
                selectedPlant = plantables.strawberry;
                break;
        }
    }
</script>

<div class="background flex items-center justify-center">
    <div class="grid">
        {#each $farm as row, _row}
            <div class="grid-row">
                {#each row as plot, _col}
                    <Plantable
                        plant={plot}
                        id={_row + "-" + _col}
                        row={_row}
                        col={_col}
                        selectedPlant={selectedPlant}
                    />
                {/each}
            </div>
        {/each}
    </div>
</div>

<Inventory on:item={(item) => changePlant(item)} />

<style>
    .grid-row {
        display: flex;
        /* this makes it so small screens don't wrap the buttons */
        flex-wrap: nowrap;
    }

    .background{
        height: 100dvh;
    }
</style>