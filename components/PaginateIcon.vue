<template>
  <section class="absolute justify-between hidden w-full h-auto floater xl:flex -mt-60">
    <button
      class="w-16 h-16 -ml-40 bg-blue-700 rounded-full shadow-lg cursor-pointer transition-colors hover:bg-blue-600 hover:text-white duration-150 focus:outline-none"
      aria-role="previous"
      @click.prevent="changeSelected(0)"
    >
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-auto h-16 -ml-1 text-blue-50">
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <button
      class="w-16 h-16 -mr-40 bg-blue-700 rounded-full shadow-lg cursor-pointer transition-colors hover:bg-blue-600 hover:text-white duration-150 focus:outline-none"
      aria-role="next"
      @click.prevent="changeSelected(1)"
    >
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-auto h-16 mx-auto ml-1 text-blue-50">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </section>
</template>

<style lang="css" scoped>
.floater > button {
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.5);
  transition: all .15s 0s ease-out;
}
.floater > button:hover {
  box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
  transform: translatey(-1px);
}
</style>

<script>
export default {
  name: 'PaginateIcon',
  props: {
    flipped: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selected: 1
    }
  },
  methods: {
    changeSelected (way) {
      // negative, then positive (simplify later TODO)
      if (way === 0 && this.selected !== 1) {
        this.selected = this.selected - 1
        this.$emit('update', this.selected)
      } else if (way === 1 && this.selected !== 3) {
        this.selected = this.selected + 1
        this.$emit('update', this.selected)
      }
    }
  }
}
</script>
