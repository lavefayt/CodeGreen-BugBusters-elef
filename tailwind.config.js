/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        textgreen: "#86C232",
        buttongreen: "#61892F",
        inputfield: "#6B6E70",
        hoverbutton: "#222629",
    },
    backgroundImage: {
      'login-bg': "url('/assets/login.png')",
      'signup-bg': "url('/assets/signup.png')",
      'homepage-bg': "url('/assets/homepage.png')",
      'about-bg': "url('/assets/about.png')",
  },
  plugins: [],
  }}};
