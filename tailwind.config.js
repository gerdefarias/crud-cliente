/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  safelist: [
    /^bg-/,
    /^to-/,
    /^from-/,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
