<template>
  <div v-editable="blok" class="grid">
    <div class="w-full px-8 mx-auto mt-4 blog__body max-w-7xl" v-html="blok.markdown.content" />
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
