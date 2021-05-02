<template>
  <div class="bg-gray-100">
    <section class="px-8 mt-12 bg-white lg:pl-2 lg:mt-16">
      <div class="flex-col justify-center w-full h-auto mx-auto rounded max-w-7xl lg:flex-row lg:flex feature">
        <!-- first image for desktop -->
        <!-- <div class="items-center justify-center hidden h-56 my-auto sm:h-72 lg:flex lg:h-64 lg:w-2/5">
          <img class="w-auto h-64 mx-auto" :src="img" alt="Support team">
        </div> -->
        <div class="w-2/5 h-auto">
          <VerticalNav2 />
        </div>
        <div class="flex items-center w-auto max-w-3xl ml-2 sm:ml-8 lg:max-w-3xl">
          <div class="pr-0 -mt-6 blog__body lg:-ml-0">
            <h2>
              {{ headline }}
            </h2>
            <p class="text-gray-600">
              {{ p1 }}
            </p>
            <p class="mt-4 text-gray-600">
              {{ p2 }}
            </p>
          </div>
        </div>
        <!-- second image for mobile -->
        <img class="object-cover w-auto h-64 mx-auto mt-12 lg:hidden" :src="img" alt="Support team">
      </div>
    </section>
  </div>
</template>

<script>
import VerticalNav2 from '~/components/VerticalNav2'
export default {
  name: 'InteriorStyles',
  components: {
    VerticalNav2
  },
  props: {
    headline: {
      type: String,
      default: 'Headline 2'
    },
    p1: {
      type: String,
      default: 'Para 1.'
    },
    p2: {
      type: String,
      default: 'Para 2.'
    }
  }
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
</style>
