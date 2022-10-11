<script lang="ts">
    import type { availableArtType } from '@interfaces/availableArt';
    export let content: availableArtType;
</script>

<a href={content.link} aria-label="Go to {content.text} website" target="_blank">{content.text}</a>
