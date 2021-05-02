<template>
  <section>
    <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6 rounded-t-md">
      <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
        <div class="mt-4 ml-4">
          <h3 class="text-lg font-medium text-gray-900 leading-6">
            Blog Posts
          </h3>
          <p class="mt-1 text-sm text-gray-500 leading-5">
            Create a new article, or edit an article by selecting it.
          </p>
        </div>
        <div class="flex-shrink-0 mt-4 ml-4">
          <span class="inline-flex rounded-md shadow-sm">
            <button type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent leading-5 transition duration-150 ease-in-out rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700" @click="newItem">
              <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              <span>New Post</span>
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="overflow-hidden bg-white shadow rounded-b-md">
      <!-- client-only-->
      <ul>
        <li v-for="q in 5" :key="q" :class="[q !== 0 ? 'border-t border-gray-200' : 'border-none']">
          <a href="#" class="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50" @click.prevent="openPost(elem)">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <div class="text-sm font-medium text-indigo-600 truncate leading-5">
                  This is the title
                </div>
                <div class="flex flex-shrink-0 ml-2">
                  <span v-if="q === 0" class="inline-flex px-2 text-xs font-semibold text-green-800 bg-green-100 rounded-full leading-5">
                    Published
                  </span>
                  <span v-else class="inline-flex px-2 text-xs font-semibold text-red-800 bg-red-100 rounded-full leading-5">
                    Unpublished
                  </span>
                </div>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <div class="flex items-center mr-6 text-sm text-gray-500 leading-5">
                    <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    Author name
                  </div>
                  <div class="flex items-center mt-2 text-sm text-gray-500 leading-5 sm:mt-0">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-5 h-5 mr-2 text-gray-400"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" /><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
                    Category
                  </div>
                </div>
                <div class="flex items-center mt-2 text-sm text-gray-500 leading-5 sm:mt-0">
                  <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                  <span>
                    Updated on
                    <!-- datetime="2020-01-07" -->
                    <time>March 20, 2020</time>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentList',
  methods: {
    newItem () {
      console.log('seen from widelist component')
      this.$emit('new-item')
    },
    openPost (post) {
      this.$emit('edit', post)
    }
  }
}
</script>
