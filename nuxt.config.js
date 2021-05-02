export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lapel Pins & Coins | Promotional Items | Same Day Designs',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/components.js',
      defer: true
    }, {
      src: "~/plugins/vClickOutside.client.js"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-lazy-load',
    // 'nuxt-stripe-module',
    ['storyblok-nuxt', {
      accessToken: 'qnrtI6sWwGdAhvSqj0Dssgtt',
      cacheProvider: 'memory'
    }],
    '@nuxtjs/sitemap',
    '@nuxtjs/axios'
    // 'nuxt-purgecss'
  ], 
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'webp', 'svg'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 90
    }
  },
  sitemap: {
    hostname: 'https://lapelpinsandcoins.com',
    gzip: true,
    exclude: [
      '/admin/**',
      '/admin',
      '/test',
      '/test2',
      '/test3',
      '/hero2',
      '/hero3',
      '/update',
      '/quote2',
      '/index2'
    ],
    routes: [
      '/pins/soft-enamel',
      '/pins/hard-enamel',
      '/pins/die-struck',
      '/pins/offset-printed',
      '/pins/silk-screen',
      '/coins/event',
      '/coins/fire-department',
      '/coins/nursing',
      '/coins/military',
      '/coins/police',
      '/privacy',
      '/feedback',
      {
        url: 'blog',
        changefreq: 'weekly'
      }
    ]
  },
  // tailwindcss: {
  //   configPath: './tailwind.config.js',
  //   cssPath: './assets/css/tailwind.css',
  //   exposeConfig: true
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', {
          loose: true
        }]
      ]
    }
  }
}
