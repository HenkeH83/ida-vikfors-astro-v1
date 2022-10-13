<script lang="ts">
  import { fade } from "svelte/transition";
  import { clickOutside } from "../../utility";
  import { windowWidth } from "../../store"

  export let page:string;
 
  let openBurger:boolean = false;

  $: isDesktop = ($windowWidth === null || $windowWidth >= 799) ? true : false;
  
  const closeBurger = () => {
    if (isDesktop) return;
    openBurger = false;
  };
</script>

<nav class="header" use:clickOutside on:click_outside={closeBurger}>
  <img
    src="/logo2021_webbstor.png"
    alt="Ida vikfors logo"
    height="90"
    width="800"
  />

  <div
    class="pages [ flex-center font-inter ]"
    class:openBurger
    class:isHome={page === 'home' ? true : false}
  >
    {#if isDesktop || openBurger}
      <a
        on:click={closeBurger}
        class:active={page === 'home' ? true : false}
        in:fade={{ duration: 1300 }}
        aria-label="To landing page"
        href="/">HOME</a
      >
      <a
        on:click={closeBurger}
        class:active={page === 'work' ? true : false}
        in:fade={{ duration: 1300 }}
        aria-label="Art gallery"
        href="/work">WORK</a
      >
      <a
        on:click={closeBurger}
        class:active={page === 'about' ? true : false}
        in:fade={{ duration: 1300 }}
        aria-label="Page about Ida Vikfors and her art"
        href="/about">ABOUT</a
      >
    {/if}
  </div>

  {#if !isDesktop}
    <burger on:click={() => (openBurger = !openBurger)}>
      <span class:openBurger />
      <span class:openBurger />
      <span class:openBurger />
    </burger>
  {/if}
</nav>

<style lang="postcss">
  .header {
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 5rem;
    margin-top: 1rem;
    background-color: transparent;
    align-content: center;
  }
  .header img {
    grid-column: 1/3;
    width: auto;
    height: 1.2rem;
    align-self: center;
    justify-self: flex-end;
  }
  .active {
    color: var(--color-dark-beige);
    position: relative;
    display: inline-block;
    transition: all 1s;
  }
  .active::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: 100%;
    bottom: 0px;
    background-color: var(--color-dark-beige);
  }
  .pages {
    position: absolute;
    width: 100%;
    background-color: var(--color-warm-white);
    top: 5rem;
    left: 0;

    display: flex;
    flex-direction: column;
    max-height: 0rem;
    transition: max-height 0.2s ease-out;
  }
  .pages.openBurger {
    max-height: 10rem;
    padding-bottom: 2rem;
    z-index: 1;
  }
  .pages.openBurger.isHome {
    background-color: transparent;
  }
  .pages a {
    margin-top: 2rem;
    transition: all 1s;
    font-size: 0.5rem;
  }

  /* BURGERMENU */
  burger {
    grid-column: 3;
    outline: none;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: fit-content;

    height: 2rem;
    margin-right: 2rem;
  }
  span {
    position: absolute;
    right: 0;
    width: 2.7rem;
    height: 0.3rem;
    background: var(--color-dark-beige);
    transition: all 0.5s ease-in-out;
  }
  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(2) {
    top: 0.7rem;
  }
  span:nth-child(3) {
    top: 1.4rem;
  }
  span:nth-child(1).openBurger {
    top: 0.7rem;
    transform: rotate(45deg);
  }
  span:nth-child(2).openBurger {
    display: none;
  }
  span:nth-child(3).openBurger {
    top: 0.7rem;
    transform: rotate(-45deg);
  }
  @media only screen and (min-width: 480px) {
    .header {
      grid-column: 2;
    }
    burger {
      margin-right: 0;
    }
  }
  @media only screen and (min-width: 800px) {
    .header img {
      grid-column: 2;
      justify-self: center;
    }
    .pages {
      position: unset;
      width: unset;
      background-color: unset;
      top: unset;

      max-height: unset;
      height: auto;
      margin: 2rem 0rem 2rem;
      grid-column-start: 3;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
    .pages a {
      margin-top: 0.5rem;
      margin-left: 0.6rem;
    }
  }
  @media only screen and (min-width: 1020px) {
    .header img {
      grid-column-start: 2;
    }
  }
</style>
