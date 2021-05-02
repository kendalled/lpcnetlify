<template>
  <!-- todo: simplify classes -->
  <div>
    <div class="w-full px-8 pt-6 pb-8 mx-auto blog__body max-w-7xl lg:pt-12 lg:pb-16">
      <h2>{{ headline }}</h2>
      <p class="text-gray-600">
        {{ grabber }}
      </p>
      <p class="mt-4 text-gray-600">
        {{ p1 }}
      </p>
      <p class="mt-4 mb-2 text-gray-600">
        {{ p2 }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentOnly',
  props: {
    headline: {
      type: String,
      default: 'Our pins stand out from the rest.'
    },
    grabber: {
      type: String,
      default: 'Custom pins can help promote your business, club, or event with ease.'
    },
    p1: {
      type: String,
      default: 'Our pins are struck from the highest quality metal to ensure a beautiful, classy, and durable product. There are several different kinds of printing processes and it can be overwhelming to research them all to know what best fits your design. We work with you every step of the way to ensure you’ll love the final product.'
    },
    p2: {
      type: String,
      default: 'Most custom pin designs can be made into soft enamel pins, but this process often works best with designs that have minimal lines and clearly defined areas of color. These things are important because the colored areas sit slightly recessed below the metal separations. If you’re not sure which type of pin to choose, don’t worry! We will work with you to make sure you choose the process that best fits your design.'
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
