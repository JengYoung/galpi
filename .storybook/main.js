const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@stories": path.resolve(__dirname, "../src/stories"),
    };
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
}
