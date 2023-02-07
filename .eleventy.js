/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = (eleventyConfig) => {
  //   eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy({ 'src/meta': '/' });
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
