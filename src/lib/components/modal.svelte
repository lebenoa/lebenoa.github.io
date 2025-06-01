<script lang="ts">
    type Props = {
        open: boolean;
        containerClass?: string;
        bodyClass?: string;
        outsideButtonClass?: string;
        fadeDuration?: number;
        bodyTransitionDuration?: number;
        children?: any;
    };

    let {
        open = $bindable(false),
        containerClass,
        bodyClass,
        outsideButtonClass,
        fadeDuration = 300,
        bodyTransitionDuration = 300,
        children
    }: Props = $props();

    import { fade, scale } from "svelte/transition";
</script>

{#if open}
    <div class="fixed z-20 flex h-full w-full items-center justify-center {containerClass}">
        <button
            class="fixed top-0 left-0 h-full w-full bg-black/50 text-transparent blur-lg {outsideButtonClass} z-10"
            transition:fade={{ duration: fadeDuration }}
            onclick={() => {
                open = false;
            }}
        >
            X
        </button>
        <div class="z-[21] {bodyClass}" transition:scale={{ duration: bodyTransitionDuration }}>
            {@render children()}
        </div>
    </div>
{/if}
