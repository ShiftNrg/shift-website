export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_title || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  router: {
    base: '/'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/sass/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/data/index/data.json.js', mode: 'client' },
    { src: '@/plugins/index.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/svg-sprite'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    filenames: {
      app: '[name].js', // [chunkhash].js',
      chunk: '[name].js', // [chunkhash].js',
      css: '[name].css', // [contenthash].css',
      img: '[path][name].[ext]', // img/[hash:7].[ext]'
      font: '[path][name].[ext]', // fonts/[hash:7].[ext]'
      video: '[path][name].[ext]' // videos/[hash:7].[ext]
    }
  }
}
