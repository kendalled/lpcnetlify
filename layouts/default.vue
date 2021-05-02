<template>
  <div>
    <!-- <UpdateBrowser v-if="isInternet" /> -->
    <FullNav />
    <nuxt />
  </div>
</template>

<script>
import FullNav from '~/components/FullNav'
export default {
  name: 'Default',
  components: {
    FullNav
  }
  // head () {
  //   return {
  //     script: [
  //       {
  //         hid: 'tawk',
  //         src: 'https://embed.tawk.to/5f0365da223d045fcb7b6a8e/default',
  //         defer: true
  //       }
  //     ]
  //   }
  // }
}
</script>

<style scoped>
.max-w-8xl {
  max-width: 90rem;
}
</style>
