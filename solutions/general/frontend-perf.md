# Optimizing Front End Performance
The following is a keyword list of ways to improve frontend performance.
Any of these could be talked about at length.

#### HTML
- Remove whitespace wherever possible
- Enable gzip compression
- Pre-fetch assets
- Specify a character set
- Load content asynchronously where possible

#### CSS
- Concatenate CSS files
- Minify CSS
- Use efficient CSS selectors
- Enable gzip compression
- Use a CDN for contrib CSS
- Use inline CSS where it makes sense

#### JavaScript
- Combine JS files
- Minify JS
- Put JS imports at end of `<body>`
- Use a CDN for contrib JS
- Enable gzip compression
- Use intelligent script loaders

#### Images
- Use sprites where possible
- Compress images
- Serve scaled (responsive) images
- Use CSS animations and SVGs instead of images where possible

#### Caching
- Use CDNs wherever possible
- Use browser caching
- Make redirects cacheable


---
Bonus points to any candidates who talk about performance benchmarking code, server side vs. client side rendering, Google Page Speed or building page speed benchmarks into CI.
