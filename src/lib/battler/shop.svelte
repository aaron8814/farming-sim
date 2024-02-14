<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import type { ICharacter, IConsumable } from "./character";
    import { ITEMS, getRandomItem } from "./foodlist";
    import { getRandomPets } from "./petlist";
    import Character from "./character.svelte";
    import { getPlayer, player } from "./player";
    import { v4 } from "uuid";
    import { createWallet } from "./money";

    let wallet = createWallet();
    let pets: ICharacter[] = [];
    let items: IConsumable[] = [];
    let player1 = getPlayer(player);

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

    function buyPets(pet: ICharacter) {
        if (pet.price && pet.price <= $wallet) {
            player1.add({
                ...pet,
                id: "id" + v4(),
            });
            wallet.buy(pet.price, 1);
        }
    }

    function sellPets(pet: ICharacter) {
        player1.remove(pet);
        wallet.sell(pet.price || 0, 1);
    }

    function buyfood(target: IConsumable) {}
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

<h2>Pet Shop</h2>
<h3>Wallet: ${$wallet}</h3>

<div class="flex gap-4">
    {#each pets as pet}
        <div class="flex flex-col justify-center">
            <Character character={pet}></Character>
            <button
                disabled={!!pet.price && $wallet < pet.price}
                class="btn mt-2 btn-ghost"
                on:click={() => buyPets(pet)}>buy</button
            >
        </div>
    {/each}
</div>

<h2>Your current team</h2>
<div class="flex gap-4">
    {#each $player1 as pet}
        <div class="flex flex-col justify-center">
            <Character character={pet}></Character>
            <button class="btn mt-2 btn-ghost" on:click={() => sellPets(pet)}
                >sell</button
            >
        </div>
    {/each}
</div>
