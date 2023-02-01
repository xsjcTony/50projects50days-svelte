<script lang="ts">
  interface Project {
    title: string
    link: `/${string}`
  }


  const projects: Project[] = [
    {
      title: '01 - Expanding Cards',
      link: '/01-expanding-cards'
    }
  ]
</script>


<main class="grid place-items-center min-h-full">
    {#each projects as { title, link }}
        <a href="{link}" target="_blank" rel="noreferrer">{title}</a>
    {/each}
</main>


<style lang="scss">
    a {
        @apply underline text-pink;
    }
</style>
