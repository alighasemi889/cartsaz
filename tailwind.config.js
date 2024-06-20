/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
         100:'#DFEFFF',
         200:'#60B1FE',
         300:'#0172DE',
         400: '#0182fe'
        },
        orange:{
          100:'#FFE7DF',
          200:'#FE8660',
          300:'#DE3601',
          400:"#FE3E01"
        },
        red:{
          100:'#FFF2F2',
          200:'#ED2E2E',
          300:'#C30000',
          400:"#D12879",
        },
        yellow:{
          100:'#FFF8E1',
          200:'#F4B740',
          300:'#A9791C',
        },
        green:{
          100:'#F3FDFA',
          200:'#00BA88',
          300:'#00966D',
        },
        black:'#171F26',
        white:'#FFFFFF',
        bg:'#EDEDED',
        gray:'#74787C',
        cardBorder:'#CBCBCB',
      },
      fontFamily:{
        iranYekan: ['"iranYekan"', "sans-serif"],
        iranYekanBold:['"iranYekanBold"',"sans-serif"]
      },
      backgroundImage:{
        'footer-section':"url('/images/footer/footer-bg.svg')",
        'displaySection':"url('/images/Home/display-style.svg')",
        'displaySection2':"url('/images/Home/phone14-display-style.svg')",

      },
      boxShadow:{
        'xl':'0px 4px 9px -8px rgba(0, 0, 0, 0.12)'
      },
      animation:{
        'infinite-arrow':'infinite-scroll 5s linear infinite'
      },
      keyframes:{
        'infinite-scroll':{
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(20px)' },
        }
      }
    },
  },
  plugins: [],
}

