require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withImages = require("next-optimized-images");

module.exports = withPlugins([[withImages, { optimizeImages: false }]], {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
  // Expose certain environment variables to the client
  env: {
    GOOGLE_RECAPTCHA_KEY: process.env.GOOGLE_RECAPTCHA_KEY,
  },
});
