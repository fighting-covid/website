module.exports = {
  plugins: [
    "tailwindcss",
    ...(process.env.PORT === "production"
      ? [
          [
            "@fullhuman/postcss-purgecss",
            {
              content: [
                "./pages/**/*.{js,jsx,ts,tsx}",
                "./components/**/*.{js,jsx,ts,tsx}",
              ],
              defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ]
      : []),
    "postcss-preset-env",
  ],
};
