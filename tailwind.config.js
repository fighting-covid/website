module.exports = {
  theme: {
    extend: {
      colors: {
        dark: "#304352",
        light: "whitesmoke",
        highlight: "#e44c65",
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
      body: this.sans,
      heading: this.serif,
    },
  },
};
