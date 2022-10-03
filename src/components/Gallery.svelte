<script lang="ts">
  import type { Image } from "@sanity/types/dist/dts";
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { windowWidth } from "../store";
  import { urlFor } from "../sanity";

  const dispatch = createEventDispatcher();

  export let galleryImages:Array<Image>;
  export let swipeImages:Array<Image>;

  $: isPhone = ($windowWidth && $windowWidth < 768) ? true : false;

  const getGallery = (index:number) => {
    dispatch("gallery", {
      images: swipeImages,
      index: index,
    });
  };
</script>

<div class="images">
  {#if isPhone}
    {#each galleryImages as img, i}
      <img
        in:fade
        class="image"
        src={urlFor(img)
          .width(374)
          .height(498)
          .quality(80)
          .auto("format")
          .url()}
        alt="Painting by Ida Vikfors"
        width="374"
        height="498"
      />
    {/each}
  {:else}
    {#each galleryImages as img, i}
      <button class="img-btn" on:click={() => getGallery(i)}>
        <img
          in:fade
          class="image"
          src={urlFor(img)
            .width(374)
            .height(498)
            .quality(80)
            .auto("format")
            .url()}
          alt="Painting by Ida Vikfors"
          width="374"
          height="498"
        />
      </button>
    {/each}
  {/if}
</div>

<style lang="postcss">
  .img-btn {
    padding: 0;
    background-color: transparent;
    border: none;
  }
  .images {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .image {
    height: auto;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    .images {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    button {
      cursor: pointer;
    }
  }
</style>
