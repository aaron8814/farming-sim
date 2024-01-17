<script lang="ts">
    import type { ICharacter } from "$lib/battler/character";
    import Character from "$lib/battler/character.svelte";
    import Shop from "$lib/battler/shop.svelte";
    import { getPlayer } from "$lib/battler/player";

    let player1 = getPlayer();

    player1.add({ attack: 5, health: 10, name: "dog", id: "1" });
    player1.add({ attack: 6, health: 9, name: "bat", id: "3" });
    player1.add({ attack: 5, health: 10, name: "cat", id: "2" });

    let player2: ICharacter[] = [
        { name: "cat", attack: 5, health: 10 },
        { name: "cat", attack: 5, health: 10 },
        { name: "cat", attack: 5, health: 10 },
    ];

    function takeTurns() {
        $player1 = attack($player1, player2, 0);
        player2 = attack(player2, $player1, 0);

        $player1 = cleanUp($player1);
        player2 = cleanUp(player2);
    }

    function attack(p1: ICharacter[], p2: ICharacter[], index = 0) {
        let [attacker] = p2;

        return p1.map((character, i) => {
            if (index === i) {
                character.health -= attacker.attack;
            }

            return character;
        });
    }

    function cleanUp(p1: ICharacter[]) {
        return p1.filter((character) => character.health > 0);
    }

    let interval = 0;
    let inProgress = false;

    function start() {
        if (!inProgress) {
            interval = setInterval(() => {
                takeTurns();
            }, 1500);
        }

        inProgress = true;
    }
</script>

<div class="flex">
    <div class="player1 player battler-reverse">
        {#each $player1 as character}
            <Character {character} reverse></Character>
        {/each}
    </div>

    <button class="btn btn-susscse" on:click={start}> start </button>

    <div class="player2 player">
        {#each player2 as character}
            <Character {character}></Character>
        {/each}
    </div>
    <div class="flex justify-around"></div>
</div>
<Shop></Shop>

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
