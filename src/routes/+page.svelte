<script lang="ts">
  import type { Project } from './types'

  const projects: Project[] = [
    {
      title: '01 - Expanding Cards',
      link: '/01-expanding-cards'
    }
  ]
</script>


{#each projects as { title, link }}
    <a href="{link}" target="_blank" rel="noreferrer">{title}</a>
{/each}


<style lang="scss">
    a {
        @apply underline text-pink-400;
    }
</style>
