module.exports = function (eleventyConfig) {
	// Pass through assets
	eleventyConfig.addPassthroughCopy("src/assets/js");
	eleventyConfig.addPassthroughCopy("src/assets/images");

	// Date filters
	eleventyConfig.addFilter("dateReadable", (dateObj) => {
		return new Date(dateObj).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	});

	eleventyConfig.addFilter("dateIso", (dateObj) => {
		return new Date(dateObj).toISOString().split("T")[0];
	});

	// Current year shortcode
	eleventyConfig.addShortcode(
		"currentYear",
		() => `${new Date().getFullYear()}`,
	);
	eleventyConfig.addFilter(
		"currentYear",
		() => `${new Date().getFullYear()}`,
	);

	// Slugify filter
	eleventyConfig.addFilter("slugify", (str) => {
		return str
			.toLowerCase()
			.replace(/[^\w\s-]/g, "")
			.replace(/\s+/g, "-");
	});

	// Keys filter for iterating over collections
	eleventyConfig.addFilter("keys", (obj) => Object.keys(obj));

	// Watch CSS for changes
	eleventyConfig.addWatchTarget("src/assets/css/");

	return {
		dir: {
			input: "src",
			output: "_site",
			includes: "_includes",
			data: "_data",
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
};
