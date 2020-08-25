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
  }
};
