<template>
  <!-- remove mt-2? -->
  <nav class="flex items-center justify-center mt-2 space-x-8">
    <p class="hidden text-sm font-medium text-gray-600 leading-5 md:inline-block">
      Step {{ step + 1 }} of {{ total }}
    </p>
    <ul class="flex items-center space-x-5">
      <li v-for="i in total" :key="'Step' + i">
        <!-- Completed Step -->
        <button v-if="i - 1 < step" class="block w-2.5 h-2.5 bg-blue-600 rounded-full hover:bg-blue-900 focus:bg-blue-900" @click.prevent="emitChange(i - 1)" />
        <!-- Current Step -->
        <div v-if="i - 1 === step" class="relative flex items-center justify-center">
          <span class="absolute flex w-5 h-5 p-px">
            <span class="w-full h-full bg-blue-200 rounded-full" />
          </span>
          <span class="relative block w-2.5 h-2.5 bg-blue-600 rounded-full" />
        </div>
        <!-- Incomplete Step -->
        <a v-if="i - 1 > step" href="#" class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400 focus:bg-gray-400" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ProgressBullets',
  props: {
    step: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 3
    }
  },
  methods: {
    emitChange (val) {
      this.$emit('page', val)
    }
  }
}

</script>
