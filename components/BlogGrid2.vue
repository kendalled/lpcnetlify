<template>
  <main>
    <div class="relative px-4 pt-12 pb-20 bg-gray-50 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            From the blog
          </h1>
          <h2 class="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Weekly articles, tutorials, and guides on the custom lapel pin and challenge coin industry. Don't miss out on our weekly blog updates.
          </h2>
        </div>
        <div v-if="showSkeletons" class="relative grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <!-- TODO: PAGINATE PROPERLY KENDALL, remove random v-ifs -->
          <span v-for="i in 3" :key="i" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <div class="object-cover w-full h-48 bg-gray-200 animate-pulse" />
            </div>
            <div class="flex flex-col justify-between flex-1 px-6 pb-6 bg-white pt-7">
              <div class="flex-1">
                <h3 class="w-1/4 h-4 mb-2 bg-gray-400 animate-pulse" />
                <div class="block">
                  <h2 class="w-1/2 h-6 mb-4 bg-gray-500 animate-pulse" />
                  <p class="w-full h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse" />
                  <p class="w-2/3 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse" />
                  <p class="w-1/2 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse" />
                </div>
              </div>
              <div class="flex items-center mt-6">
                <div class="flex-shrink-0">
                  <a href="#">
                    <div class="w-10 h-10 bg-gray-400 rounded-full animate-pulse" />
                  </a>
                </div>
                <div class="flex flex-col items-start justify-center w-full h-auto ml-3 space-y-3">
                  <!-- author -->
                  <p class="w-1/3 h-3 leading-relaxed bg-gray-500 animate-pulse" />
                  <!-- date and length -->
                  <p class="w-1/4 h-3 leading-relaxed bg-gray-400 animate-pulse" />
                </div>
              </div>
            </div>

          </span>
        </div>

        <div v-else class="relative grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <span v-for="blogPost in correctSet" :key="blogPost.content.body[0].text" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <img class="object-cover w-full h-48" data-not-lazy :src="blogPost.content.image" alt="">
              <!-- <div class="object-cover w-full h-48 bg-gray-200 animate-pulse" /> -->
            </div>
            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
              <div class="flex-1">
                <p class="text-sm font-medium leading-5 text-blue-600">
                  <span class="hover:underline">
                    Blog
                  </span>
                </p>
                <nuxt-link :to="'blog/' + blogPost.content.body[0].slug" class="block">
                  <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    {{ blogPost.content.body[0].text }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    {{ blogPost.content.teaserText }}...
                  </p>
                </nuxt-link>
              </div>
              <div class="flex items-center mt-6">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img class="w-10 h-10 rounded-full" src="~/static/dani.jpg" data-not-lazy alt="">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium leading-5 text-gray-900">
                    <a href="#" class="hover:underline">
                      Dani Bucaro
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2020-03-16">
                      Mar 16, 2020
                    </time>
                    <span class="mx-1">
                      &middot;
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </span>
        </div>
        <!-- <PaginateIcon @update="updateSelected" /> -->
      </div>
    </div>
    <BlogFooter :selected="selected" @update="updateSelected" />
  </main>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import BlogFooter from '~/components/BlogFooter'
export default {
  name: 'BlogGrid2',
  components: {
    BlogFooter
  },
  data () {
    return {
      loaded: false,
      selected: 1,
      result: null
    }
  },
  async fetch () {
    const version = this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev ? 'draft' : 'published'
    // Load the JSON from the API
    this.result = await this.$nuxt.context.app.$storyapi.get('cdn/stories/', {
      version,
      starts_with: 'blog'
    }).then((res) => {
      return {
        result: res.data
      }
    }).catch((res) => {
      this.$nuxt.context.error({ statusCode: res.response.status, message: res.response.data })
    })
    // this.page = await this.$nuxt.context.$content('articles', slug)
    //   .fetch()
    //   .catch((err) => {
    //     error({ statusCode: 404, message: 'Page not found: ' + err })
    //   })
  },
  computed: {
    correctSet () {
      if (this.result) {
        const chunkArray = function (myOriginalArray, chunkSize) {
          const results = []
          const myArray = [...myOriginalArray]

          while (myArray.length) {
            results.push(myArray.splice(0, chunkSize))
          }

          return results
        }
        return chunkArray(this.result.result.stories, 3).reverse()[this.selected - 1]
      } else {
        return []
      }
    },
    showSkeletons () {
      return (this.result === null)
    }
  },
  methods: {
    updateSelected (val) {
      this.selected = val
    },
    lazyLoadImage () {
      const media = this.$refs.blogImg
      return this.$lazyLoad(media)
      // [...media].forEach(m => this.$lazyLoad(m))
    }
  }
}
</script>
