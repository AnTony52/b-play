//  Adding Bootstrap
/* ref:
https://stackoverflow.com/questions/47968256/what-is-best-way-for-including-bootstrap-css-to-nuxt-project
And this ref: https://bootstrap-vue.org/docs*/
// Fixing baseUrl 
/* ref:
https://stackoverflow.com/questions/59474480/using-baseurl-in-jsconfig-json-not-working-with-nextjs */
// cmt due to affecting libraries path
// const path = require('path')

// module.exports = {
//   webpack: config => {
//     config.resolve.modules.push(path.resolve('./'))

//     return config
//   }
// }

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // router: { base: '/b-play/' },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bplay',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap-vue',
    { ssr: false, src: '~plugins/hello' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module'
  ],
  // gsap
  gsap: {
    // module options
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
