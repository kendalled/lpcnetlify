<template>
  <div class="relative overflow-hidden bg-white lg:pb-32">
    <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
      <div class="relative h-full mx-auto max-w-screen-xl">
        <svg class="absolute mt-2 right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern
              id="svg-pattern-squares-1"
              x="0"
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
          <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
        </svg>
        <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern
              id="svg-pattern-squares-2"
              x="0"
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
          <rect width="404" height="784" fill="url(#svg-pattern-squares-2)" />
        </svg>
      </div>
    </div>

    <div x-data="{ open: false }" class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <div class="px-4 mx-auto max-w-screen-xl sm:px-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-full">
              <a href="#">
                <img class="w-auto h-8 antialiased" src="~/static/lapel.svg" alt="">
              </a>
              <div class="flex items-center -mr-2 md:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="open = true">
                  <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden antialiased md:block">
            <a href="#" class="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Lapel Pins</a>
            <a href="#" class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Challenge Coins</a>
            <a href="#" class="hidden ml-10 font-medium text-gray-500 lg:inline hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Keychains</a>
            <a href="#" class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Blog</a>
          </div>
          <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span class="inline-flex shadow rounded-md">
              <a href="#" class="inline-flex items-center px-4 py-2 text-base font-medium text-blue-600 bg-white border border-transparent leading-6 rounded-md hover:text-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-gray-50 active:text-blue-700 transition duration-150 ease-in-out">
                Free Quote
              </a>
            </span>
          </div>
        </nav>
      </div>

      <div x-show="open" style="display: none;" class="absolute inset-x-0 top-0 p-2 md:hidden">
        <div
          class="rounded-lg shadow-md transition transform origin-top-right"
          x-show="open"
          x-transition:enter="duration-150 ease-out"
          x-transition:enter-start="opacity-0 scale-95"
          x-transition:enter-end="opacity-100 scale-100"
          x-transition:leave="duration-100 ease-in"
          x-transition:leave-start="opacity-100 scale-100"
          x-transition:leave-end="opacity-0 scale-95"
        >
          <div class="overflow-hidden bg-white rounded-lg ring-1 ring-black ring-opacity-5">
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img class="w-auto h-8" src="~/static/lapel.svg" alt="">
              </div>
              <div class="-mr-2">
                <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="open = false">
                  <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Product</a>
              <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Features</a>
              <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Marketplace</a>
              <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Company</a>
            </div>
            <div>
              <a href="#" class="block w-full px-5 py-3 font-medium text-center text-blue-600 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700 transition duration-150 ease-in-out">
                Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- class="px-4 mx-auto mt-10 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"-->
      <div class="px-4 mx-auto mt-10 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-56">
        <div class="text-center">
          <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 leading-10 sm:text-5xl sm:leading-none md:text-6xl">
            Custom designed
            <br class="xl:hidden">
            pins
            <span class="text-blue-600">in minutes.</span>
          </h2>
          <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We design and manufacture custom lapel pins, challenge coins, and keychains. Request your free art proof with no commitment.
          </p>
          <div class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div class="shadow rounded-md">
              <a href="#" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent leading-6 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div class="mt-3 shadow rounded-md sm:mt-0 sm:ml-3">
              <a href="#" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-600 bg-white border border-transparent leading-6 rounded-md hover:text-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero2'
}
</script>
