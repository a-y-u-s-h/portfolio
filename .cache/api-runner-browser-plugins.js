module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Roboto:300,400","Roboto Mono"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-99625338-1","anonymize":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Ayush Sharma","short_name":"AS","start_url":"/","background_color":"#1e2732","theme_color":"#1e2732","display":"minimal-ui","icons":[{"src":"/static/icons/logo.svg","type":"image/svg"}]},
    }]
