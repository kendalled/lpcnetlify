<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <nav class="flex mb-2 sm:mb-4" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-4">
      <li>
        <div>
          <nuxt-link to="/" title="Home page" class="text-gray-400 hover:text-gray-500">
            <!-- Heroicon name: home -->
            <svg class="flex-shrink-0 w-5 h-5 transition duration-150 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </nuxt-link>
          <span class="sr-only">Home</span>
        </div>
      </li>
      <li>
        <div class="flex items-center space-x-4">
          <!-- Heroicon name: chevron-right -->
          <svg class="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <nuxt-link :to="catLink" :title="category" class="text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">
            {{ category }}
          </nuxt-link>
        </div>
      </li>
      <li>
        <div class="flex items-center space-x-4">
          <!-- Heroicon name: chevron-right -->
          <svg class="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <nuxt-link :to="pageLink" :title="page" aria-current="page" class="text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">
            {{ page }}
          </nuxt-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    category: {
      type: String,
      default: 'Pins'
    },
    catLink: {
      type: String,
      default: '/pins'
    },
    page: {
      type: String,
      default: 'Medical Pins'
    },
    pageLink: {
      type: String,
      default: '/medical'
    }
  }
}
</script>
