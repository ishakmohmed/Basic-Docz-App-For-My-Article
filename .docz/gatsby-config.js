const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Fk',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\User\\Desktop\\fk\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Fk',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\User\\Desktop\\fk',
          templates:
            'C:\\Users\\User\\Desktop\\fk\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\User\\Desktop\\fk\\.docz',
          cache: 'C:\\Users\\User\\Desktop\\fk\\.docz\\.cache',
          app: 'C:\\Users\\User\\Desktop\\fk\\.docz\\app',
          appPackageJson: 'C:\\Users\\User\\Desktop\\fk\\package.json',
          appTsConfig: 'C:\\Users\\User\\Desktop\\fk\\tsconfig.json',
          gatsbyConfig: 'C:\\Users\\User\\Desktop\\fk\\gatsby-config.js',
          gatsbyBrowser: 'C:\\Users\\User\\Desktop\\fk\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\User\\Desktop\\fk\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\User\\Desktop\\fk\\gatsby-ssr.js',
          importsJs: 'C:\\Users\\User\\Desktop\\fk\\.docz\\app\\imports.js',
          rootJs: 'C:\\Users\\User\\Desktop\\fk\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Users\\User\\Desktop\\fk\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\Users\\User\\Desktop\\fk\\.docz\\app\\index.html',
          db: 'C:\\Users\\User\\Desktop\\fk\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
