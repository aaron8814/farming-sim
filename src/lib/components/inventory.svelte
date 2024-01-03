
<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Store from "./store.svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="fixed">
    <div class="flex justify-around">
       
        <button class= "btn btn-primary" on:click={() => dispatch('item', 'carrot')}>Carrot</button>
        <button class= "btn btn-info" on:click={() => dispatch('item', 'strawberry')}>Strawberry</button>
        <Store></Store>
    </div>
</div>

<style>
    .fixed {
        position: fixed;
        bottom: 4rem;
        width: 100%;
        z-index: 20;
      
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