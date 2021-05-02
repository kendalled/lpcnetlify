<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex items-center col-span-2 sm:col-span-3">
    <!-- Enabled: "bg-blue-600", Not Enabled: "bg-gray-200" -->
    <button
      type="button"
      :class="[toggled ? 'bg-blue-600' : 'bg-gray-200']"
      class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-pressed="false"
      aria-labelledby="annual-billing-label"
      @click.prevent="changeToggle"
    >
      <span class="sr-only">Use setting</span>
      <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
      <span aria-hidden="true" :class="[toggled ? 'translate-x-5' : 'translate-x-0']" class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow pointer-events-none ring-0" />
    </button>
    <span id="annual-billing-label" class="ml-3">
      <span class="text-sm font-medium text-gray-900">{{ label }} </span>
      <span class="text-sm text-gray-500">({{ labelTwo }})</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ToggleGuy',
  props: {
    label: {
      type: String,
      default: 'This is label'
    },
    labelTwo: {
      type: String,
      default: 'Save 10%'
    }
  },
  data () {
    return {
      toggled: false
    }
  },
  methods: {
    changeToggle () {
      this.toggled = !this.toggled
      this.$emit('toggled')
    }
  }
}
</script>
