<script>
  export let linkObject; // contains username, logo, color, followers,increase, decrease 
  import dec from "./images/icon-down.svg";
  import inc from "./images/icon-up.svg";
</script>


<div class="flex flex-col h-56  items-center justify-between w-full rounded-xl bg-card-bg-light dark:bg-card-bg-dark hover:brightness-95 dark:hover:brightness-110 hover:cursor-pointer ">

  <span class={` w-full px-4 h-1  rounded-tl-xl rounded-tr-xl`} style={`background:${linkObject.color}`}></span>

  <div class="flex items-center justify-around ">
    <img class="mr-3" src={linkObject.logo} alt={`social media logo of ${linkObject.title}`} width="24" height="24">
    <p class="text-text-light font-bold dark:text-text-dark-2">{linkObject.userName}</p>
  </div>

  <h5 class="text-5xl font-bold text-text-light-2 dark:text-text-dark-2">
    {linkObject.followers}
  </h5>
  <p class="tracking-widest uppercase text-text-light text-sm dark:text-white">followers</p>
  <span class={`text-${linkObject.increase ? 'lime-green' : 'bright-red'} flex justify-center items-center mb-2 text-lg `}>
    <img src={linkObject.increase ? inc : dec} alt={linkObject.increase ? 'increase icon' : 'decrease icon'} class="mr-2" width="12" height="12">
    {linkObject.today} Today
  </span>
  
</div>

