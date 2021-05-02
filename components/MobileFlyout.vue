<template>
  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <transition
    enter-active-class="duration-200 ease-out"
    enter-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-100 ease-in"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-show="mobileOpen" class="absolute inset-x-0 top-0 z-20 p-2 transition origin-top-right transform lg:hidden">
      <div class="rounded-lg shadow-lg">
        <div class="bg-white rounded-lg divide-y-2 ring-1 ring-black ring-opacity-5 divide-gray-50">
          <div class="px-5 pt-5 pb-6 space-y-6 sm:space-y-8 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <img class="w-auto h-8" src="~/static/lapel.svg" alt="Lapel Pins and Coins">
              </div>
              <div class="-mr-2">
                <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" @click="closeFlyout">
                  <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav class="space-y-8">
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <a href="#" class="flex items-center p-3 -m-3 rounded-lg space-x-4 transition duration-150 ease-in-out hover:bg-gray-50">
                    <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-md sm:h-12 sm:w-12">
                      <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div class="text-base font-medium text-gray-900 leading-6">
                      Analytics
                    </div>
                  </a>
                  <a href="#" class="flex items-center p-3 -m-3 rounded-lg space-x-4 transition duration-150 ease-in-out hover:bg-gray-50">
                    <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-md sm:h-12 sm:w-12">
                      <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <div class="text-base font-medium text-gray-900 leading-6">
                      Engagement
                    </div>
                  </a>
                  <a href="#" class="flex items-center p-3 -m-3 rounded-lg space-x-4 transition duration-150 ease-in-out hover:bg-gray-50">
                    <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-md sm:h-12 sm:w-12">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div class="text-base font-medium text-gray-900 leading-6">
                      Security
                    </div>
                  </a>
                  <a href="#" class="flex items-center p-3 -m-3 rounded-lg space-x-4 transition duration-150 ease-in-out hover:bg-gray-50">
                    <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-md sm:h-12 sm:w-12">
                      <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div class="text-base font-medium text-gray-900 leading-6">
                      Integrations
                    </div>
                  </a>
                </div>
                <div class="text-base leading-6">
                  <a href="#" class="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500">
                    View all products &rarr;
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div class="px-5 py-6 space-y-6">
            <div class="grid grid-cols-2 gap-4">
              <a href="#" class="text-base font-medium text-gray-900 leading-6 transition duration-150 ease-in-out rounded-md hover:text-gray-700">
                Pricing
              </a>
              <a href="#" class="text-base font-medium text-gray-900 leading-6 transition duration-150 ease-in-out rounded-md hover:text-gray-700">
                Docs
              </a>
              <a href="#" class="text-base font-medium text-gray-900 leading-6 transition duration-150 ease-in-out rounded-md hover:text-gray-700">
                Company
              </a>
              <a href="#" class="text-base font-medium text-gray-900 leading-6 transition duration-150 ease-in-out rounded-md hover:text-gray-600">
                Resources
              </a>
              <a href="#" class="text-base font-medium text-gray-900 leading-6 transition duration-150 ease-in-out rounded-md hover:text-gray-600">
                Blog
              </a>
              <a href="#" class="text-base font-medium text-gray-900 leading-6 transition duration-150 ease-in-out rounded-md hover:text-gray-600">
                Contact Sales
              </a>
            </div>
            <div class="space-y-6">
              <span class="flex w-full rounded-md shadow-sm">
                <a href="#" class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent leading-6 transition duration-150 ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700">
                  Sign up
                </a>
              </span>
              <p class="text-base font-medium text-center text-gray-500 leading-6">
                Existing customer?
                <a href="#" class="text-blue-600 transition duration-150 ease-in-out hover:text-blue-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MobileFlyout',
  props: {
    mobileOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeFlyout () {
      this.$emit('close')
    }
  }
}
</script>
