/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo1': "url('/public/img/susieheadline.png')",
        'logo2': "url('/public/img/logo.png')",
        'retreat': "url('/public/img/retreat.jpg')",
        'main': "url('/public/img/main.png')",
      },
      colors: {
        's1' : "#FsF6F6",
        's2' : "#CB627E",
        's3' : "#C89839",
        's4' : "#A0B0A4",
        's5' : "#6B819A",
        's6' : "#231F20",
        's7' : "#FFFFFF",
        's8' : "#E3D5D2",
        's9' : "#EAE8DE",
        's10' : "#D1DBD4",
        's11' : "#C1CCD3",
        's12' : "#0E2647",
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
