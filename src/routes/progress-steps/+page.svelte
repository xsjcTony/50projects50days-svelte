<script lang="ts">
import Steps from '@/routes/progress-steps/components/Steps.svelte'


const steps = 6
let currentStep = 1

const increaseStep = () => void (currentStep < steps && (currentStep = currentStep + 1))
const decreaseStep = () => void (currentStep > 1 && (currentStep = currentStep - 1))
</script>


<svelte:head>
  <title>Progress Steps</title>
</svelte:head>

<main class="grid min-h-full place-items-center">
  <div class="flex w-3/5 flex-col items-center gap-y-10">
    <Steps steps={steps} currentStep={currentStep} />
    <div class="flex gap-x-4">
      <button
        class="border text-white px-8 py-1.5 rounded-md shadow-[0_0_10px] shadow-transparent duration-[.4s] transition-shadow
          {currentStep === 1
            ? 'bg-gray-400 border-gray-400 cursor-not-allowed'
            : 'border-pink active:scale-[.95] hover:shadow-white'}"
        on:click={decreaseStep}
        disabled={currentStep === 1}
      >
        Prev
      </button>
      <button
        class="border text-white px-8 py-1.5 rounded-md shadow-[0_0_10px] shadow-transparent duration-[.4s] transition-shadow
          {currentStep === steps
            ? 'bg-gray-400 border-gray-400 cursor-not-allowed'
            : 'border-pink active:scale-[.95] hover:shadow-white'}"
        on:click={increaseStep}
        disabled={currentStep === steps}
      >
        Next
      </button>
    </div>
  </div>
</main>
