<template>
  <!-- had: overflow-hidden -->
  <div class="bg-white rounded-lg shadow">
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 class="flex items-center text-lg font-medium leading-6 text-gray-900">
        {{ prefix }} Quote <span v-if="current === 'Coins'" class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
          New
        </span>
      </h3>
      <p class="mt-1 text-sm leading-5 text-gray-500">
        Select from the options below to calculate the quote price.
      </p>
    </div>
    <PriceCalculator v-if="current === 'Pins'" key="Pins" />
    <PriceCalculatorCoin v-else key="Coins" />
    <div class="px-4 py-5 border-t border-gray-200 sm:px-6">
      <div class="flex flex-wrap items-center justify-end -mt-2 -ml-4 sm:flex-nowrap">
        <div class="flex-shrink-0 mt-2 ml-4">
          <button v-if="current === 'Pins'" type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200" @click.prevent="current = 'Coins'">
            Change to Coins
            <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
            </svg>
          </button>
          <button v-if="current === 'Coins'" type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200" @click.prevent="current = 'Pins'">
            Change to Pins
            <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
            </svg>
          </button>
          <span class="inline-flex ml-2 rounded-md shadow-sm">
            <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-700 active:bg-blue-700">
              Send to artist
              <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PriceCalculator from '~/components/PriceCalculator'
import PriceCalculatorCoin from '~/components/PriceCalculatorCoin'
export default {
  name: 'AdminPricing',
  components: {
    PriceCalculator,
    PriceCalculatorCoin
  },
  data () {
    return {
      current: 'Pins'
    }
  },
  computed: {
    prefix () {
      return (this.current === 'Pins' ? 'Lapel Pin' : 'Challenge Coin')
    }
  }
}
</script>
