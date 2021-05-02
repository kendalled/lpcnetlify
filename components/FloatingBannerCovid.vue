<template>
  <!-- enterclass: sm:translate-y-0 sm:translate-x-2 entertoclass: sm:translate-x-0 -->
  <transition
    enter-active-class="transition duration-300 ease-out transform"
    enter-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-100 ease-in"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="open" class="fixed inset-x-0 bottom-0 z-30 pb-6 sm:pb-5">
      <div class="px-2 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="p-2 bg-red-600 rounded-lg shadow-lg sm:p-3">
          <div class="flex flex-wrap items-center justify-between">
            <div class="flex items-center flex-1 w-0">
              <span class="flex p-2 bg-red-800 rounded-lg">
                <svg class="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </span>
              <p class="ml-3 font-medium text-white">
                <!-- <span class="block md:hidden">
                  We are taking COVID-19 seriously.
                </span> -->
                <span class="block text-sm md:hidden">
                  COVID-19: We are taking extra steps to keep your order safe.
                </span>
                <span class="hidden md:block">
                  We are currently experiencing slightly delayed production times to ensure your order is properly handled.
                </span>
              </p>
            </div>
            <div class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
              <div class="rounded-md shadow-sm">
                <button type="button" class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-red-600 bg-white border border-transparent leading-5 transition duration-150 ease-in-out rounded-md sm:w-auto hover:text-red-500 focus:outline-none focus:ring" @click.prevent="testScroll('contact-section')">
                  Contact us
                </button>
              </div>
            </div>
            <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
              <button type="button" class="flex p-2 -mr-1 transition duration-150 ease-in-out rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500" aria-label="Dismiss" @click="open = false">
                <svg class="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FloatingBannerCovid',
  data () {
    return {
      open: false
    }
  },
  created () {
    setTimeout(() => {
      this.open = true
    }, 5000)
  },
  mounted () {
    const onEscape = (e) => {
      if (this.open && e.keyCode === 27) {
        this.open = false
      }
    }
    document.addEventListener('keydown', onEscape)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },
  methods: {
    testScroll (elem) {
      if (process.browser) {
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth', block: 'center' })
        this.open = false
      }
    }
  }
}
</script>
