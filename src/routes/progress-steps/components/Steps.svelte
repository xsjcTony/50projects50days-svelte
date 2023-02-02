<script lang="ts">
  export let steps: number
  export let currentStep: number

  $: percentage = (currentStep - 1) / (steps - 1)
</script>


<div
  class="relative flex w-full justify-between before:absolute before:w-[calc(100%-2rem)] before:h-1 before:bg-pink-800 before:top-1/2 before:-translate-y-1/2 before:-z-[2] before:l-0 before:translate-x-4 isolate after:absolute after:w-[calc(100%-2rem)] after:h-1 after:bg-pink after:top-1/2 after:-translate-y-1/2 after:-z-[1] after:l-0 after:translate-x-4 after:origin-left after:transition-[transform] after:duration-[.4s]"
  id="steps_container"
  style:--percentage={percentage}
>
  {#each Array(steps) as _, index}
    <span
      class="inline-flex h-8 w-8 items-center justify-center rounded-full border-[3px] text-white border-pink-800 bg-[#222] select-none transition-[border] duration-[.4s]"
      class:active={currentStep > index}
    >
      {index + 1}
    </span>
  {/each}
</div>


<style lang="scss">
    #steps_container::after {
        transform: translate(1rem, -50%) scaleX(var(--percentage, 0));
    }

    .active {
        @apply border-pink
    }
</style>
