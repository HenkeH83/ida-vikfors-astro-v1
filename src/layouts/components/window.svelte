<script>
    import { windowWidth } from '../../store'
</script>

<svelte:window bind:innerWidth={$windowWidth} />