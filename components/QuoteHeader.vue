<template>
  <div>
    <div class="pb-32">
      <QuoteNav />
      <header class="py-10">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-white leading-9">
            Free Quote Request
          </h2>
        </div>
      </header>
    </div>
    <main class="-mt-32">
      <!-- sample content
        <div class="px-5 py-6 bg-white rounded-lg shadow sm:px-6">
          <div class="border-4 border-gray-200 border-dashed rounded-lg h-96" />
        </div> -->
      <QuoteRedux @select="updateQuote" />
    </main>
  </div>
</template>

<script>
import QuoteNav from '~/components/QuoteNav'
import QuoteRedux from '~/components/QuoteRedux'
export default {
  name: 'QuoteHeader',
  components: {
    QuoteNav,
    QuoteRedux
  },
  data () {
    return {
      open: false
    }
  }
}
</script>
