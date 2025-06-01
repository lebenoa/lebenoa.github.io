<script lang="ts">
    import { fly, slide, scale } from "svelte/transition";

    import TopLeftBottomRightCutButton from "$lib/components/top-left-bottom-right-cut-button.svelte";
    import Modal from "$lib/components/modal.svelte";
    import {
        Csharp,
        Discord,
        Facebook,
        Github,
        Go,
        Java,
        JavaScript,
        Kotlin,
        Php,
        Python,
        Rust,
        Steam,
        Youtube,
        Zig
    } from "$lib/icons";

    const duration = 300;

    let activeTab = $state(1);
    let mobileNavModal = $state(false);
    let emailCopiedState = $state(false);
</script>

<Modal
    bind:open={mobileNavModal}
    bodyClass="flex flex-col gap-2"
    outsideButtonClass="backdrop-blur"
>
    <TopLeftBottomRightCutButton
        active={activeTab == 0}
        cutCorner={50}
        width={300}
        onclick={() => {
            activeTab = 0;
            mobileNavModal = false;
        }}
    >
        <span class="mr-1 text-green-500">&gt;</span><span class="text-orange-500">cat</span> introduction.txt
    </TopLeftBottomRightCutButton>
    <TopLeftBottomRightCutButton
        active={activeTab == 1}
        cutCorner={50}
        width={300}
        onclick={() => {
            activeTab = 1;
            mobileNavModal = false;
        }}
    >
        <span class="mr-1 text-green-500">&gt;</span><span class="text-orange-500">ls</span> programming-exp
    </TopLeftBottomRightCutButton>
    <TopLeftBottomRightCutButton
        active={activeTab == 2}
        cutCorner={50}
        width={300}
        onclick={() => {
            activeTab = 2;
            mobileNavModal = false;
        }}
    >
        <span class="mr-1 text-green-500">&gt;</span><span class="text-orange-500">ls</span> third-parties-exp
    </TopLeftBottomRightCutButton>
</Modal>

<div class="hidden lg:flex lg:flex-row lg:justify-center">
    <TopLeftBottomRightCutButton
        active={activeTab == 0}
        cutCorner={50}
        width={300}
        onclick={() => {
            activeTab = 0;
        }}
    >
        <span class="mr-1 text-green-500">&gt;</span><span class="text-orange-500">cat</span> introduction.txt
    </TopLeftBottomRightCutButton>
    <TopLeftBottomRightCutButton
        active={activeTab == 1}
        cutCorner={50}
        width={300}
        buttonStyle={"ml-[-47px]"}
        onclick={() => {
            activeTab = 1;
        }}
    >
        <span class="mr-1 text-green-500">&gt;</span><span class="text-orange-500">ls</span> programming-exp
    </TopLeftBottomRightCutButton>
    <TopLeftBottomRightCutButton
        active={activeTab == 2}
        cutCorner={50}
        width={300}
        buttonStyle={"ml-[-47px]"}
        onclick={() => {
            activeTab = 2;
        }}
    >
        <span class="mr-1 text-green-500">&gt;</span><span class="text-orange-500">ls</span> third-parties-exp
    </TopLeftBottomRightCutButton>
</div>
<div class="relative flex w-full justify-center py-2 lg:hidden">
    <TopLeftBottomRightCutButton
        active={false}
        cutCorner={50}
        width={300}
        onclick={() => {
            mobileNavModal = true;
        }}
    >
        <span class="mr-1 text-green-500">&gt;</span><span class="text-orange-500">cat</span> introduction.txt
    </TopLeftBottomRightCutButton>
</div>

{#if activeTab == 0}
    <div
        class="mx-auto my-2 flex h-fit w-[98%] flex-col items-center px-4 text-white shadow-lg shadow-black backdrop-blur-md backdrop-brightness-[90%] md:w-2/3 lg:h-3/4 lg:w-2/3"
        in:slide={{ duration, delay: duration }}
        out:slide={{ duration }}
    >
        <div class="my-4 flex w-full flex-row items-center justify-between gap-4 p-4">
            <div class="w-2/3">
                <h1
                    class="mb-2 text-center text-5xl font-bold"
                    in:fly={{ y: -100, duration, delay: duration }}
                    out:fly={{ y: -100, duration }}
                >
                    Hello there! I'm
                    <span
                        class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
                    >
                        Lebenoa
                    </span>!
                </h1>
                <p
                    class="text-center text-xl text-gray-400"
                    in:fly={{ x: -100, duration, delay: duration }}
                    out:fly={{ x: -100, duration }}
                >
                    I code for fun! Initially, I have no interest in coding but, back then, no one
                    was maintaining our website, so it start by me learning my way to maintain that
                    website. Eventually ended up find coding fun probably because it's like a game
                    where you solve problem after problem
                </p>
            </div>
            <img
                in:scale={{ duration, delay: duration }}
                out:scale={{ duration }}
                class="h-auto w-[130px] self-start md:w-[200px] md:self-center"
                src="https://cdn.discordapp.com/avatars/572446728759017472/2f8ca3270a849789da4c23e453209fcc.png?size=2048"
                alt="My Avatar"
            />
        </div>
        <h2
            class="mt-4 text-4xl font-bold"
            in:fly={{ x: 100, duration, delay: duration }}
            out:fly={{ duration }}
        >
            Contact Me
        </h2>
        <div
            class="mt-4 flex w-full flex-row flex-wrap justify-evenly"
            in:scale={{ duration: duration + 500, delay: duration }}
            out:scale={{ duration }}
        >
            <a
                class="flex h-fit w-fit flex-col items-center border border-transparent px-8 py-6 transition-colors duration-200 active:border-cyan-500 active:bg-cyan-500/25 lg:hover:border-cyan-500 lg:hover:bg-cyan-500/25"
                target="_blank"
                href="https://r.lebenoa.com/facebook"
            >
                <img class="mb-2 h-24 w-auto" src={Facebook} alt="Facebook Logo" />
                <p class="text-lg">Facebook</p>
            </a>
            <a
                class="flex h-fit w-fit flex-col items-center border border-transparent px-8 py-6 transition-colors duration-200 active:border-cyan-500 active:bg-cyan-500/25 lg:hover:border-cyan-500 lg:hover:bg-cyan-500/25"
                target="_blank"
                href="https://r.lebenoa.com/youtube"
            >
                <img class="mb-2 h-24 w-auto" src={Youtube} alt="YouTube Logo" />
                <p class="text-lg">YouTube</p>
            </a>
            <a
                class="flex h-fit w-fit flex-col items-center border border-transparent px-8 py-6 transition-colors duration-200 active:border-cyan-500 active:bg-cyan-500/25 lg:hover:border-cyan-500 lg:hover:bg-cyan-500/25"
                target="_blank"
                href="https://r.lebenoa.com/github"
            >
                <img class="mb-2 h-24 w-auto" src={Github} alt="GitHub Logo" />
                <p class="text-lg">GitHub</p>
            </a>
            <a
                class="flex h-fit w-fit flex-col items-center border border-transparent px-8 py-6 transition-colors duration-200 active:border-cyan-500 active:bg-cyan-500/25 lg:hover:border-cyan-500 lg:hover:bg-cyan-500/25"
                target="_blank"
                href="https://r.lebenoa.com/steam"
            >
                <img class="mb-2 h-24 w-auto" src={Steam} alt="Steam Logo" />
                <p class="text-lg">Steam</p>
            </a>
            <a
                class="flex h-fit w-fit flex-col items-center border border-transparent px-8 py-6 transition-colors duration-200 active:border-cyan-500 active:bg-cyan-500/25 lg:hover:border-cyan-500 lg:hover:bg-cyan-500/25"
                target="_blank"
                href="https://r.lebenoa.com/discord"
            >
                <img class="mb-2 h-24 w-auto" src={Discord} alt="Discord Logo" />
                <p class="text-lg">Discord Server</p>
            </a>
        </div>
        <h3 class="my-auto text-xl font-bold">OR</h3>
        <button
            class="relative my-auto h-fit cursor-pointer border border-transparent px-4 py-2 text-lg transition-colors duration-200 active:border-cyan-500 active:bg-cyan-500/25 lg:hover:border-cyan-500 lg:hover:bg-cyan-500/25"
            title="Click to copy!"
            onclick={() => {
                if (emailCopiedState) return;

                navigator.clipboard.writeText("saifa6767@hotmail.co.th");
                emailCopiedState = true;
                setTimeout(() => {
                    emailCopiedState = false;
                }, 3000);
            }}
            in:fly={{ y: 100, duration: duration + 1000, delay: duration }}
            out:fly={{ y: 100, duration }}
        >
            <span class="font-bold">Email:</span>
            saifa6767@hotmail.co.th
            {#if emailCopiedState}
                <div
                    class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-green-500 text-lg font-bold text-black"
                    in:scale={{ duration }}
                    out:scale={{ duration }}
                >
                    Copied!
                </div>
            {/if}
        </button>
    </div>
{:else if activeTab == 1}
    <div
        class="mx-auto mt-2 mb-4 flex h-fit w-[98%] flex-col items-center px-4 text-white shadow-lg shadow-black backdrop-blur-md backdrop-brightness-[90%] md:w-2/3 lg:w-1/2 xl:w-2/3 2xl:w-1/3"
        in:slide={{ duration, delay: duration }}
        out:slide={{ duration }}
    >
        <table
            class="table-auto border-separate border-spacing-x-4 border-spacing-y-2 xl:border-spacing-x-8 xl:border-spacing-y-4"
        >
            <tbody>
                <tr in:fly={{ x: 100, duration, delay: duration }} out:fly={{ x: 100, duration }}>
                    <td><img class="h-16 w-auto" src={Csharp} alt="C# Logo" /></td>
                    <td class="text-2xl">C#</td>
                    <td>
                        <p class="text-center">12 / 100</p>
                        <progress value="12" max="100"></progress>
                    </td>
                </tr>
                <tr
                    in:fly={{ x: -100, duration, delay: duration + 100 }}
                    out:fly={{ x: -100, duration: duration + 100 }}
                >
                    <td><img class="h-16 w-auto" src={Go} alt="GO Logo" /></td>
                    <td class="text-2xl">GO</td>
                    <td>
                        <p class="text-center">78 / 100</p>
                        <progress value="78" max="100"></progress>
                    </td>
                </tr>
                <tr
                    in:fly={{ x: 100, duration, delay: duration + 200 }}
                    out:fly={{ x: 100, duration: duration + 200 }}
                >
                    <td><img class="h-16 w-auto" src={Java} alt="JAVA Logo" /></td>
                    <td class="text-2xl">Java</td>
                    <td>
                        <p class="text-center">10 / 100</p>
                        <progress value="10" max="100"></progress>
                    </td>
                </tr>
                <tr
                    in:fly={{ x: -100, duration, delay: duration + 300 }}
                    out:fly={{ x: -100, duration: duration + 300 }}
                >
                    <td><img class="h-16 w-auto" src={JavaScript} alt="JavaScript Logo" /></td>
                    <td class="text-2xl">JavaScript</td>
                    <td>
                        <p class="text-center">95 / 100</p>
                        <progress value="95" max="100"></progress>
                    </td>
                </tr>
                <tr
                    in:fly={{ x: 100, duration, delay: duration + 400 }}
                    out:fly={{ x: 100, duration: duration + 400 }}
                >
                    <td><img class="h-16 w-auto" src={Kotlin} alt="Kotlin Logo" /></td>
                    <td class="text-2xl">Kotlin</td>
                    <td>
                        <p class="text-center">31 / 100</p>
                        <progress value="31" max="100"></progress>
                    </td>
                </tr>
                <tr
                    in:fly={{ x: -100, duration, delay: duration + 500 }}
                    out:fly={{ x: -100, duration: duration + 500 }}
                >
                    <td><img class="h-16 w-auto" src={Php} alt="PHP Logo" /></td>
                    <td class="text-2xl">PHP</td>
                    <td>
                        <p class="text-center">61 / 100</p>
                        <progress value="61" max="100"></progress>
                    </td>
                </tr>
                <tr
                    in:fly={{ x: 100, duration, delay: duration + 600 }}
                    out:fly={{ x: 100, duration: duration + 600 }}
                >
                    <td><img class="h-16 w-auto" src={Python} alt="Python Logo" /></td>
                    <td class="text-2xl">Python</td>
                    <td>
                        <p class="text-center">93 / 100</p>
                        <progress value="93" max="100"></progress>
                    </td>
                </tr>
                <tr
                    in:fly={{ x: -100, duration, delay: duration + 700 }}
                    out:fly={{ x: -100, duration: duration + 700 }}
                >
                    <td><img class="h-16 w-auto" src={Rust} alt="Rust Logo" /></td>
                    <td class="text-2xl">Rust</td>
                    <td>
                        <p class="text-center">73 / 100</p>
                        <progress value="73" max="100"></progress>
                    </td>
                </tr>
                <tr
                    in:fly={{ x: 100, duration, delay: duration + 800 }}
                    out:fly={{ x: 100, duration: duration + 800 }}
                >
                    <td><img class="h-16 w-auto" src={Zig} alt="Zig Logo" /></td>
                    <td class="text-2xl">Zig</td>
                    <td>
                        <p class="text-center">41 / 100</p>
                        <progress value="41" max="100"></progress>
                    </td>
                </tr>
            </tbody>
        </table>
        <p
            class="py-4"
            in:fly={{ x: -100, duration, delay: duration + 900 }}
            out:fly={{ x: 100, duration }}
        >
            <strong class="text-xl">NOTE:&nbsp;</strong>
            <code class="bg-indigo-600 p-1 font-bold text-black">TypeScript</code>
            is a VS Code Extension so it does
            <strong class="text-xl text-red-500">NOT</strong> count
        </p>
    </div>
{:else if activeTab == 2}
    <div
        class="mx-auto my-2 flex h-fit w-[98%] flex-col items-center px-4 text-white shadow-lg shadow-black backdrop-blur-md backdrop-brightness-[90%] md:w-2/3 lg:h-3/4 lg:w-2/3"
        in:slide={{ duration, delay: duration }}
        out:slide={{ duration }}
    >
        <h1 class="text-4xl font-bold text-red-500 underline">Under Construction</h1>
    </div>
{/if}

<style>
    td {
        text-align: center;
    }
    td img {
        margin-inline: auto;
    }

    progress {
        clip-path: polygon(
            20px 0%,
            100% 0%,
            100% calc(100% - 20px),
            calc(100% - 20px) 100%,
            0% 100%,
            0% 20px
        );
    }

    progress::-webkit-progress-bar {
        background-color: #eee;
    }

    progress::-webkit-progress-value {
        background-color: var(--color-cyan-500);
    }

    progress::-moz-progress-bar {
        background-color: var(--color-cyan-500);
    }
</style>
