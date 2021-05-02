<template>
  <!-- :class="[ind >= 1 ? 'border-t' : 'border-t-0', opened ? 'border-b' : 'border-b-0']" -->
  <div :class="[ind === 3 && !opened ? 'border-b-0' : 'border-b']" class="px-6 py-4 transition-colors duration-150 ease-in-out border-gray-200 hover:bg-gray-50 group" @click="emitToggle">
    <dt class="leading-7">
      <button class="flex items-start justify-between w-full text-left text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-900">
        <span class="text-gray-600 transition-colors duration-150 ease-in-out group-hover:text-gray-800">
          {{ title }} <span class="font-normal text-gray-500">({{ length }})</span>
        </span>
        <span class="flex items-center ml-6 h-7">
          <svg :class="[opened ? 'rotate-0' : '-rotate-90']" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-6 h-6 transition duration-200 ease-in-out transform"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
    </dt>
    <dd class="pr-12 mt-2" style="display:none;">
      <p class="text-base leading-6 text-gray-500">
        We have the process down to a science. A high-quality digital proof will allow you to check spelling, verify color, adjust size, and make any additional changes or corrections prior to starting production. The size of your lapel pin, keychain, or coin is determined by measuring the widest or tallest point of your design. Your products are then made with stainless steel, and spot-checked for quality.
      </p>
    </dd>
  </div>
</template>

<script>
export default {
  name: 'ListTab',
  props: {
    title: {
      type: String,
      default: 'Title Here'
    },
    opened: {
      type: Boolean,
      default: false
    },
    length: {
      type: Number,
      default: 0
    },
    ind: {
      type: Number,
      default: 0
    }
  },
  methods: {
    emitToggle () {
      this.$emit('toggle', this.ind)
    }
  }
}
</script>
