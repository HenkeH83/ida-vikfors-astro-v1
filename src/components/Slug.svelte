<script lang="ts">
    import type { Image } from "@sanity/types/dist/dts";
    import type { paintingType } from "@interfaces/painting";
    import { onDestroy } from "svelte";
    import { fade } from "svelte/transition";
    import { windowWidth } from "../store";
    import Gallery from "./Gallery.svelte";
    import Swipe from "./Swipe.svelte";
    import { urlFor, toHtml } from "../sanity";

    export let content:paintingType;

    let swipeSet:Array<Image> | null = null;
    let galleryIndex:Number | null = null;
    let showSwipe:Boolean | null = false;

    function showGallery(event:any) {
        if ($windowWidth && $windowWidth < 768) return;
        swipeSet = event.detail.images;
        galleryIndex = event.detail.index;
        showSwipe = true;
    }
    function closeModal() {
        showSwipe = false;
    }
    onDestroy(() => {
        galleryIndex = null;
        swipeSet = null;
        showSwipe = false;
    });
</script>

{#if showSwipe}
    <div transition:fade class="modal">
        <Swipe on:exit={closeModal} images={swipeSet} index={galleryIndex} />
    </div>
{/if}
<div class="card-detail">
    <div class="card-layout reversed">
        {#if $windowWidth && $windowWidth >= 768}
            <img
                src={urlFor(content.mainImage)
                    .width(420)
                    .height(560)
                    .quality(80)
                    .auto("format")
                    .url()}
                alt={content.alt}
                width="420"
                height="560"
            />
        {/if}
        <div class="content">
            <h1>{content.title}</h1>
            {@html toHtml(content.body)}
        </div>
    </div>
    <Gallery
        on:gallery={showGallery}
        galleryImages={content.images}
        swipeImages={content.images}
    />
    <div class="btn-wrapper [ font-inter ] ">
        <a href="/work"> <i> back to work </i> </a>
    </div>
</div>

<style lang="postcss">
    .modal {
        position: fixed;
        z-index: 2;
        top: 0rem;
        left: 0rem;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .btn-wrapper {
        height: 4rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & > a {
            height: fit-content;
            transition: all 1s;
            font-size: 0.6rem;
            letter-spacing: 0.7px;
        }
    }
</style>
