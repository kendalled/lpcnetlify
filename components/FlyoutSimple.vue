<template>
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <button type="button" class="inline-flex items-center text-base font-medium text-gray-500 space-x-2 leading-6 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900">
      <span>Solutions</span>
      <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" -->
      <svg class="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <!--
    Flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  -->
    <div class="absolute w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
      <div class="rounded-lg shadow-lg">
        <div class="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5">
          <div class="relative z-20 px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8">
            <a href="#" class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
              <p class="text-base font-medium text-gray-900 leading-6">
                Blog
              </p>
              <p class="text-sm text-gray-500 leading-5">
                Learn about tips, product updates and company culture.
              </p>
            </a>
            <a href="#" class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
              <p class="text-base font-medium text-gray-900 leading-6">
                Help Center
              </p>
              <p class="text-sm text-gray-500 leading-5">
                Get all of your questions answered in our forums of contact support.
              </p>
            </a>
            <a href="#" class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
              <p class="text-base font-medium text-gray-900 leading-6">
                Guides
              </p>
              <p class="text-sm text-gray-500 leading-5">
                Learn how to maximize our platform to get the most out of it.
              </p>
            </a>
            <a href="#" class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
              <p class="text-base font-medium text-gray-900 leading-6">
                Events
              </p>
              <p class="text-sm text-gray-500 leading-5">
                Check out webinars with experts and learn about our annual conference.
              </p>
            </a>
            <a href="#" class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
              <p class="text-base font-medium text-gray-900 leading-6">
                Security
              </p>
              <p class="text-sm text-gray-500 leading-5">
                Understand how we take your privacy seriously.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlyoutSolo',
  data () {
    return {
      open: false
    }
  }
}
</script>
