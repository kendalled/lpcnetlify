<template>
  <div class="relative overflow-hidden bg-white">
    <div class="hidden mt-6 lg:block lg:absolute lg:inset-0">
      <svg class="absolute top-0 transform translate-x-64 -translate-y-8 left-1/2" width="640" height="784" fill="none" viewBox="0 0 640 784">
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="absolute z-50 text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          y="72"
          rx="4"
          width="640"
          height="500"
          class="text-gray-50"
          fill="currentColor"
        />
        <!-- 100 y was good -->
        <rect
          x="118"
          width="404"
          height="644"
          y="40"
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>
    <!-- was "relative pt-6 pb-16 md:pt-8 lg:pt-10 md:pb-20 lg:pb-24" -->
    <div class="relative pt-6 pb-20 md:pb-24 lg:pb-28">
      <!-- was old navs add md:pt-12 above -->
      <main class="max-w-screen-xl px-4 mx-auto mt-8 sm:mt-12 sm:pr-6 sm:pl-8 md:mt-20 xl:mt-24">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div class="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
              Same-day reply
            </div>
            <h1 class="mt-1 text-4xl antialiased font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
              <span class="block">Custom designed items <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">in minutes.</span></span>
            </h1>
            <!-- TODO: maybe remove pr-12? -->
            <p class="mt-3 text-base text-gray-500 lg:pr-12 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              We have produced &amp; designed personalized pins, challenge coins, and keychains for over 20 years. Get your free art proof today &mdash; no commitment necessary.
            </p>
            <div class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p class="text-base font-medium text-gray-900">
                Get started in minutes with a free quote.
              </p>
              <form action="#" method="POST" class="mt-3 sm:flex">
                <label for="email" class="sr-only">Email</label>
                <input id="email" type="text" class="block w-full py-3 text-base placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-200 focus:ring focus:ring-opacity-50 focus:border-blue-300 sm:flex-1" placeholder="Enter your email">
                <nuxt-link tag="button" to="/quote" title="Quote form" class="w-full px-6 py-3 mt-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                  Get Started
                </nuxt-link>
              </form>

              <p class="mt-3 text-sm leading-5 text-gray-500">
                We care about the protection of your data. Read our
                <nuxt-link to="/privacy" title="Privacy Policy" class="font-medium text-gray-900 underline">
                  Privacy Policy
                </nuxt-link>
                <span class="-ml-1 no-underline">.</span>
              </p>
            </div>
          </div>
          <div class="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg class="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784">
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x="118"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
              <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
            </svg>
            <Thumbnail />
            <!-- <img class="absolute z-10 hidden transform xl:inline-block translate-x-1/5 right-1/6 h-96 w-96" src="~/static/sampleCoin.png"> -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// import { Typed } from '~/plugins/typed.js'
import Thumbnail from '~/components/Thumbnail'
export default {
  name: 'HeroNew',
  components: {
    Thumbnail
  },
  data () {
    return {
      elem: null
    }
  },
  methods: {
    goQuote () {
      if (process.browser) {
        this.$router.push('/quote')
      }
    }
  }
}
</script>
