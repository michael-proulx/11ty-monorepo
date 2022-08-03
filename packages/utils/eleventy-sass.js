const sass = require('sass');
const path = require('path');

module.exports = (eleventyConfig, options = {}) => {
  eleventyConfig.addTemplateFormats('scss');

  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    getData: async() => ({ eleventyExcludeFromCollections: true }),
    compile: function(inputContent, inputPath) {
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith('_')) {
        return;
      }

      const result = sass.compileString(inputContent, {
        style: 'compressed',
        sourceMap: true,
        loadPaths: [
          parsed.dir || '.',
          this.config.dir.includes
        ]
      });

      return () => {
        return result.css;
      };
    },
    compileOptions: {
      cache: false
    }
  });

}