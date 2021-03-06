
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Env
  publicRuntimeConfig: {
    STORYBLOK_CONTENT_VERSION: process.env.STORYBLOK_DRAFT_CONTENT ?
      'draft' : 'published'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rues-cakery',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      process.env.STORYBLOK_DRAFT_CONTENT ? {} : {name: 'robots', content: 'noindex,nofollow'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { 
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:wght@200;400;600;800&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/common.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/global-components.js',
    {src: '~/plugins/window-resize-listener.js', mode: 'client'},
    '~/plugins/toolkit.js',
    '~/plugins/logger.js',
    {src: '~/plugins/v-date-picker.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/dayjs',
    'nuxt-interpolation',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory'
      }
    ],
  ],
  styleResources: {
    scss: [
      '@/assets/scss/index.scss'
    ]
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
