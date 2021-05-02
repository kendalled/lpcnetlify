<template>
  <nav class="sticky top-0 bg-white transition-all duration-200 ease-out-quad" :class="[shadow ? 'shadow' : 'shadow-none border-b border-gray-200']" style="z-index: 100;" @keydown.escape="open = false">
    <div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <nuxt-link to="/" class="flex items-center flex-shrink-0">
            <img class="block w-auto h-8 lg:hidden" src="~/static/lapel.svg" alt="">
            <img class="hidden w-auto mt-1 lg:block h-7" src="~/static/lapel.svg" alt="">
          </nuxt-link>
          <div class="hidden antialiased lg:ml-8 lg:flex">
            <nuxt-link to="/" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent leading-5 transition duration-150 ease-in-out hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
              Home
            </nuxt-link>
            <nuxt-link to="blog" class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium text-gray-900 border-b-2 border-blue-500 leading-5 transition duration-150 ease-in-out focus:outline-none focus:border-blue-700">
              Blog<span class="hidden lg:block lg:ml-1">Posts</span>
            </nuxt-link>
            <a href="#" class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium text-gray-500 border-b-2 border-transparent leading-5 transition duration-150 ease-in-out hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
              Pricing
            </a>
            <a href="#" class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium text-gray-500 border-b-2 border-transparent leading-5 transition duration-150 ease-in-out hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
              Gallery
            </a>
          </div>
        </div>
        <div class="items-center justify-center flex-1 hidden px-2 md:flex lg:ml-6 lg:justify-end">
          <div class="w-full max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="searchPins" autocomplete="searchPins" class="block w-full py-2 pl-10 pr-3 placeholder-gray-500 bg-white border border-gray-300 leading-5 transition duration-150 ease-in-out rounded-md focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm" placeholder="Search">
            </div>
          </div>
        </div>
        <div class="flex items-center lg:hidden">
          <button class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" @click="open = !open">
            <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                :class="[open ? 'hidden' : 'inline-flex']"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="[!open ? 'hidden' : 'inline-flex']"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:ml-4 lg:flex lg:items-center">
          <button class="flex-shrink-0 p-1 text-gray-400 border-2 border-transparent rounded-full transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100">
            <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
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
                  <nuxt-link to="login" class="block px-4 py-2 text-sm text-gray-700 leading-5 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                    Sign In
                  </nuxt-link>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div :class="[open ? 'block' : 'hidden']" class="lg:hidden">
      <div class="pt-2 pb-3">
        <a href="#" class="block py-2 pl-3 pr-4 text-base font-medium text-blue-700 border-l-4 border-blue-500 transition duration-150 ease-in-out bg-blue-50 focus:outline-none focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700">Dashboard</a>
        <a href="#" class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 border-l-4 border-transparent transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300">Team</a>
        <a href="#" class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 border-l-4 border-transparent transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300">Projects</a>
        <a href="#" class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 border-l-4 border-transparent transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300">Calendar</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800 leading-6">
              Tom Cook
            </div>
            <div class="text-sm font-medium text-gray-500 leading-5">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100">Your Profile</a>
          <a href="#" class="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100">Settings</a>
          <nuxt-link to="login" class="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100">
            Sign In
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// do not import { auth } from '~/plugins/firebase.js'
export default {
  name: 'BlogNav',
  props: {
    shadow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      open: false
    }
  }
  // mounted () {
  //   const user = auth.currentUser
  //   if (user != null) {
  //     // this.email = user.email
  //     // this.displayName = user.displayName
  //     this.userPhoto = user.photoURL
  //   }
  // }
}
</script>
