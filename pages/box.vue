<template>
  <div class="flex flex-col items-center justify-center h-full max-h-screen min-h-screen p-8 bg-gray-100">
    <div class="w-auto h-auto p-4 shadow-md rounded-md bg-gray-800">
      <BoxxController @update="copyButtons" />
    </div>
    <span class="block w-full mt-8 font-semibold text-center text-gray-600">
      {{ buttonList }}
    </span>
  </div>
</template>

<script>
import BoxxController from '~/components/BoxxController'
export default {
  layout: 'blank',
  components: {
    BoxxController
  },
  data () {
    return {
      pressedButtons: []
    }
  },
  computed: {
    buttonList () {
      return this.pressedButtons.map(button => button.name)
    }
  },
  methods: {
    copyButtons (arr) {
      this.pressedButtons = arr
    }
  }
}
</script>
