require("dotenv").config();
const images = require("next-images");

module.exports = images({
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
