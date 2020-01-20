var plugins = [{
      plugin: require('/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-99625338-1","anonymize":true},
    },{
      plugin: require('/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/node_modules/gatsby-plugin-favicon/gatsby-ssr'),
      options: {"plugins":[],"logo":"./static/images/icons/logo.svg","injectHTML":true,"icons":{"android":false,"appleIcon":true,"appleStartup":false,"coast":false,"favicons":true,"firefox":false,"twitter":true,"yandex":false,"windows":false}},
    },{
      plugin: require('/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Ayush Sharma","short_name":"AS","start_url":"/","background_color":"#1e2732","theme_color":"#1e2732","display":"minimal-ui","icons":[{"src":"/static/icons/logo.svg","type":"image/svg"}]},
    },{
      plugin: require('/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/mnt/Code/work/personal/websites/a-y-u-s-h.github.io/portfolio/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
