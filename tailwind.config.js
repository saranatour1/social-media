/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "lime-green":"hsl(163, 72%, 41%)",
        "bright-red":"hsl(356, 69%, 56%)",
        "facebook":"hsl(208, 92%, 53%)",
        "twitter":"hsl(203, 89%, 53%)",
        "instagram":"linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        "youtube":"hsl(348, 97%, 39%)",
        "toggle":"hsl(230, 22%, 74%)",
        //dark-mode
        "bg-dark":"hsl(230, 17%, 14%)",
        "top-bg-dark":"hsl(232, 19%, 15%)",
        "card-bg-dark":"hsl(228, 28%, 20%)",
        "text-dark":"hsl(228, 34%, 66%)",
        "text-dark-2":"hsl(0, 0%, 100%)",
        "toggle-bg-dark":"linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        //light-mode
        "bg-light":"hsl(0, 0%, 100%)",
        "top-bg-light":"hsl(225, 100%, 98%)",
        "card-bg-light":"hsl(227, 47%, 96%)",
        "text-light":"hsl(228, 12%, 44%)",
        "text-light-2":"hsl(230, 17%, 14%)",        
      },
      fontFamily:{
        "sans":["Inter","sans-serif"],
      },fontWeight:{
        "bold":"700",
        "normal":"400",
      },
    },

  },
  plugins: [],
}

