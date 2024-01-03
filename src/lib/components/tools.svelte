
<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="fixed">
    <div class="flex justify-around">
       
        <button on:click={() => dispatch('item', 'hoe')}>Hoe</button>
        <button on:click={() => dispatch('item', 'shovel')}>Shovel</button>
        <button on:click={() => dispatch('item', 'watering can')}>Can</button>
        <button on:click={() => dispatch('item', 'carrot')}>Carrot</button>
        <button on:click={() => dispatch('item', 'strawberry')}>Strawberry</button>
    </div>
    <div class="flex justify-around">
        
        <button on:click={() => dispatch('item', 'hoe')}>Hoe</button>
        <button on:click={() => dispatch('item', 'shovel')}>Shovel</button>
        <button on:click={() => dispatch('item', 'watering can')}>Can</button>
        <button on:click={() => dispatch('item', 'carrot')}>Carrot</button>
        <button on:click={() => dispatch('item', 'strawberry')}>Strawberry</button>
    </div>
</div>

<style>
    .fixed {
        position: fixed;
        bottom: 4rem;
        width: 100%;
    }
    .flex {
        display: flex;
       
        gap: 4px;
        margin-bottom: 4px;
    }
    .justify-around {
        justify-content: center;
    }
</style>