<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center max-h-screen">
    <transition
      enter-active-class="transition-all duration-150 ease-out-quad"
      leave-active-class="transition-all duration-200 ease-in-quad"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      appear
      @before-leave="backdropLeaving = true"
      @after-leave="backdropLeaving = false"
    >
      <div v-if="showBackdrop">
        <div class="absolute inset-0 bg-black opacity-25" />
      </div>
    </transition>

    <transition
      enter-active-class="transition-all duration-150 ease-out-quad"
      leave-active-class="transition-all duration-200 ease-in-quad"
      enter-class="opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-90"
      appear
      @before-leave="cardLeaving = true"
      @after-leave="cardLeaving = false"
    >
      <div v-if="showContent" v-click-outside="close" class="relative max-w-3xl px-4 py-5 bg-white rounded-lg shadow transform sm:p-6">
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 leading-8 sm:text-3xl sm:leading-9">
            Contact Us
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500 leading-7">
              We have dedicated customer care that is here to answer any question you might have. Contact us via phone or email, we'll respond right away.
            </p>
          </div>
          <div class="flex mt-6 space-x-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="ml-3 text-base text-gray-500 leading-6">
                <a class="inline-block transition-colors duration-200 hover:underline hover:text-gray-600" title="Lapel Pins and Coins Phone Number" href="tel:+18443954464">
                  +1 (844) 395-4464
                </a>
                <p class="mt-1 text-sm">
                  Mon - Fri, 9am-6pm EST
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-3 text-base text-gray-500 leading-6">
                <a title="Customer Support Email" class="transition-colors duration-200 hover:underline hover:text-gray-600" href="mailto:info@lapelpinsandcoins.com">
                  info@lapelpinsandcoins.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.card {
  backface-visibility: hidden;
}
.ease-out-quad {
  transition-timing-function: cubic-bezier(.25, .46, .45, .94);
}
.ease-in-quad {
  transition-timing-function: cubic-bezier(.55, .085, .68, .53);
}
</style>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'ContactModal',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showModal: false,
      showBackdrop: false,
      showContent: false,
      backdropLeaving: false,
      cardLeaving: false
    }
  },
  computed: {
    leaving () {
      return this.backdropLeaving || this.cardLeaving
    }
  },
  watch: {
    open: {
      handler (newValue) {
        if (newValue) {
          this.show()
        } else {
          this.close()
        }
      },
      immediate: true
    },
    leaving (newValue) {
      if (newValue === false) {
        this.showModal = false
        this.$emit('close')
      }
    }
  },
  // created () {
  //   const onEscape = (e) => {
  //     if (this.open && e.keyCode === 27) {
  //       this.close()
  //     }
  //   }

  //   document.addEventListener('keydown', onEscape)

  //   this.$once('hook:destroyed', () => {
  //     document.removeEventListener('keydown', onEscape)
  //   })
  // },
  methods: {
    show () {
      this.showModal = true
      this.showBackdrop = true
      this.showContent = true
    },
    close () {
      this.showBackdrop = false
      this.showContent = false
    }
  }
}
</script>
