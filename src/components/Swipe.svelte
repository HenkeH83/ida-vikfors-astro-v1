<script lang="ts">
  import type { Image } from "@sanity/types/dist/dts"
  import { createEventDispatcher } from "svelte";
  import Swipe from "./swipeLogic/SwipeController.svelte";
  import SwipeItem from "./swipeLogic/SwipeItem.svelte";
  import { urlFor } from "../sanity";
  import { clickOutside } from "../utility";

  const dispatch = createEventDispatcher();

  export let images:Array<Image>, index:number;
  //TODO: fixa type
  let SwipeComp:any;
  $: moreToLeft = (index && index <= 0) ? false : true;
  $: moreToRight = (index && images && index >= images.length - 1) ? false : true;

  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 400,
    defaultIndex: index,
  };

  const exit = () => {
    dispatch("exit", {
      close: true,
    });
  };

  function nextSlide() {
    SwipeComp.nextItem();
  }

  function prevSlide() {
    SwipeComp.prevItem();
  }
  //TODO: fixa type
  function getCurrent(event:any) {
    index = event.detail.current;
  }
</script>

<div class="swipe-holder" use:clickOutside on:click_outside={exit}>
  <Swipe bind:this={SwipeComp} {...swipeConfig} on:switchImg={getCurrent}>
    {#each images as image}
      <SwipeItem>
        <div class="img-holder">
          <img
            src={urlFor(image)
              .width(1200)
              // .height(1498)
              .quality(90)
              .auto("format")
              .url()}
            alt="Painting by Ida Vikfors"
            width="950"
            height="1498"
          />
        </div>
      </SwipeItem>
    {/each}
  </Swipe>
  {#if moreToLeft}
    <button class="modal-btn" id="prev" type="button" on:click={prevSlide}>
      <!-- &#8592 -->
      &lt;
    </button>
  {/if}
  {#if moreToRight}
    <button class="modal-btn" id="next" type="button" on:click={nextSlide}>
      &gt;
    </button>
  {/if}
  <button class="modal-btn" id="exit" type="button" on:click={exit}>x</button>
</div>

<style lang="postcss">
  .swipe-holder {
    height: 100vh;
    position: relative;
  }
  .img-holder {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  img {
    height: 100%;
    width: auto;
  }
  .modal-btn {
    font-size: 2rem;
    font-weight: 200;
    z-index: 3;
    background: transparent;
    color: var(--color-cold-white);
    border: none;
    position: absolute;
  }
  #prev {
    top: 50%;
    left: 5%;
  }
  #next {
    top: 50%;
    right: 5%;
  }
  #exit {
    top: 5%;
    right: 5%;
  }
</style>
