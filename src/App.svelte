<script>
  import Header from "./lib/Header.svelte";
  import View from "./lib/View.svelte";
  import "./app.css";
  import "./globals.css";

  import { socialLinksOverview } from "./lib/store";
  import { overviewToday } from "./lib/store";
  import SocialCard from "./lib/SocialCard.svelte";

</script>

<main class=" font-sans w-screen h-screen 2xl:h-screen 3xl:h-screen max-xl:h-screen max-lg:h-screen max-md:h-full  lg:h-screen  xl:h-sceeen md:h-full sm:h-full max-sm:h-full flex m-0 p-0 flex-col items-center bg-bg-light dark:bg-bg-dark ">
  <Header/>

  <div class=" grid  grid-cols-4 gap-5  w-10/12 place-content-center mt-8 md:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 xl:grid-cols-4">
    {#each $socialLinksOverview as link}
    <SocialCard linkObject={link} />
  {/each}
  </div>

  <div class="w-10/12 flex items-start justify-start">
    <h3 class="my-5 text-xl font-bold text-text-light-2 dark:text-white">  Overview - Today</h3>
  </div>

  <div class="w-10/12 grid grid-cols-4 grid-rows-2 gap-4 mb-6 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-1 xl:grid-cols-4">
    {#each $overviewToday as view }
    <View view={view} />
    {/each}
  </div>



</main>

<style>

</style>

