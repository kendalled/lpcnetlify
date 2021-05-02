<template>
  <div class="py-20 px-4 flex flex-col min-h-72 bg-gray-50 items-center justify-center">
    <img class="h-8 mb-4 w-auto mx-auto" src="~/static/lapel.svg">
    <h1 class="text-xl text-center font-medium text-gray-700">
      We're working to improve our quote form.
    </h1>

    <h2 class="text-center max-w-md mt-1 text-gray-600">
      Pardon our dust. We'll be back and better than ever in just a few hours. You can reach us below.
    </h2>

    <div class="mt-8 flex sm:flex-row">
      <div class="inline-flex rounded-md shadow">
        <a href="mailto:info@lapelpinsandcoins.com" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Send an email
        </a>
      </div>
      <div class="ml-3 inline-flex">
        <a href="tel:+18443954464" target="_blank" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
          Call support
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteConstruction'
}
</script>
