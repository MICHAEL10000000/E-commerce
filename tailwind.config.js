/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* SC for special Color */
         SCOrange: 'hsl(26, 100%, 55%)',
         SCPaleorange: 'hsl(25, 100%, 94%)',

         /*  ### Neutral */

         SCVerydarkblue: 'hsl(220, 13%, 13%)',
         SCDarkgrayishblue: 'hsl(219, 9%, 45%)',
         SCGrayishblue: 'hsl(220, 14%, 75%)',
         SCLightgrayishblue: 'hsl(223, 64%, 98%)',
         SCWhite: 'hsl(0, 0%, 100%)',
         SCBlacky:'hsl(0, 0%, 0%)',
         SCSVerydarkblue: 'hsl(220, 13%, 13%, 0.5)',

     },
     fontFamily: {
      "Kumbh-Sans": ["Kumbh-Sans"],
      "Kumbh-B" : ["Kumbh-B"],
      "Kumbh-M" : ["Kumbh-M"],
      "Kumbh-R" : ["Kumbh-R"]
     }
    },
  },
  plugins: [],
}

