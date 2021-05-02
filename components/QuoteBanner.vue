<template>
  <div class="fixed inset-0 z-50 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
    <!--
    Notification panel, show/hide based on alert state.
  -->
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="opacity-0 translate-y-2 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="opacity-100 translate-y-0 sm:translate-x-0"
      leave-active-class="transition duration-100 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto">
        <div class="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="w-6 h-6 text-yellow-400"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                ><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900 leading-5">
                  {{ message }}
                </p>
                <p class="mt-1 text-sm text-gray-500 leading-5">
                  {{ message2 }}
                </p>
              </div>
              <div class="flex flex-shrink-0 ml-4">
                <button class="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500" @click.prevent="closeMe">
                  <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'QuoteBanner',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: 'No choice is selected.'
    },
    message2: {
      type: String,
      default: 'You must choose an option to continue.'
    }
  },
  mounted () {
    const onEscape = (e) => {
      if (this.show && e.keyCode === 27) {
        this.closeMe()
      }
    }
    document.addEventListener('keydown', onEscape)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },
  methods: {
    closeMe () {
      this.$emit('close')
    }
  }
}
</script>
