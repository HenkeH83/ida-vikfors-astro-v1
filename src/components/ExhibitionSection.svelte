<script lang="ts">
    import type { exhibitionType } from '@interfaces/exhibition'

    export let content:exhibitionType;
</script>

<p class="exhibition-titel">{content.place}</p>
<p><i>{content.exhibitionName}</i></p>
<p class="p-b-one">{content.displayDate}</p>

<style>
    .exhibition-titel {
        text-transform: uppercase;
    }
</style>
