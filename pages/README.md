# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).
<div class="overflow-hidden bg-white shadow rounded-b-md">
      <!-- client-only-->
      <ul v-if="data.length > 0">
        <li v-for="(elem, q) in data" :key="q" :class="[q !== 0 ? 'border-t border-gray-200' : 'border-none']">
          <a href="#" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out" @click.prevent="openPost(elem)">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <div class="text-sm font-medium text-indigo-600 truncate leading-5">
                  {{ elem.title }}
                </div>
                <div class="flex flex-shrink-0 ml-2">
                  <span v-if="elem.live" class="inline-flex px-2 text-xs font-semibold text-green-800 bg-green-100 rounded-full leading-5">
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
                    {{ elem.author }}
                  </div>
                  <div class="flex items-center mt-2 text-sm text-gray-500 leading-5 sm:mt-0">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-5 h-5 mr-2 text-gray-400"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" /><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
                    {{ elem.category }}
                  </div>
                </div>
                <div class="flex items-center mt-2 text-sm text-gray-500 leading-5 sm:mt-0">
                  <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                  <span>
                    Updated on
                    <!-- datetime="2020-01-07" -->
                    <time>{{ elem.date }}</time>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>