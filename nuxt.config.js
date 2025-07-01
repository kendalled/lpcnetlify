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
      { hid: 'description', name: 'description', content: 'Custom lapel pins, challenge coins & keychains with free artwork and same-day quotes. Professional quality with 20+ years experience. Get started today!' },
      { hid: 'keywords', name: 'keywords', content: 'custom lapel pins, challenge coins, keychains, promotional items, military pins, corporate gifts, enamel pins' },
      { name: 'author', content: 'Lapel Pins & Coins' },
      { name: 'robots', content: 'index, follow' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Lapel Pins & Coins' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@lapelpinscoins' }
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
      src: '~/plugins/vClickOutside.client.js'
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
      '/index2',
      '/login',
      '/checkout',
      '/thanks',
      '/ordered',
      '/feedbackthanks',
      '/tracking'
    ],
    routes: [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        url: '/pins',
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        url: '/coins',
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        url: '/keychains',
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        url: '/products',
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        url: '/quote',
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        url: '/contact',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/blog',
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        url: '/pins/soft-enamel',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/pins/hard-enamel',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/pins/die-struck',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/pins/offset-printed',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/pins/silk-screen',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/coins/event',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/coins/fire-department',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/coins/nursing',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/coins/military',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/coins/police',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        url: '/privacy',
        changefreq: 'yearly',
        priority: 0.3
      },
      {
        url: '/tos',
        changefreq: 'yearly',
        priority: 0.3
      },
      {
        url: '/feedback',
        changefreq: 'yearly',
        priority: 0.5
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
    html: {
      minify: {
        removeRedundantAttributes: false
      }
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', {
          loose: true
        }]
      ]
    }
  }
}
