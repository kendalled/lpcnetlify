<template>
  <div class="sticky top-0 z-10 flex flex-shrink-0 w-screen h-16 bg-white border-b border-gray-200">
    <button class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden" @click.stop="openSidebar">
      <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </button>
    <div class="flex justify-between flex-1 px-4">
      <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
        <nuxt-link to="/" class="flex items-center flex-shrink-0">
          <img class="block w-auto h-8 lg:hidden" src="~/static/lapel.svg" alt="">
          <img data-not-lazy class="hidden w-auto lg:block h-7" src="~/static/lapel.svg" alt="">
        </nuxt-link>
        <!-- maybe change lg to md? -->
        <nav class="items-center justify-center hidden text-sm font-medium leading-5 lg:flex lg:w-9/12">
          <!-- -ml-1 to stay inline -->
          <a href="/" :class="[status === 0 ? 'text-blue-700' : 'text-gray-500']" class="-ml-1 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:underline">
            Shipping details
          </a>
          <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 mx-2 text-gray-400">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <a href="/blog" :class="[status === 1 ? 'text-blue-700' : 'text-gray-500']" class="transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:underline">
            Billing info
          </a>
          <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 mx-2 text-gray-400">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <a href="/blog/awareness-ribbons" class="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:underline">
            Complete your order
          </a>
        </nav>
      </div>
      <div class="flex items-center ml-4 md:ml-6">
        <button class="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring focus:text-gray-500">
          <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <!-- @click.away="open=false" -->
        <div class="relative flex-shrink-0 ml-4">
          <div>
            <button class="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600" @click="open = !open">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          <div
            v-if="open"
            class="fixed inset-0"
            tabindex="-1"
            @click="open = false"
          />
          <transition
            enter-class="opacity-0 transform scale-95"
            enter-active-class="transition duration-200 ease-out"
            enter-to-class="opacity-100 transform scale-100"
            leave-class="opacity-100 transform scale-100"
            leave-active-class="transition duration-75 ease-in"
            leave-to-class="opacity-0 transform scale-95"
          >
            <div
              v-show="open"
              class="absolute right-0 w-48 mt-2 shadow-lg origin-top-right rounded-md"
            >
              <div class="py-1 bg-white rounded-md ring-1 ring-black ring-opacity-5">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 leading-5 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Your Profile</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 leading-5 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Settings</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 leading-5 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Sign out</a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutSteps',
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    openSidebar () {
      this.$emit('open')
    }
  }
}
</script>
