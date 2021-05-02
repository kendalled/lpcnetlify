<template>
  <div class="flex items-center justify-center w-screen h-screen -mt-16 bg-gray-100">
    <div class="w-2/5 h-auto my-64 bg-white rounded-lg shadow">
      <div class="px-4 py-5 grid grid-cols-3 gap-x-6 sm:p-6">
        <!-- native select -->
        <div class="col-span-3 sm:col-span-1">
          <label for="location" class="block text-sm font-medium text-gray-700 leading-5">Select (native)
          </label>
          <select id="location" class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 leading-6 form-select focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
            <option selected>
              Lapel Pins
            </option>
            <option>
              Challenge Coins
            </option>
            <option>
              Keychains
            </option>
          </select>
        </div>
        <!-- end native select -->
        <CustomSelect :options="options" class="col-span-3 sm:col-span-1" :title="'Select'" />
        <CustomMultiSelect class="col-span-3 sm:col-span-1" :title="'Multiselect'" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '~/components/CustomSelect'
import CustomMultiSelect from '~/components/CustomMultiSelect'
export default {
  components: {
    CustomSelect,
    CustomMultiSelect
  },
  data () {
    return {
      options: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        '1000'
      ]
    }
  }
}
</script>
