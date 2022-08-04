module.exports = function eleventyConfig(eleventyConfig) {
  eleventyConfig.addTemplateFormats("yml");

  eleventyConfig.addExtension("yml", {
    outputFileExtension: "yml",
    compile: function(inputContent) {
      return () => {
        return inputContent;
      }
    }
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}