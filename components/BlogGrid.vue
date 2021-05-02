<template>
  <div class="container mx-auto mb-4">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div v-for="(blogPost, i) in data.stories" :key="i" class="w-full my-1 md:w-1/2 lg:my-4 lg:mx-2 lg:w-full lg:max-w-sm">
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg">
          <div>
            <div class="flex items-center max-w-3xl overflow-hidden text-sm text-white rounded-t-lg focus:outline-none focus:shadow-solid">
              <img class="object-cover w-full h-64" :src="blogPost.content.image" alt="Blog Post Image">
            </div>
          </div>

          <header class="flex-col items-center justify-between p-2 leading-tight bg-white md:p-4">
            <h1 class="block text-lg">
              <nuxt-link :to="'blog/' + blogPost.content.body[0].slug" class="text-black no-underline hover:underline">
                {{ blogPost.content.body[0].text }}
              </nuxt-link>
            </h1>
            <p class="text-sm text-gray-700">
              Published: {{ blogPost.published_at }}
            </p>
          </header>

          <footer class="flex items-center justify-between p-2 leading-none bg-white md:p-4">
            <a class="flex items-center text-black no-underline hover:underline" href="https://twitter.com/danibucaro">
              <img alt="Placeholder" class="block w-10 h-10 border-2 border-indigo-300 rounded-full" src="~/static/dani.jpg">
              <p class="ml-2 text-sm font-semibold text-gray-700">
                Dani Bucaro
              </p>
            </a>
            <nuxt-link class="px-3 py-2 mt-0 text-sm bg-blue-500 rounded shadow text-blue-50 transition-colors duration-200 hover:bg-blue-600 hover:text-white" :to="'blog/' + blogPost.content.body[0].slug">
              Read More
            </nuxt-link>
            <!-- <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
              <span class="hidden">Like</span>
              <i class="fa fa-heart" />
            </a> -->
          </footer>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogGrid',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
