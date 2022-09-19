const purgeCssPlugin = require("eleventy-plugin-purgecss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyEdgePlugin } = require("@11ty/eleventy");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("css/");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyEdgePlugin);

  eleventyConfig.addPlugin(purgeCssPlugin, {
    // Optional: Specify the location of your PurgeCSS config
    config: "./purgecss.config.js",

    // Optional: Set quiet: true to suppress terminal output
    quiet: false,
  });

  eleventyConfig.addFilter('guideFilter', function(collection, guide) {
    if (!guide) return collection;
      const filtered = collection.filter(item => item.guideParent == guide)
      return filtered;
  });

    // Get only content that matches a tag
    eleventyConfig.addCollection("guideSections", function(collectionApi) {
      return collectionApi.getFilteredByTag("guide-section")
        .sort((a, b) => a.order - b.order);
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


  eleventyConfig.addPairedShortcode("guidance", function(content, title) {
    return `<div class="container-fluid rounded m-1 p-2 bg-light">
      <h2 class="text-dark display-6"><strong><i class="bi bi-compass"></i>&nbsp;GUIDANCE:&nbsp;</strong></span>${title}</strong></h2>
${content}
</div>`;
  });

  eleventyConfig.addPairedShortcode("link", function(title, url) {
    return `<a href="${url}" target="_blank" rel="noreferrer">
      ${title}</a>`;
  });

  eleventyConfig.addPairedShortcode("readMore", function(content,title) {
    return `
    <details>
      <summary><span class="h2 text-dark">FIND OUT MORE: ${title} &darr;</summary>
      ${content}
    </details>
  `;
  });

  /**
 * Flatten a navigation object into an array, and add "next" and "prev"
 * properties.
 */
eleventyConfig.addFilter('flattenNavigationAndAddNextPrev', (nav) => {
  const flat = [];
  const visit = (items) => {
    for (const item of items) {
      flat.push(item);
      visit(item.children);
    }
  };
  visit(nav);
  for (let i = 0; i < flat.length; i++) {
    const item = flat[i];
    if (i>0) { item.prevUrl = flat[i - 1].url;  item.prevTitle=flat[i - 1].title } 
    if (i<flat.length-1) { item.nextUrl = flat[i + 1].url; item.nextTitle=flat[i + 1].title} 
  }
  return flat;
});

}