<template>
  <!-- todo: simplify classes -->
  <div v-editable="blok" class="pt-2 bg-gray-50">
    <div class="w-full px-8 pt-6 pb-8 mx-auto blog__body max-w-7xl lg:pt-12 lg:pb-16">
      <h2>{{ blok.headline }}</h2>
      <p class="text-gray-600">
        {{ blok.grabber }}
      </p>
      <p class="mt-4 text-gray-600">
        {{ blok.paragraph1 }}
      </p>
      <p class="mt-4 mb-2 text-gray-600">
        {{ blok.paragraph2 }}
      </p>
    </div>
    <TailPricing :product-num="1" />
    <LargeTest :img="require('~/static/spinners.png')" />
  </div>
</template>

<script>
import TailPricing from '~/components/TailPricing'
import LargeTest from '~/components/LargeTest'

export default {
  name: 'CoinContentOnly',
  components: {
    TailPricing,
    LargeTest
  },
  props: ['blok']
}
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.max-w-8xl {
  max-width: 90rem !important;
}
</style>
