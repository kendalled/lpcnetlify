<template>
  <nav class="max-w-6xl mx-auto mt-6">
    <ul class="bg-white border border-gray-300 divide-y divide-gray-300 rounded-md md:flex md:divide-y-0">
      <li class="relative md:flex-1 md:flex">
        <!-- Completed Step -->
        <a href="#" class="flex items-center w-full group">
          <div class="flex items-center px-6 py-4 text-sm font-medium space-x-4 leading-5">
            <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full transition duration-150 ease-in-out group-hover:bg-blue-800">
              <!-- Heroicon name: check -->
              <svg class="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <p class="text-sm font-medium text-gray-900 leading-5">Submission received</p>
          </div>
        </a>

        <div class="absolute top-0 right-0 hidden w-5 h-full md:block">
          <svg class="w-full h-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
            <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
          </svg>
        </div>
      </li>

      <li class="relative md:flex-1 md:flex">
        <!-- Current Step -->
        <div class="flex items-center px-6 py-4 text-sm font-medium space-x-4 leading-5">
          <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-blue-600 rounded-full">
            <p class="text-blue-600">
              02
            </p>
          </div>
          <p class="text-sm font-medium text-blue-600 leading-5">
            Artwork in progress
          </p>
        </div>

        <div class="absolute top-0 right-0 hidden w-5 h-full md:block">
          <svg class="w-full h-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
            <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
          </svg>
        </div>
      </li>

      <li class="relative md:flex-1 md:flex">
        <!-- Upcoming Step -->
        <a href="#" class="flex items-center group">
          <div class="flex items-center px-6 py-4 text-sm font-medium space-x-4 leading-5">
            <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-gray-300 rounded-full transition duration-150 ease-in-out group-hover:border-gray-400">
              <span class="text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-900">03</span>
            </div>
            <p class="text-sm font-medium text-gray-500 leading-5 transition duration-150 ease-in-out group-hover:text-gray-900">Quote complete</p>
          </div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'LongSteps'
}
</script>
