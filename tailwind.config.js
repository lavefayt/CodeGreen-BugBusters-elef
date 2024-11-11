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
        secondgrey: "#474B4F"
    },
      backgroundImage: {
        'login-bg': "url('/assets/login.jpg')",
        'signup-bg': "url('/assets/signup.png')",
        'homepage-bg': "url('/assets/homepage.png')",
        'about-bg': "url('/assets/about.png')",
    },
      fontFamily: {
        syke: ['Syke', 'sans-serif'],
        'syke-light': ['Syke-Light', 'sans-serif'],
        'syke-bold': ['Syke-Bold', 'sans-serif'],
        'syke-medium': ['Syke-Medium', 'sans-serif'],
        'syke-thin': ['Syke-Thin', 'sans-serif'],
        'syke-black': ['Syke-Black', 'sans-serif'],
    },
  plugins: [],
  }}};
