const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/src/pages/index.js"))),
  "component---src-pages-profile-js": hot(preferDefault(require("/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/src/pages/profile.js"))),
  "component---src-pages-works-js": hot(preferDefault(require("/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/src/pages/works.js")))
}

