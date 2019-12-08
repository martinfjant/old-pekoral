module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addFilter("squash", require("./src/_filters/squash.js"));

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["pug", "njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk"
  };
};
