<script lang="ts">
  let expanded = true

  let inputEl: HTMLInputElement

  const toggleInput = (): void => {
    expanded = !expanded
    expanded && inputEl.focus()
  }
</script>


<main class="grid min-h-full place-items-center text-pink">
  <div class="hidden-search-container">
    <input
      type="text"
      class="text-xl bg-[#111] py-2 focus-visible:outline-none transition-[padding,width] duration-300 relative {expanded ? 'w-75 px-4' : 'w-0'}"
      bind:this={inputEl}
    />
    <i class="separator" class:!w-0={!expanded}></i>
    <button
      class="bg-[#111] inline-flex items-center justify-center px-4"
      on:click={toggleInput}
    >
      <i class="fa-solid fa-magnifying-glass" />
    </button>
  </div>
</main>


<style lang="scss">
    .hidden-search-container {
        @apply flex overflow-hidden rounded-lg border border-gray-500 h-12.5 transition-[border-color,box-shadow] duration-300;

        & > .separator {
            @apply bg-gray-500 w-px transition-[background-color,width] duration-300;
        }

        &:has(input:focus-visible) {
            @apply border-pink shadow-[0_0_10px_-2px_#fff];

            & > .separator {
                @apply bg-pink;
            }
        }
    }
</style>
