<template>
  <div class="w-full h-auto bg-blue-900">
    <section class="grid w-full grid-cols-1 gap-x-4 px-4 pt-6 mx-auto md:grid-cols-3 max-w-7xl sm:px-6 lg:px-8">
      <div class="w-full h-auto col-span-1">
        <VerticalNavigation @chosen="updateSelected" />
      </div>
      <div class="relative w-full h-auto col-span-1 pb-16 overflow-hidden">
        <div v-for="(pic, p) in currentSet" :key="p" class="flex" :class="[p === 0 ? 'justify-center' : p === 2 ? 'justify-end' : 'justify-start']">
          <img v-if="p === 0" class="w-auto h-32 mt-1" :src="pic" alt="Pin 04">
          <img v-if="p === 1" class="w-auto h-40" :src="pic" alt="Pin 03">
          <img v-if="p === 2" class="w-auto h-56 -mt-4" :src="pic" alt="Pin 02">
          <img v-if="p === 3" class="absolute w-auto h-64 -mt-12" :src="pic" alt="Pin 01">
        </div>
      </div>
      <!-- <div class="flex justify-center">
          <img class="w-auto h-32 mt-1" src="~/static/angled/SoftEnamel04.png" alt="Pin 04">
        </div>
        <div class="flex justify-start">
          <img class="w-auto h-40" src="~/static/angled/SoftEnamel03.png" alt="Pin 03">
        </div>
        <div class="flex justify-end">
          <img class="w-auto h-56" src="~/static/angled/SoftEnamel02.png" alt="Pin 02">
        </div>
        <div class="flex justify-start">
          <img class="absolute w-auto h-64 -mt-12" src="~/static/angled/SoftEnamel01.png" alt="Pin 01">
        </div>
      </div> -->
      <div class="w-full h-auto col-span-1 bg-white rounded-t-md">
        <div class="h-auto px-6 py-6">
          <p class="text-2xl font-bold text-gray-800">
            {{ selected }}
          </p>
          <p class="mt-2 text-base text-gray-700">
            Most custom pin designs can be made into soft enamel pins, but this process often works best with designs that have minimal lines and clearly defined areas of color. These details are important because the colored areas sit slightly recessed, below the metal separations. <br><br> If you’re not sure which type of pin to choose, don’t worry! Just ask, and we can provide suggestions from our experienced team.
          </p>
          <span class="block w-full h-0.5 mt-4 bg-gray-200 rounded" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VerticalNavigation from '~/components/VerticalNavigation'
export default {
  name: 'InfoBlock',
  components: {
    VerticalNavigation
  },
  data () {
    return {
      selected: 'Soft Enamel',
      picSets: [
        [
          require('~/static/angled/SoftEnamel04.png'),
          require('~/static/angled/SoftEnamel03.png'),
          require('~/static/angled/SoftEnamel02.png'),
          require('~/static/angled/SoftEnamel01.png')
        ],
        [
          require('~/static/angled/DieStruck04.png'),
          require('~/static/angled/DieStruck03.png'),
          require('~/static/angled/DieStruck02.png'),
          require('~/static/angled/DieStruck01.png')
        ]
      ]
    }
  },
  computed: {
    currentSet () {
      return (this.selected === 'Soft Enamel' ? this.picSets[0] : this.picSets[1])
    }
  },
  methods: {
    updateSelected (val) {
      console.log('woosdof')
      this.selected = val
    }
  }
}
</script>
