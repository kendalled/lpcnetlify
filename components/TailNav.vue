<template>
  <nav class="relative z-50 bg-white border-b">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-18">
        <div class="flex">
          <div class="flex items-center mr-2 -ml-2 md:hidden">
            <button class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out" @click="open = !open">
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
          <div class="flex items-center flex-shrink-0">
            <img class="block w-auto h-7" src="~/static/logo.png" alt="">
          </div>
          <div class="hidden md:ml-12 md:flex">
            <a
              v-for="(tab, k) in tabs"
              :key="k"
              href="#"
              :class="[k !== 0 ? 'ml-8' : 'ml-0', selected === tab ? 'border-blue-500' : 'border-transparent']"
              class="inline-flex items-center px-0 pt-1 text-sm font-medium text-gray-500 border-b-2 lg:px-1 leading-5 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out hover:text-gray-700 hover:border-gray-300"
              @click.prevent="chooseTab(tab)"
            >
              {{ tab }}
            </a>
            <!-- <a href="#" class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium text-gray-500 border-b-2 border-transparent leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              <span class="hidden lg:block">Challenge Coins</span>
              <span class="block lg:hidden">Coins</span>
            </a>-->
            <a href="#" class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium text-gray-500 border-b-2 border-transparent leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              <span class="hidden lg:block">Blog Posts</span>
              <span class="block lg:hidden">Blog</span>
            </a>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="inline-flex rounded-md shadow-sm">
              <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent leading-5 rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700 transition ease-in-out duration-150">
                Free Quote
              </button>
            </span>
          </div>
          <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
            <!-- <button class="p-1 text-gray-400 border-2 border-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out">
              <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button> -->
            <!--- click.away was here -->
            <div class="relative ml-auto">
              <AccountDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <transition
      enter-class="opacity-0 transform scale-95"
      enter-active-class="transition ease-out duration-200"
      enter-to-class="opacity-100 transform scale-100"
      leave-class="opacity-100 transform scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-to-class="opacity-0 transform scale-95"
    >
      <div v-show="open" class="md:hidden origin-top-left">
        <div class="pt-2 pb-3">
          <a href="#" class="block py-2 pl-3 pr-4 text-base font-medium text-blue-700 border-l-4 border-blue-500 bg-blue-50 focus:outline-none focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700 transition duration-150 ease-in-out sm:pl-5 sm:pr-6">Lapel Pins</a>
          <a href="#" class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6">Challenge Coins</a>
          <a href="#" class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6">Blog</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4 sm:px-6">
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
            <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out sm:px-6">Your Profile</a>
            <a href="#" class="block px-4 py-2 mt-1 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out sm:px-6">Settings</a>
            <a href="#" class="block px-4 py-2 mt-1 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out sm:px-6">Sign out</a>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.h-18 {
  height: 4.5rem;
}
</style>

<script>
import AccountDropdown from '~/components/AccountDropdown'
export default {
  name: 'TailNav',
  components: {
    AccountDropdown
  },
  data () {
    return {
      open: false,
      selected: '',
      tabs: [
        'Lapel Pins',
        'Challenge Coins'
      ]
    }
  },
  methods: {
    // openMenu () {
    //   this.$emit('menu')
    // },
    chooseTab (tab) {
      console.log('chose tab')
      this.selected = tab
      this.$emit('menu', tab)
    }
  }
}
</script>
