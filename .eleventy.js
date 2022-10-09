const purgeCssPlugin = require("eleventy-plugin-purgecss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyEdgePlugin } = require("@11ty/eleventy");
const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("css/");

  eleventyConfig.addPassthroughCopy({ "node_modules/lite-youtube-embed/src/**": "css" });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyEdgePlugin);

  eleventyConfig.addPlugin(purgeCssPlugin, {
    // Optional: Specify the location of your PurgeCSS config
    config: "./purgecss.config.js",

    // Optional: Set quiet: true to suppress terminal output
    quiet: false,
  });

  eleventyConfig.addCollection('tagsList', (collectionApi) => {
    const tagsSet = new Set()
    collectionApi.getFilteredByTag("post").forEach((item) => {
      if (!item.data.tags) return
      item.data.tags
        .filter((tag) => !['post'].includes(tag))
        .forEach((tag) => tagsSet.add(tag))
    })
    return [...tagsSet].sort((a, b) => b.localeCompare(a))
  })


  eleventyConfig.addFilter('guideFilter', function(collection, guide) {
    if (!guide) return collection;
      const filtered = collection.filter(item => item.guideParent == guide)
      return filtered;
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

    // Get only content that matches a tag
    eleventyConfig.addCollection("guideSections", function(collectionApi) {
      return collectionApi.getFilteredByTag("guide-section")
        .sort((a, b) => a.order - b.order);
    });
    eleventyConfig.addCollection("myCustomSort", function(collectionApi) {
      return collectionApi.getAll().sort(function(a, b) {
        //return a.date - b.date; // sort by date - ascending
        //return b.date - a.date; // sort by date - descending
        //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
        return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
      });
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

  eleventyConfig.addPairedShortcode("youTube", function(title, videoId) {
    return `<lite-youtube videoid="${videoId}" playlabel="${title}"></lite-youtube>`;
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
    if (i<flat.length-1) { item.nextUrl = flat[i + 1].url; item.nextTitle=flat[i + 1].title; item.nextType=flat[i+1].type; }     
  }
  return flat;
});

}