<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="antialiased bg-gray-800">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
      <div class="max-w-xl">
        <h2 class="text-4xl font-extrabold leading-10 text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Custom Lapel Pins
        </h2>
        <p class="mt-5 text-xl leading-7 text-gray-400">
          Start building for free, then add a site plan to go live. Account plans unlock additional features.
        </p>
      </div>
      <div class="w-full max-w-xs mt-10">
        <label for="currency" class="block text-base font-medium leading-6 text-gray-300">Currency</label>
        <div class="mt-1.5 relative">
          <select id="currency" class="block w-full py-2 pl-3 pr-10 text-base leading-6 text-white bg-gray-700 border border-transparent rounded-md appearance-none focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
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
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none" aria-hidden="true">
            <!-- Heroicon name: chevron-down -->
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleHeader'
}
</script>
