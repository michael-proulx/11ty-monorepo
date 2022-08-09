const sass = require('sass');
const eleventySass = require('../utils/eleventy-sass');

module.exports = function eleventyConfig(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass, sass);

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}