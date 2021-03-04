module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      translate: ["motion-reduce"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
