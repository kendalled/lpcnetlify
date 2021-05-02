<template>
  <div class="observer" />
</template>

<script>
export default {
  name: 'Observer',
  data () {
    return {
      observer: null
    }
  },
  mounted () {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersect')
      } else {
        this.$emit('deintersect')
      }
    })
    this.observer.observe(this.$el)
  },
  destroyed () {
    // .unobserve() if just one element
    this.observer.disconnect()
  }
}
</script>
