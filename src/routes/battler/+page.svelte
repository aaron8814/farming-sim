<script lang="ts">
    import type { ICharacter } from "$lib/battler/character";
    import Character from "$lib/battler/character.svelte";
    import Shop from "$lib/battler/shop.svelte";
    import { getPlayer } from "$lib/battler/player";
    import { getRandomPets } from "$lib/battler/petlist";

    let player1 = getPlayer();
    let player2: ICharacter[] = [
        getRandomPets(),
        getRandomPets(),
        getRandomPets(),
        getRandomPets(),
        getRandomPets(),
    ];

    function takeTurns() {
        const [attacker] = cleanUp(player2);
        const [defender] = cleanUp($player1);
        $player1 = attack($player1, attacker, defender);
        player2 = attack(player2, defender, attacker);

        // $player1 = cleanUp($player1);
        //player2 = cleanUp(player2);
    }

    function attack(
        p1: ICharacter[],
        attacker: ICharacter,
        defender: ICharacter,
    ) {
        return p1.map((character, i) => {
            if (defender.id === character.id) {
                character.damage += attacker.attack;
                character.act = true;
            }

            return character;
        });
    }

    function stopAction(p1: ICharacter[]) {
        return p1.map((character) => {
            character.act = false;
            return character;
        });
    }

    function cleanUp(p1: ICharacter[]) {
        return p1.filter((character) => character.health > character.damage);
    }

    let interval = 0;
    let inProgress = false;

    function start() {
        if (!inProgress) {
            $player1 = resetDamage($player1);
            player2 = resetDamage(player2);

            interval = setInterval(() => {
                $player1 = stopAction($player1);
                player2 = stopAction(player2);
                takeTurns();
                setTimeout(() => {}, 1400);
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
        {#each cleanUp($player1) as character}
            <Character {character} reverse></Character>
        {/each}
    </div>
    {#if !inProgress}
        <!-- content here -->
        <button class="btn btn-susscse" on:click={start}> start </button>
    {/if}

    <div class="player2 player">
        {#each cleanUp(player2) as character}
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
