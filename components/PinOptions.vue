<template>
  <div class="bg-gray-100">
    <div class="px-8 pt-20 pb-4 mx-auto max-w-7xl">
      <div class="relative">
        <!-- TODO: transition pages -->
        <div v-for="(page) in pages" v-show="selected === page.id" :key="page.id" class="relative overflow-hidden rounded-lg shadow-2xl transform lg:flex">
          <div class="relative w-full bg-white">
            <!-- header -->
            <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
              <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
                <div class="mt-4 ml-4">
                  <h3 class="text-lg font-medium text-gray-900 leading-6">
                    {{ page.name }}
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 leading-5">
                    {{ page.desc }}
                  </p>
                </div>
              </div>
            </div>
            <!-- end header -->
            <!-- body -->
            <div class="px-4 py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:p-6">
              <!-- Content goes here -->
              <div v-for="choice in page.choices" :key="choice.name" class="flex-col justify-center w-auto h-auto mb-6 lg:mb-0">
                <img class="block w-32 h-32 mx-auto" :src="choice.img">
                <p class="mt-4 text-sm text-center text-gray-600">
                  {{ choice.name }}
                </p>
              </div>
            </div>
            <div class="px-4 py-4 border-t border-gray-200 sm:px-6">
              <div class="text-sm leading-5">
                <a href="#" class="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 hover:underline">
                  Learn more about our <span class="lowercase">{{ page.name }}</span> &rarr;
                </a>
              </div>
            </div>
          <!-- end body -->
          </div>
        </div>
        <div class="absolute inset-y-0 left-0 flex items-center">
          <button class="w-12 h-12 p-3 -ml-6 rounded-full shadow-lg transition-colors duration-200 group bg-gray-50 hover:bg-gray-100 focus:outline-none" @click="changePage(0)">
            <svg class="w-full h-full text-gray-400 transition-colors duration-200 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
            </svg>
          </button>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center">
          <button class="w-12 h-12 p-3 -mr-6 rounded-full shadow-lg transition-colors duration-200 group bg-gray-50 hover:bg-gray-100 focus:outline-none" @click="changePage(1)">
            <svg class="w-full h-full text-gray-400 transition-colors duration-200 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PinOptions2',
  data () {
    return {
      selected: 0,
      pages: [
        {
          id: 0,
          pageName: 'Style',
          name: 'Pin Styles',
          desc: 'Select from a variety of pin styles, from soft enamel to die struck.',
          choices: [
            {
              name: 'Die Struck',
              img: require('~/static/quote/diestruck.png')
            },
            {
              name: 'Soft Enamel',
              img: require('~/static/quote/softenamel.png')
            },
            {
              name: 'Hard Enamel',
              img: require('~/static/quote/cloisonne.png')
            },
            {
              name: 'Silk Screen',
              img: require('~/static/quote/silkscreen.png')
            },
            {
              name: 'Offset Printed',
              img: require('~/static/quote/offset2.png')
            }
          ]
        },
        {
          id: 1,
          pageName: 'Plating',
          name: 'Plating Options',
          desc: 'Select from a variety of plating options, from copper to any custom color.',
          choices: [
            {
              name: 'Polished Gold',
              img: require('~/static/quote/HPGold.png')
            },
            {
              name: 'Polished Silver',
              img: require('~/static/quote/HPSilver.png')
            },
            {
              name: 'Polished Copper',
              img: require('~/static/quote/HPCopper.png')
            },
            {
              name: 'Polished Nickel',
              img: require('~/static/quote/HPNickel.png')
            },
            {
              name: 'Dual Plated',
              img: require('~/static/quote/DualPlated.png')
            }
          ]
        }
      ]
    }
  },
  methods: {
    changePage (dir) {
      if (dir === 1 && this.selected < 1) {
        this.selected += 1
      } else if (dir === 0 && this.selected > 0) {
        this.selected -= 1
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s ease-in-out
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
