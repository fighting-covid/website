module.exports = {
  theme: {
    extend: {
      colors: {
        dark: "#304352",
        "dark-secondary": "#445563",
        light: "whitesmoke",
        "light-secondary": "#E5E5E5",
        accent: "#e44c65",
        "accent-secondary": "#CD445A",
      },
      opacity: {
       '0': '0',
       '10': '.1',
       '20': '.2',
       '30': '.3',
       '40': '.4',
       '50': '.5',
       '60': '.6',
       '70': '.7',
       '80': '.8',
       '90': '.9',
       '100': '1',
      }
    },
    fontFamily: {
      sans: [
        "Barlow",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "Baskervville",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
    },
  },
  variants: {
     visibility: ['responsive', 'hover', 'focus', 'group-hover'],
     display: ['responsive', 'hover', 'focus', 'group-hover'],
     opacity: ['responsive', 'hover', 'focus', 'group-hover'],
     verticalAlign: ['responsive', 'hover', 'focus'],
     alignContent: ['responsive', 'hover', 'focus'],
  }
};