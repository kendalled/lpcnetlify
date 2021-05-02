<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
  <div class="bg-gray-800">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
      <div class="max-w-xl">
        <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Lapel Pins
        </h2>
        <p class="mt-5 text-xl text-gray-400">
          Start building for free, then add a site plan to go live. Account plans unlock additional features.
        </p>
      </div>
      <div class="w-full max-w-xs mt-10">
        <label for="currency" class="block text-base font-medium text-gray-300">Currency</label>
        <div class="mt-1.5 relative">
          <select id="currency" class="block w-full py-2 pl-3 pr-10 text-base text-white bg-gray-700 border border-transparent rounded-md appearance-none bg-none focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm">
            <option>Argentina (ARS)</option>
            <option>Australia (AUD)</option>
            <option selected>
              United States (USD)
            </option>
            <option>Canada (CAD)</option>
            <option>France (EUR)</option>
            <option>Japan (JPY)</option>
            <option>Nigeria (NGN)</option>
            <option>Switzerland (CHF)</option>
            <option>United Kingdom (GBP)</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <!-- Heroicon name: chevron-down -->
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center w-full">
      <div class="flex flex-wrap w-full -m-1 max-w-7xl md:-m-2">
        <div class="flex flex-wrap w-1/2">
          <div class="w-1/2 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-md" src="https://dummyimage.com/500x300">
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-md" src="https://dummyimage.com/501x301">
          </div>
          <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-md" src="https://dummyimage.com/600x360">
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-md" src="https://dummyimage.com/601x361">
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-md" src="https://dummyimage.com/502x302">
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-md" src="https://dummyimage.com/503x303">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SampleHeader'
}
</script>
