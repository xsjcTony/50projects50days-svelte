<script lang="ts">
  import huTaoImg from '@/assets/images/genshin-impact-hu-tao.webp'


  let navOpened = false

  const openNav = () => void (navOpened = true)
  const closeNav = () => void (navOpened = false)
</script>


<svelte:head>
  <title>Rotating Navigation</title>
</svelte:head>

<main
  class="grid min-h-full origin-top-left place-items-center p-12.5 bg-[#222] transition-transform ease-linear duration-500"
  class:-rotate-[20deg]={navOpened}
>
  <div class="max-w-[1000px]">
    <h1 class="text-5xl">Rotating Navigation</h1>
    <p class="mb-5 italic text-gray-400">Aelita</p>

    <p class="mb-5">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet consectetur facere fugiat harum ipsam laboriosam natus quae qui quibusdam quidem, quod sit, soluta, veritatis voluptatibus. Aspernatur blanditiis facilis fugit, nostrum officiis quas quibusdam unde? A animi aperiam beatae consequatur, deleniti enim esse ex expedita hic in itaque minus modi obcaecati odit, pariatur qui repudiandae sunt ut velit, veritatis. Aliquid asperiores atque, consequuntur deleniti doloribus impedit incidunt, iste minus numquam quam sint sunt? A accusantium beatae deleniti dolore est fuga harum, in labore molestiae necessitatibus, officia perferendis reiciendis sed tempora temporibus. Commodi consequuntur deserunt dolor ducimus eius eligendi est et harum magnam modi nemo nobis non numquam odio, officia quisquam reiciendis rem reprehenderit soluta voluptate? Amet, aperiam architecto asperiores beatae dignissimos distinctio eaque eveniet exercitationem explicabo impedit in laboriosam laudantium libero maxime molestias nihil nulla perferendis, quasi quisquam quo repellat sed tempora velit vero vitae voluptatibus voluptatum. Expedita saepe, voluptas.
    </p>

    <img class="mb-5" src={huTaoImg} alt="hu tao" />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae consequatur corporis deleniti dolorum eius eligendi eos esse eum ex facilis fuga fugiat hic id in ipsa ipsam, iste iusto labore nam nihil odio qui quidem quisquam quod, quos ratione recusandae reiciendis saepe, sequi sint tempora vero voluptas. Eum, impedit?
    </p>
  </div>
</main>

<div
  class="fixed -top-25 -left-25 rounded-full transition-transform duration-500 ease-linear w-50 h-50 bg-pink"
  class:-rotate-90={navOpened}
>
  <span
    class="absolute top-1/2 left-1/2 inline-flex h-20 w-20 items-center justify-center text-3xl"
    on:click={openNav}
    on:keyup={openNav}
  >
    <i class="cursor-pointer fa-solid fa-bars"></i>
  </span>
  <span
    class="absolute top-1/2 left-5 inline-flex h-20 w-20 items-center justify-center text-3xl"
    on:click={closeNav}
    on:keyup={closeNav}
  >
    <i class="cursor-pointer fa-solid fa-xmark"></i>
  </span>
</div>

<nav class="fixed bottom-20 left-10">
  <ul class="flex flex-col gap-y-10 text-lg">
    <li class="flex items-center gap-x-5 transition-transform duration-500 {navOpened ? 'delay-500' : '-translate-x-full'}">
      <i class="fa-solid fa-house"></i>
      Home
    </li>
    <li class="ml-5 flex items-center gap-x-5 transition-transform duration-500 {navOpened ? 'delay-500' : '-translate-x-[150%]'}">
      <i class="fa-solid fa-user"></i>
      About
    </li>
    <li class="ml-10 flex items-center gap-x-5 transition-transform duration-500 {navOpened ? 'delay-500' : '-translate-x-[200%]'}">
      <i class="fa-solid fa-envelope"></i>
      Contact
    </li>
  </ul>
</nav>


<style lang="scss">
    :global(html, body) {
        @apply overflow-x-hidden bg-gray-800;
    }
</style>
