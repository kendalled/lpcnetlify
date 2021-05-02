<template>
  <div class="w-full max-w-md px-4 pt-4 pb-12 ml-4 bg-white rounded shadow">
    <h3 class="w-full text-lg font-semibold text-center">
      Your Quote (saved):
    </h3>
    <div v-for="(elem, j) in quote" :key="j" class="w-full h-full my-2 border-b">
      {{ elem.title }}: <span :class="[elem.selected ? 'text-green-600' : 'text-gray-600']">{{ elem.selected ? elem.selected : 'none' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteHelper',
  computed: {
    quote () {
      return this.$store.state.quote.quote
    }
  }
}
</script>
