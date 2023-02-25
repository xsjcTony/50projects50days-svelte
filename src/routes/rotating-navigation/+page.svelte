<script lang="ts">
  import huTaoImg from '@/assets/images/genshin-impact-hu-tao.webp'
</script>


<svelte:head>
  <title>Rotating Navigation</title>
</svelte:head>

<main class="grid min-h-full place-items-center p-12.5">
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

<div class="fixed -top-25 -left-25 rounded-full w-50 h-50 bg-pink">
  <span class="absolute top-1/2 left-1/2 inline-flex h-20 w-20 items-center justify-center text-3xl">
    <i class="fa-solid fa-bars cursor-pointer"></i>
  </span>
  <span class="absolute top-1/2 left-5 inline-flex h-20 w-20 items-center justify-center text-3xl">
    <i class="fa-solid fa-xmark cursor-pointer"></i>
  </span>
</div>
