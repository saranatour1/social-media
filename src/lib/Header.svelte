<script>
  import { onMount } from "svelte";

  let isDark = false;
  let theme;

  const toggleMode = () => {
    isDark = !isDark;
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    localStorage.theme = isDark ? "dark" : "";
  };

  onMount(() => {
    theme = localStorage.theme;

    window.matchMedia("(prefers-color-scheme: dark)").matches && !theme
      ? (localStorage.theme = "dark")
      : localStorage.removeItem("theme");

    console.log(theme);
  });
</script>

<header class="w-10/12 flex justify-between items-center mt-10 max-sm:w-11/12  max-sm:flex-col max-sm:items-start">
  <hgroup class="flex flex-col items-start justify-between">
    <h3 class=" font-bold text-3xl text-text-light-2 dark:text-text-dark-2">
      Social Media Dashboard
    </h3>
    <p class="text-sm text-text-light font-semibold dark:text-text-dark-2">
      Total Followers: 23,004
    </p>
  </hgroup>
  <hr
    class="w-full my-5 hidden max-sm:flex bg-text-light font-bold dark:bg-text-light dark:opacity-30"
  />
  <div class="flex justify-center items-center max-sm:justify-between max-sm:w-full">
    <span class="mr-3  text-text-light font-semibold text-base dark:text-text-dark-2 capitalize">
      {isDark ? "dark" : "light"} mode
    </span>
    <input
      type="checkbox"
      id="hs-basic-usage"
      class="relative w-[3.25rem] h-7 bg-toggle  checked:bg-none checked:bg-toggle-bg-dark  border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200   ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
    before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
      on:change={toggleMode}
    />
    <label for="hs-basic-usage" class="sr-only">switch</label>
  </div>
</header>
<style>
input[type="checkbox"]:checked {
  background-image: linear-gradient(
    to right,
    hsl(210, 78%, 56%),
    hsl(146, 68%, 55%)
  );
}
</style>
