<template>
  <div v-if="blok.active" v-editable="blok" class="relative flex items-center justify-center w-full h-56 mt-4 overflow-hidden bg-fixed">
    <img :src="blok.image" class="absolute object-cover w-auto h-auto bg-fixed">
  </div>
</template>

<script>
export default {
  name: 'BlogHero',
  props: ['blok']
}
</script>
