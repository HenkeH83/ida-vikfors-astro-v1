<script lang="ts">
  import type { paintingType } from '@interfaces/painting'
  import { fade } from "svelte/transition";
  import { windowWidth } from "../store.js";
  import { urlFor } from "../sanity";

  export let painting:paintingType;

  let hovering:boolean = false;
</script>

<div class="portfolio-wrapper">
  <div class="card-display">
    <a
      href="/work/{painting.slug.current}"
      aria-label="Continue to {painting.slug.current} page"
      on:mouseenter={() => hovering = true}
      on:mouseleave={() => hovering = false}
    >
      {#if hovering && $windowWidth && $windowWidth >= 768}
        <img
          in:fade
          src={urlFor(painting.hoverImg)
            .width(800)
            // .height(489)
            .quality(90)
            .auto("format")
            .url()}
          alt={painting.alt}
          width="367"
          height="489"
        />
      {:else}
        <img
          in:fade
          src={urlFor(painting.mainImage)
            .width(800)
            // .height(489)
            .quality(90)
            .auto("format")
            .url()}
          alt={painting.alt}
          width="367"
          height="489"
        />
      {/if}
    </a>
  </div>
</div>
