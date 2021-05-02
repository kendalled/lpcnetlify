<template>
  <div class="max-w-6xl mx-auto overflow-hidden bg-white rounded-lg shadow">
    <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
      <h3 class="text-lg font-medium text-gray-900 leading-6">
        Track your quote
      </h3>
      <p class="mt-1 text-sm text-gray-500 leading-5">
        Keep this page open to track the progress of your digital proof. When ready, the art proof will appear below.
      </p>
    </div>

    <div class="px-4 py-5 sm:p-6">
      <nav>
        <ul class="overflow-hidden">
          <li class="relative pb-10">
            <!-- Complete Step -->
            <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-blue-600" />
            <a href="#" class="relative flex items-start space-x-4 group focus:outline-none">
              <div class="flex items-center h-9">
                <span class="relative z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full transition duration-150 ease-in-out group-hover:bg-blue-800 group-focus:bg-blue-800">
                  <!-- Heroicon name: check -->
                  <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
              <div class="min-w-0">
                <h3 class="text-xs font-semibold tracking-wide uppercase leading-4">Quote received</h3>
                <p class="text-sm text-gray-500 leading-5">Our artists have received your inquiry.</p>
              </div>
            </a>
          </li>

          <li class="relative pb-10">
            <!-- Current Step -->
            <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" />
            <div class="relative flex items-start space-x-4 group focus:outline-none">
              <div class="flex items-center h-9">
                <span class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-blue-600 rounded-full">
                  <span class="h-2.5 w-2.5 bg-blue-600 rounded-full" />
                </span>
              </div>
              <div class="min-w-0">
                <h3 class="text-xs font-semibold tracking-wide text-blue-600 uppercase leading-4">
                  Artwork begun
                </h3>
                <p class="text-sm text-gray-500 leading-5">
                  Your digital proof is currently being rendered.
                </p>
              </div>
            </div>
          </li>

          <li class="relative pb-10">
            <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" />
            <a href="#" class="relative flex items-start space-x-4 group focus:outline-none">
              <div class="flex items-center h-9">
                <span class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full transition duration-150 ease-in-out group-hover:border-gray-400 group-focus:border-gray-400">
                  <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150" />
                </span>
              </div>
              <div class="min-w-0">
                <h3 class="text-xs font-semibold tracking-wide text-gray-500 uppercase leading-4">Artwork complete</h3>
                <p class="text-sm text-gray-500 leading-5">Our sales team is currently quoting your design.</p>
              </div>
            </a>
          </li>

          <li class="relative pb-10">
            <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" />
            <a href="#" class="relative flex items-start space-x-4 group focus:outline-none">
              <div class="flex items-center h-9">
                <span class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full transition duration-150 ease-in-out group-hover:border-gray-400 group-focus:border-gray-400">
                  <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150" />
                </span>
              </div>
              <div class="min-w-0">
                <h3 class="text-xs font-semibold tracking-wide text-gray-500 uppercase leading-4">Pricing your quote</h3>
                <p class="text-sm text-gray-500 leading-5">We are currently calculating your design's cost.</p>
              </div>
            </a>
          </li>

          <li class="relative">
            <a href="#" class="relative flex items-start space-x-4 group focus:outline-none">
              <div class="flex items-center h-9">
                <span class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full transition duration-150 ease-in-out group-hover:border-gray-400 group-focus:border-gray-400">
                  <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150" />
                </span>
              </div>
              <div class="min-w-0">
                <h3 class="text-xs font-semibold tracking-wide text-gray-500 uppercase leading-4">Quote complete</h3>
                <p class="text-sm text-gray-500 leading-5">You should have a quote in your email and below.</p>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TallSteps'
}
</script>
