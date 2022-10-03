<script lang="ts">
    import type { availableArtType } from '@interfaces/availableArt';
    export let content: availableArtType;
</script>

<a href={content.link} target="_blank">{content.text}</a>
