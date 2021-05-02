<template>
  <div v-editable="blok" class="w-full px-4 py-2 mx-auto prose sm:py-5 max-w-7xl sm:px-6 lg:px-8" v-html="blok.value.content" />
</template>

<style scoped>
.max-w-my-xl {
  max-width: 76rem !important;
}
</style>

<script>
export default {
  props: ['blok']
}
</script>
