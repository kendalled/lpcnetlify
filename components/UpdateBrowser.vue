<template>
  <!--
  Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
  your content from being obscured when the user scrolls to the bottom of the page.
  -->
  <div class="fixed inset-x-0 bottom-0 bg-white">
    <div class="bg-blue-600">
      <div class="px-3 py-3 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center flex-1 w-0">
            <span class="flex p-2 bg-blue-800 rounded-lg">
              <svg class="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">
                Please use an up-to-date browser to use our site.
              </span>
              <span class="hidden md:inline">
                Please use an up-to-date internet browser to use our site. We support Chrome, Safari, Firefox, and Microsoft Edge.
              </span>
            </p>
          </div>
          <div class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            <div class="rounded-md shadow-sm">
              <a href="#" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-transparent leading-5 transition duration-150 ease-in-out rounded-md hover:text-blue-500 focus:outline-none focus:ring">
                Learn more
              </a>
            </div>
          </div>
          <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button type="button" class="flex p-2 -mr-1 transition duration-150 ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 sm:-mr-2" aria-label="Dismiss">
              <svg class="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateBrowser'
}
</script>
