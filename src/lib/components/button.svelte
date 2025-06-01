<script lang="ts">
    let {
        class: className = "",
        title,
        transition,
        transitionInParams,
        transitionOutParams,
        children,
        ...props
    }: { class?: string; title?: string; [x: string]: any } = $props();
</script>

<button
    class="cursor-pointer border border-transparent px-4 py-2 transition-colors duration-200 active:border-cyan-500 active:bg-cyan-500/25 lg:hover:border-cyan-500 lg:hover:bg-cyan-500/25 {className}"
    {title}
    in:transition={transitionInParams}
    out:transition={transitionOutParams}
    {...props}
>
    {@render children()}
</button>
