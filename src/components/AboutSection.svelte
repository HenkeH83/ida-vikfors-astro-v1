<script lang="ts">
    import type { aboutType } from '@interfaces/about'
    import { fade } from "svelte/transition";
    import { urlFor, toPlainText } from "../sanity";

    export let content:aboutType;

    let isReversed:boolean = content.sort % 2 != 0 ? true : false;
    let noParagraph:boolean = content.paragraph == undefined ? true : false;
</script>

<div class:reversed={isReversed} class="card-layout">
    <img
        in:fade
        src={urlFor(content.image)
            .width(420)
            .height(560)
            .quality(80)
            .auto("format")
            .url()}
        alt={content.alt}
        width="420"
        height="560"
    />
    <div class="content">
        <p>
            <i>
                "{toPlainText(content.italic)}"
            </i>
        </p>
        <p class:noParagraph>
            {toPlainText(content.paragraph)}
        </p>
    </div>
</div>

<style lang="postcss">
    .noParagraph {
        display: none;
    }
</style>
