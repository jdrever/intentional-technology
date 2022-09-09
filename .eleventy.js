const purgeCssPlugin = require("eleventy-plugin-purgecss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("css/");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPlugin(purgeCssPlugin, {
    // Optional: Specify the location of your PurgeCSS config
    config: "./purgecss.config.js",

    // Optional: Set quiet: true to suppress terminal output
    quiet: false,
  });


  eleventyConfig.addPairedShortcode("activity", function(content, title) {
    return `<div class="container-fluid rounded m-1 p-2 bg-light">
      <h2 class="text-dark display-6"><strong><i class="bi bi-heart-pulse"></i>&nbsp;ACTIVITY:&nbsp;</strong></span>${title}</strong></h2>
${content}
</div>`;
  });

  eleventyConfig.addPairedShortcode("idea", function(content, title) {
    return `<div class="container-fluid rounded m-1 p-2 bg-light">
      <h2 class="text-dark display-6"><strong><i class="bi bi-lightbulb-fill"></i>&nbsp;KEY IDEA:&nbsp;</strong></span>${title}</strong></h2>
${content}
</div>`;
  });

  eleventyConfig.addShortcode("nextButton", function(url) {
    return `<div class="float-right"><a class="btn btn-primary" href="${url}" role="button">NEXT &#8594;</a></div>`;
  });

}