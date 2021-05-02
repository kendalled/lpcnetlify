<template>
  <div class="fixed inset-x-0 bottom-0 z-50 pb-2 sm:pb-5">
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div v-if="show" class="max-w-screen-xl px-2 mx-auto origin-bottom sm:px-6 lg:px-8">
        <div class="p-2 bg-green-600 rounded-lg shadow-lg sm:p-3">
          <div class="flex flex-wrap items-center justify-between">
            <div class="flex items-center flex-1 w-0">
              <span class="flex p-2 bg-green-800 rounded-lg">
                <!-- Heroicon name: speakerphone -->
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span class="md:hidden">
                  Project saved!
                </span>
                <span class="hidden md:inline">
                  Changes saved. This project is synced with the database.
                </span>
              </p>
            </div>
            <div class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
              <div class="rounded-md shadow-sm">
                <a href="#" class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-green-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-green-500 focus:outline-none focus:ring">
                  Undo
                </a>
              </div>
            </div>
            <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
              <button type="button" class="flex p-2 -mr-1 transition duration-150 ease-in-out rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500" aria-label="Dismiss" @click="closeNotif">
                <!-- Heroicon name: x -->
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AdminNotification',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show (newVal, oldVal) {
      // todo: adjust timing
      if (newVal) {
        setTimeout(() => {
          this.$emit('close')
        }, 3000)
      }
    }
  },
  methods: {
    closeNotif () {
      this.$emit('close')
    }
  }
}
</script>
