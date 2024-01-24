<script lang="ts">
    import type { ICharacter } from "./character";

    export let character: ICharacter;

    export let reverse = false;
</script>

<div class="character bg-neutral text-neutral-content rounded-md">
    <img
        src={"./ai/" + character.name + ".png"}
        alt={character.name}
        class:reverse
    />
    <div class="attack absolute">{character.attack}</div>
    <div class="health absolute">{character.health}</div>
</div>

<style>
    .character {
        position: relative;
        height: 100px;
        width: 100px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .attack {
        top: 0;
        right: 0;
    }
    .health {
        bottom: 0;
        right: 0;
    }

    img {
        height: 100px;
        width: 100px;
    }
    .reverse {
        transform: scaleX(-1);
    }
</style>
