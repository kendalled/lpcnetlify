<template>
  <div class="w-full h-auto py-2 bg-white">
    <div v-editable="blok" class="flex flex-col w-full mx-auto max-w-7xl lg:flex-row lg:justify-between lg:pr-4">
      <!-- first image for desktop -->
      <div class="items-center justify-center hidden rounded-sm lg:flex lg:w-2/5">
        <div class="hidden h-auto lg:block lg:w-full">
          <img class="object-cover w-auto h-64 mx-auto rounded" :src="blok.image" alt="Custom pin">
        </div>
      </div>
      <!-- second image for mobile -->
      <img class="object-cover w-auto h-64 mx-auto mb-4 lg:hidden" :src="blok.image" alt="Custom pin">
      <div class="w-full px-4 prose sm:px-6 lg:px-8 lg:w-3/5 max-w-none" v-html="blok.markdown.content" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
