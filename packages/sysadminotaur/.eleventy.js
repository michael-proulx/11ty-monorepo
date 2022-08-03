const eleventySass = require('../utils/eleventy-sass');

module.exports = function eleventyConfig(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}