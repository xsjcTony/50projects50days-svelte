<script lang="ts">
  interface Project {
    title: string
    link: `/${string}`
  }


  const projects: Project[] = [
    {
      title: 'Expanding Cards',
      link: '/expanding-cards'
    },
    {
      title: 'Progress Steps',
      link: '/progress-steps'
    },
    {
      title: 'Rotating Navigation',
      link: '/rotating-navigation'
    }
  ]
</script>


<main class="grid place-items-center min-h-full">
    <div class="flex flex-col">
        {#each projects as { title, link }, index}
            <a href="{link}" target="_blank" rel="noreferrer">
                {(index + 1).toString(10).padStart(2, '0')} - {title}
            </a>
        {/each}
    </div>
</main>


<style lang="scss">
    a {
        @apply underline text-pink;
    }
</style>
