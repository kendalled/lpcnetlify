<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <nav class="fixed z-50 flex w-full bg-white border-b border-gray-200" aria-label="Breadcrumb">
    <ol class="flex w-full max-w-screen-xl px-4 mx-auto space-x-4 sm:px-6 lg:px-8">
      <li class="flex">
        <div class="flex items-center">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <!-- Heroicon name: home -->
            <svg class="flex-shrink-0 w-5 h-5 transition duration-150 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
          <span class="sr-only">Home</span>
        </div>
      </li>
      <li class="flex">
        <div class="flex items-center space-x-4">
          <svg
            class="flex-shrink-0 w-6 h-full text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <a href="#" class="text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">Lapel Pins</a>
        </div>
      </li>
      <li class="flex">
        <div class="flex items-center space-x-4">
          <svg
            class="flex-shrink-0 w-6 h-full text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <a href="#" aria-current="page" class="text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">Soft Enamel Pins</a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'FullCrumbs'
}
</script>
