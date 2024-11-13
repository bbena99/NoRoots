module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*{.js,.ts}"
  ],
  theme: {
    extend: {
      bg1: "var(--color-bg1)",
      bg2: "var(--color-bg2)",
      header: "var(--color-header)",
      text: "var(--color-text)",
      hover: "var(--color-hover)",
      btn: "var(--color-btn)",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}