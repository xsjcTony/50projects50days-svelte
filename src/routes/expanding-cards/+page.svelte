<script lang="ts">
  interface Item {
    name: string
    src: string
  }


  const items: Item[] = [
    { name: 'Lorem ipsum', src: `https://picsum.photos/1350/900?t=${Math.random()}` },
    { name: 'Dolor Sit', src: `https://picsum.photos/1350/900?t=${Math.random()}` },
    { name: 'Amet Consectetur', src: `https://picsum.photos/1350/900?t=${Math.random()}` },
    { name: 'Adipisicing Elit', src: `https://picsum.photos/1350/900?t=${Math.random()}` },
    { name: 'Illum Rerum', src: `https://picsum.photos/1350/900?t=${Math.random()}` }
  ]


  let activeIndex = 0

  const setActiveIndex = (index: number): void => {
    activeIndex = index
  }

  $: isActive = (index: number): boolean => activeIndex === index
</script>


<svelte:head>
    <title>Expanding Cards</title>
</svelte:head>

<main class="grid min-h-full place-items-center">
    <div class="w-[90vw] h-[80vh] flex gap-x-5">
        {#each items as { name, src }, index}
            <div
                class="rounded-[50px] relative cursor-pointer overflow-hidden bg-center transition-[flex-grow] duration-700 ease-in bg-cover {isActive(index) ? 'grow-[5]' : 'grow-[0.5]'}"
                on:click={() => void setActiveIndex(index)}
                on:keydown={() => void setActiveIndex(index)}
                style:background-image={`url(${src})`}
            >
                <span
                    class="absolute bottom-5 left-5 whitespace-nowrap text-2xl font-bold text-white transition-opacity duration-300 ease-in [text-shadow:#000_1px_0_10px]
                    {isActive(index) ? 'opacity-1 delay-[.4s]' : 'opacity-0 delay-0'}"
                >
                    {name}
                </span>
            </div>
        {/each}
    </div>
</main>
