<script>
  export let view; // contains icon, inc, title,count ,percentage
  import dec from "./images/icon-down.svg";
  import inc from "./images/icon-up.svg";
</script>

<div class="w-full rounded-xl bg-card-bg-light dark:bg-card-bg-dark h-32 flex flex-col justify-around hover:brightness-95 dark:hover:brightness-110 hover:cursor-pointer ">
  <div class="flex w-full items-center justify-around mt-3">
    <p class="text-lg font-bold text-text-light dark:text-white">
      {view.title}
    </p>
    <img src={view.icon} alt="social media icon " width="20" height="20">
    
  </div>

    <div class="flex w-full items-center justify-around">
      <h3 class="text-2xl font-bold text-text-light-2 dark:text-text-dark-2">{view.count}</h3>
      <div class="flex items-center justify-between">
        <img src={view.inc ? inc:dec} alt="Icon">
        <p class={`${view.inc ? "text-lime-green":"text-bright-red"}`}>{view.percentage}</p>
      </div>

    </div>

</div>



