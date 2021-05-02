<template>
  <section>
    <div v-editable="blok" class="px-4 pt-4 pb-2 mx-auto sm:pt-6 title max-w-7xl sm:px-6 lg:px-8">
      <div>
        <BreadCrumbs category="Blog Posts" cat-link="/blog" :page="postTitle" :page-link="blok.slug" />
      </div>
      <div class="mt-2 md:flex md:items-center md:justify-between">
        <div class="flex-1 prose-sm prose md:max-w-5xl md:w-full sm:prose">
          <h1 class="antialiased leading-7 sm:leading-9">
            {{ postTitle }}
          </h1>
        </div>
        <div class="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
          <span class="inline-flex rounded-md shadow-sm">
            <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-gray-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-gray-500">
              <svg class="w-5 h-5 mr-2 -ml-1" viewBox="0 0 20 20" fill="currentColor"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>
              Share
            </button>
          </span>
          <span class="inline-flex ml-3 rounded-md shadow-sm">
            <nuxt-link to="/contact" class="inline-flex items-center px-4 py-2 text-sm antialiased font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700">
              <!-- <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" clip-rule="evenodd" />
              </svg> -->
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-2 -ml-1"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              Contact Us
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumbs from '~/components/BreadCrumbs'
export default {
  components: {
    BreadCrumbs
  },
  props: ['blok'],
  data () {
    return {
      open: false
    }
  },
  computed: {
    postTitle () {
      return this.blok.text
    }
  }
}
</script>
