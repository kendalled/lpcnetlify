<template>
  <div class="bg-gray-50">
    <section v-editable="blok" class="relative px-4 pt-6 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between w-full h-auto mx-auto rounded max-w-7xl lg:flex-row feature">
        <!-- first image for desktop -->
        <div class="items-center justify-center hidden h-auto -mt-4 lg:flex lg:w-2/5">
          <img :class="[isBig ? 'w-56 h-auto' : 'w-64 h-auto -ml-10']" :src="blok.image" alt="Alt prop">
        </div>
        <div class="prose max-w-none lg:w-3/5">
          <h2>
            {{ blok.headline }}
          </h2>
          <p>
            {{ blok.paragraph1 }}
          </p>
          <p>
            {{ blok.paragraph2 }}
          </p>
        </div>
        <!-- second image for mobile -->
        <div class="flex items-center justify-center w-full h-64 lg:hidden">
          <img class="object-cover w-64 h-auto mt-12 lg:hidden" :src="blok.image" alt="Alt prop">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CoinContentImage',
  props: {
    blok: {
      type: Object,
      default () {
        return {}
      }
    },
    isBig: {
      type: Boolean,
      default: true
    }
  }
}
</script>
