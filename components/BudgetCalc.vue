<template>
  <div class="w-full max-w-6xl overflow-hidden bg-white rounded-lg shadow">
    <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
      <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
        <div class="mt-4 ml-4">
          <h3 class="text-lg font-medium text-gray-900 leading-6">
            Budget calculator: <span class="text-gray-700">{{ total }} pins</span>
          </h3>
          <p class="mt-1 text-sm text-gray-500 leading-5">
            Use our convenient budget calculator to find a balance between size, quantity, and cost.
          </p>
        </div>
        <div class="flex-shrink-0 mt-4 ml-4">
          <span class="inline-flex rounded-md shadow-sm">
            <button type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent leading-5 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-700 active:bg-blue-700">
              Get a quote
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="h-auto px-4 py-5 sm:p-6">
      <!-- Content goes here -->
      <div class="grid grid-cols-3">
        <div class="col-span-1">
          <section class="block w-full">
            <label class="text-sm text-gray-800">Select size</label>
            <div class="mt-2">
              <input
                id="oneInch"
                type="radio"
                name="drone"
                value="oneInch"
                checked
              >
              <label for="oneInch">1.00 in</label>
            </div>

            <div>
              <input id="oneTwoFiveInch" type="radio" name="drone" value="oneTwoFiveInch">
              <label for="oneTwoFiveInch">1.25 in</label>
            </div>

            <div>
              <input id="oneFiveInch" type="radio" name="drone" value="oneFiveInch">
              <label for="oneFiveInch">1.50 in</label>
            </div>
          </section>
          <section class="block w-full mt-6">
            <label for="quantity" class="text-sm text-gray-800">Select quantity</label>
            <input
              id="quantity"
              v-model="value"
              class="w-full mt-2 cursor-pointer"
              type="range"
              name="quantity"
              min="0"
              max="100"
              step="10"
              list="tickmarks"
            >
            <datalist id="tickmarks" class="flex justify-between text-sm text-center">
              <option value="0" label="0 ct" />
              <option value="10" />
              <option value="20" />
              <option value="30" />
              <option value="40" />
              <option value="50" label="50 ct" />
              <option value="60" />
              <option value="70" />
              <option value="80" />
              <option value="90" />
              <option value="100" label="100 ct" />
            </datalist>
          </section>
        </div>
      </div>
    </div>
    <div class="h-20 px-4 py-4 border-t border-gray-200 sm:px-6">
    <!-- Content goes here -->
    <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetCalc',
  data () {
    return {
      value: 0
    }
  },
  computed: {
    total () {
      return this.value * 10
    }
  }
}
</script>
