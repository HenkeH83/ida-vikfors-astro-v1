<script lang="ts">
  export let classes:string = "";
</script>

<div class="swipeable-item {classes}">
  <slot />
</div>

<style lang="postcss">
  .swipeable-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition-timing-function: ease-out;
  }
</style>
