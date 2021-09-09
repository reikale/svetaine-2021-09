module.exports = function(eleventyConfig){

  eleventyConfig.addPassthroughCopy('./src/public/css/styles.css');
  eleventyConfig.addPassthroughCopy('./images');
  eleventyConfig.setTemplateFormats("html,njk");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
const pageAssetsPlugin = require('eleventy-plugin-page-assets');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pageAssetsPlugin, {
        mode: "parse",
        postsMatching: "src/posts/*/*.md",
    });
};
