<template>
  <!-- px-0 to get full width on mobile -->
  <div class="w-full px-0">
    <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium text-gray-900 leading-6">
            {{ title }}
          </h3>
          <p class="mt-1 text-sm text-gray-500 leading-5">
            {{ subtitle }}
          </p>
        </div>
        <!-- <form> html on quoteform for readability and editability -->
        <div v-if="showContent" class="mt-5 md:mt-0 md:col-span-2">
          <slot />
        </div>
      </div>
      <div v-if="showSubmit" class="px-4 pt-5 pb-3 mt-6 text-right border-t border-gray-200 sm:px-6">
        <span class="inline-flex rounded-md shadow-sm">
          <button type="submit" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent leading-5 transition duration-150 ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700">
            Submit Quote
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteStep',
  props: {
    margin: {
      type: Boolean,
      default: true
    },
    showSubmit: {
      type: Boolean,
      deafult: false
    },
    title: {
      type: String,
      default: 'Profile'
    },
    subtitle: {
      type: String,
      default: 'This information will be displayed publicly, so be careful.'
    }
  },
  data () {
    return {
      showContent: true
    }
  }
}
</script>
