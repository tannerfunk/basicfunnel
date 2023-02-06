/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo1': "url('/public/img/susieheadline.png')",
        'logo2': "url('/public/img/logo.png')",
      },
      colors: {
        's5' : "#6B819A",
        's2' : "#CB627E",
        's6' : "#231F20",
        's4' : "#A0B0A4",
        's8' : "#E3D5D2",
        's12' : "#0E2647",
        's9' : "#EAE8DE",
        's10' : "#D1DBD4",
        's3' : "#C89839",
        's11' : "#C1CCD3"
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
