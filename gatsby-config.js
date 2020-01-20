module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    siteUrl: "https://ayushsharma.net/"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/"
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:300,400", "Roboto Mono"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-99625338-1",
        anonymize: true
      }
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./static/images/icons/logo.svg",
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          twitter: true,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ayush Sharma",
        short_name: "AS",
        start_url: "/",
        background_color: "#1e2732",
        theme_color: "#1e2732",
        display: "minimal-ui",
        icons: [
          {
            src: "/static/icons/logo.svg",
            type: "image/svg"
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-json",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-styled-components"
  ]
}
