<template>
  <div class="space-y-1">
    <label class="block text-sm font-medium text-gray-700 truncate leading-5">
      {{ title }}
    </label>
    <div class="relative">
      <span class="relative z-0 inline-flex h-full shadow-sm">
        <button type="button" class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 leading-5 transition duration-150 ease-in-out rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-gray-100 active:text-gray-500" aria-label="Previous" @click="decreaseVal">
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="flex items-center justify-center w-10 text-gray-600 bg-white border-t border-b">{{ val }}</div>
        <button type="button" class="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 leading-5 transition duration-150 ease-in-out rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-gray-100 active:text-gray-500" aria-label="Next" @click="increaseVal">
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomCounter',
  props: {
    title: {
      type: String,
      default: 'Pin Addon'
    },
    ind: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      val: 1
    }
  },
  watch: {
    val (newVal) {
      this.$emit('updated', this.ind, newVal)
    }
  },
  methods: {
    increaseVal () {
      this.val += 1
    },
    decreaseVal () {
      if (this.val !== 1) {
        this.val -= 1
      }
    }
  }
}
</script>
