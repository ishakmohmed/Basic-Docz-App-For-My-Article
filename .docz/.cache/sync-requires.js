const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\User\\Desktop\\fk\\.docz\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\User\\Desktop\\fk\\.docz\\src\\pages\\404.js"))),
  "component---whatever-mdx": hot(preferDefault(require("C:\\Users\\User\\Desktop\\fk\\whatever.mdx")))
}

