<template>
  <div class="flex items-center justify-center w-full min-h-screen bg-gray-50">
    <div class="w-full overflow-hidden bg-white rounded-lg shadow max-w-7xl">
      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
          <div class="mt-4 ml-4">
            <h3 class="text-lg font-medium text-gray-900 leading-6">
              Select a product to begin.
            </h3>
            <p class="mt-1 text-sm text-gray-500 leading-5">
              Select whether you'd like to design a pin, challenge coin, or keychain.
            </p>
          </div>
          <!-- <div class="flex-shrink-0 mt-4 ml-4">
            <span class="inline-flex rounded-md shadow-sm">
              <button type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent leading-5 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-700 active:bg-blue-700">
                Customer Support
              </button>
            </span>
          </div> -->
        </div>
      </div>
      <div class="flex flex-col justify-between px-4 py-5 sm:flex-row sm:p-6">
        <!-- images and labels -->
        <div v-for="(choice, c) in choices" :key="c" class="flex-col items-center justify-center w-full h-auto cursor-pointer group sm:w-1/3">
          <img class="w-48 h-48 mx-auto" :src="choice.img">
          <p class="w-auto mx-auto mt-4 font-normal text-center text-gray-700 transition-colors duration-150 group-hover:text-blue-700">
            {{ choice.title }}
          </p>
        </div>
        <!-- end image slot -->
      </div>
      <div class="px-4 py-4 border-t border-gray-200 sm:px-6">
        <!-- Content goes here -->
        <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Choice',
  data () {
    return {
      choices: [
        {
          title: 'Lapel Pins',
          img: require('~/static/homePins.png')
        },
        {
          title: 'Challenge Coins',
          img: require('~/static/homeCoins.png')
        },
        {
          title: 'Keychains',
          img: require('~/static/homeChains.png')
        }
      ]
    }
  }
}
</script>
