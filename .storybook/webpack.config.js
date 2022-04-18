const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../src"),
    "@components": path.resolve(__dirname, "../src/components"),
    "@hooks": path.resolve(__dirname, "../src/hooks"),
  };

  return config;
};
