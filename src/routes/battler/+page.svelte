<script lang="ts">
    import type { ICharacter } from "$lib/battler/character";
    import Character from "$lib/battler/character.svelte";
    import Shop from "$lib/battler/shop.svelte";
    import { enemy, getPlayer, player } from "$lib/battler/player";
    import { getRandomPets } from "$lib/battler/petlist";
    import { createWallet } from "$lib/battler/money";

    let player1 = getPlayer(player);
    let player2 = getPlayer(enemy);

    player2.add(getRandomPets());
    player2.add(getRandomPets());
    player2.add(getRandomPets());
    player2.add(getRandomPets());
    player2.add(getRandomPets());

    let wallet = createWallet();

    $: player1Alive = $player1.filter((char) => !char.dead);
    $: player2Alive = $player2.filter((char) => !char.dead);

    function takeTurns() {
        const player1Attacker = $player1.find(
            (char) => !char.dead,
        ) as ICharacter;

        const player2Attacker = $player1.find(
            (char) => !char.dead,
        ) as ICharacter;

        if (!player1Attacker || !player2Attacker) {
            inProgress = !inProgress;
            clearInterval(interval);
            player1.resetDamage();
            player2.resetDamage();

            wallet.sell(15, 1);
            return;
        }
        player1.attacked(player2Attacker, player1Attacker);
        player2.attacked(player2Attacker, player1Attacker);
    }

    let interval = 0;
    let inProgress = false;

    function start() {
        if (!inProgress) {
            interval = setInterval(() => {
                takeTurns();
                setTimeout(() => {
                    player1.stopAction();
                    player2.stopAction();
                    player1.cleanup();
                    player1.cleanup();
                }, 1400);
            }, 1500);
        }

        inProgress = true;
    }

    function resetDamage(list: ICharacter[]) {
        return list.map((character) => {
            character.damage = 0;
            return character;
        });
    }
</script>

<div class="flex">
    <div class="player1 player battler-reverse">
        {#each player1Alive as character}
            <Character {character} reverse></Character>
        {/each}
    </div>
    {#if !inProgress}
        <!-- content here -->
        <button class="btn btn-susscse" on:click={start}> start </button>
    {/if}

    <div class="player2 player">
        {#each player2Alive as character}
            <Character {character}></Character>
        {/each}
    </div>
    <div class="flex justify-around"></div>
</div>
{#if !inProgress}
    <!-- content here -->
    <Shop></Shop>
{/if}

<style>
    .player {
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        width: 1200px;
        margin: 0 auto;
    }
    .player1 {
        margin-right: 20px;
    }

    .player2 {
        margin-left: 20px;
    }

    .battler-reverse {
        flex-direction: row-reverse;
    }
</style>
