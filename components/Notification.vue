<template>
  <div class="fixed inset-0 z-30 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="opacity-0 translate-y-2 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="opacity-100 translate-y-0 sm:translate-x-0"
      leave-active-class="transition duration-100 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="show"
        class="w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto"
      >
        <div class="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <slot />
              <div class="flex flex-shrink-0 ml-4">
                <button class="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500" @click="closeNotif">
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
  name: 'Notification',
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
