<script lang="ts">
    import { cubicIn, cubicOut } from "svelte/easing";
    import type { ICharacter } from "./character";
    import gsap from "gsap";
    export let character: ICharacter;

    export let reverse = false;

    $: if (character && character.act) {
        const tl = gsap.timeline();

        tl.to("#" + character.id, {
            scale: 1.2,
            x: -20,
            y: -20,

            duration: 0.5,
            ease: cubicIn,
        });

        tl.to("#" + character.id, {
            scale: 1,
            x: 0,
            y: 0,

            duration: 0.5,
            ease: cubicOut,
        });
    }
</script>

<div class="character bg-neutral text-neutral-content rounded-md" class:reverse>
    <img
        id={character.id}
        src={"./ai/" + character.name + ".png"}
        alt={character.name}
    />
    <div class="attack absolute" class:reverse>{character.attack}</div>
    <div class="health absolute" class:reverse>
        {character.health - character.damage}
    </div>
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
