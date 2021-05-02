<template>
  <div>
    <div class="flex flex-col items-center justify-center w-full h-auto bg-gray-800 py-72">
      <h1 v-if="error.statusCode === 404" class="text-2xl antialiased font-bold text-gray-100">
        Sorry, this page couldn't be found.
      </h1>
      <h1 v-else class="text-2xl antialiased font-bold text-gray-100">
        An error occurred
      </h1>
      <nuxt-link class="text-base antialiased font-semibold text-gray-200 transition-colors duration-150 ease-in-out hover:text-white hover:underline" to="/" title="Home page">
        return to home page
      </nuxt-link>
    </div>
    <TailFoot />
  </div>
</template>

<script>
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    TailFoot
  },
  props: ['error']
}
</script>
