<script lang="ts">
    import type { ProgrammingExperience } from "$lib/types/index";

    let { exp }: { exp: ProgrammingExperience } = $props();
</script>

<img
    class="mx-auto h-12 max-h-12 w-auto max-w-12"
    src={exp.src}
    alt={exp.alt ? exp.alt : "Unknown"}
/>
<p>{exp.label}</p>
<div class="flex flex-col items-center justify-center">
    <p>{exp.level} / 100</p>
    <progress class="h-2" value={exp.level} max="100"></progress>
</div>
