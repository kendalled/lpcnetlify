<template>
  <div class="flex flex-col items-center w-full px-4 mx-auto mt-6 sm:mt-8 lg:mt-12 lg:justify-between lg:flex-row max-w-7xl sm:px-6 lg:px-8">
    <!-- <span v-for="i in 4" :key="i" class="w-full bg-white shadow rounded-md h-72" /> -->
    <div class="w-full max-w-xs my-2 overflow-hidden rounded shadow-lg">
      <div class="py-2 bg-gradient-to-r from-blue-600 to-blue-800">
        <img class="w-48 h-auto mx-auto" src="~/static/pin01.png" alt="Sunset in the mountains">
      </div>
      <div class="px-6 py-4 bg-white">
        <div class="mb-2 text-xl font-bold text-gray-900">
          Lapel Pins
        </div>
        <p class="text-base text-gray-700">
          High quality and affordable lapel pins designed, manufactured, and delivered in 7 to 10 days.
        </p>
      </div>
      <div class="px-6 pb-4 bg-white">
        <span class="inline-flex w-full rounded-md shadow-sm">
          <button type="button" class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent leading-6 transition duration-150 ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700">
            Learn more
          </button>
        </span>
      </div>
    </div>

    <!-- Card two -->
    <div class="w-full max-w-xs my-2 overflow-hidden rounded shadow-lg">
      <div class="py-2 bg-gradient-to-r from-red-600 to-red-700">
        <img class="w-48 h-auto mx-auto" src="~/static/sampleCoin.png" alt="Sunset in the mountains">
      </div>
      <div class="px-6 py-4 bg-white">
        <div class="mb-2 text-xl font-bold text-gray-900">
          Challenge Coins
        </div>
        <p class="text-base text-gray-700">
          Our authentic custom challenge coins are designed and ready to ship in in 10 days or less.
        </p>
      </div>
      <div class="px-6 pb-4 bg-white">
        <span class="inline-flex w-full rounded-md shadow-sm">
          <button type="button" class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent leading-6 transition duration-150 ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700">
            Learn more
          </button>
        </span>
      </div>
    </div>

    <!-- card three -->
    <div class="w-full max-w-xs my-2 overflow-hidden rounded shadow-lg">
      <div class="py-2 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <img class="w-48 h-auto mx-auto" src="~/static/FDkeychains.png" alt="Sunset in the mountains">
      </div>
      <div class="px-6 py-4 bg-white">
        <div class="mb-2 text-xl font-bold text-gray-900">
          Keychains
        </div>
        <p class="text-base text-gray-700">
          Our high-quality keychains are very customizable - great to display your logo, hobby, or club.
        </p>
      </div>
      <div class="px-6 pb-4 bg-white">
        <span class="inline-flex w-full rounded-md shadow-sm">
          <button type="button" class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent leading-6 transition duration-150 ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700">
            Learn more
          </button>
        </span>
      </div>
    </div>

    <!-- card four -->
    <!-- <div class="max-w-xs my-2 overflow-hidden bg-white rounded shadow-lg">
        <div class="py-4 bg-gradient-to-r from-green-500 to-green-700">
          <img class="w-48 h-auto mx-auto" src="~/static/pin01.png" alt="Sunset in the mountains">
        </div>
        <div class="px-6 py-4">
          <div class="mb-2 text-xl font-bold text-gray-900">
            Bottle Openers
          </div>
          <p class="text-base text-gray-700">
            A great gift for friends and family alike. Make your custom item functional with optional add-ons.
          </p>
        </div>
        <div class="px-6 pb-4">
          <span class="inline-flex w-full rounded-md shadow-sm">
            <button type="button" class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent leading-6 transition duration-150 ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700">
              Learn more
            </button>
          </span>
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  name: 'PinShowcase'
}
</script>
