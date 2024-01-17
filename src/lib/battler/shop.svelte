<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import type { ICharacter } from "./character";
    import { ITEMS, getRandomItem } from "./foodlist";
    import { getRandomPets } from "./petlist";
    import Character from "./character.svelte";

    let pets: ICharacter[] = [];
    let items: ICharacter[] = [];

    function randomFoodItems() {
        const item1 = getRandomItem();
        const item2 = getRandomItem();

        items = [item1, item2];
    }
    function randomPets() {
        const _pets: ICharacter[] = [];

        for (let i = 0; i < 5; i++) {
            _pets.push(getRandomPets());
        }
        pets = _pets;
    }

    function buyPets(pet: ICharacter) {}

    function sellPets(pet: ICharacter) {}

    function buyfood(target: ICharacter) {}

    onMount(() => {
        randomPets();
        randomFoodItems();
    });
</script>

<h2>The Shop</h2>

{#each items as item}
    <div class="flex justify-center">
        {item.name}, health: {item.health}, attack: {item.attack}
        <button class="btn btn-xs" on:click={() => buyfood(item)}>Buy</button>
    </div>
{/each}

{#each pets as pet}
    <Character character={pet}></Character>
{/each}
