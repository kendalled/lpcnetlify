<template>
  <section class="mt-8 lg:ml-1 lg:mt-0">
    <div class="relative max-w-lg mx-auto lg:mx-0 lg:max-w-xl sm:h-64 lg:h-48 h-96">
      <transition-group
        enter-class="opacity-0 transform scale-95"
        enter-active-class="transition duration-200 ease-out"
        enter-to-class="opacity-100 transform scale-100"
        leave-class="opacity-100 transform scale-100"
        leave-active-class="transition duration-75 ease-in"
        leave-to-class="opacity-0 transform scale-95"
        mode="out-in"
        @after-leave="resetPic"
      >
        <div v-for="(pin, p) in pinSet" v-show="(p === page)" :key="pin.title" class="absolute flex flex-col items-center justify-start max-w-lg px-6 py-6 bg-white shadow-2xl rounded-md lg:-mt-1 sm:mx-auto sm:flex-row lg:ml-auto lg:max-w-xl">
          <span class="relative flex items-center justify-center w-full sm:w-1/3">
            <img class="cursor-pointer transition-colors duration-150 ease-in-out rounded-md w-36 h-36 sm:mx-0 hover:bg-gray-100" :src="pin.pics[currentPic]" :alt="[currentPic === 0 ? pin.title : pin.title + ' back']" @click="changePic">
          </span>
          <span class="w-full pt-4 sm:pt-0 sm:w-2/3 sm:pl-6">
            <div class="flex items-center justify-between w-full">
              <span class="inline-block font-semibold text-gray-700">
                {{ pin.title }}
              </span>
              <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                {{ pin.price }} ea
              </span>
            </div>
            <p class="mt-2 text-gray-600">
              {{ pin.desc }} Design your own pin in minutes with our <nuxt-link to="/quote" title="Quote form">free quote</nuxt-link>.
            </p>
          </span>
        </div>
      </transition-group>
      <div class="absolute inset-y-0 left-3 sm:left-0 lg:flex lg:items-center">
        <button aria-label="Previous pin" class="w-12 h-12 p-3 mt-24 -ml-6 bg-white rounded-full shadow-lg focus:outline-none group lg:mt-0" @click="lastPage">
          <svg class="w-full h-full text-gray-500 transition-colors duration-200 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
          </svg>
        </button>
      </div>
      <div class="absolute inset-y-0 right-3 sm:right-0 lg:flex lg:items-center">
        <button aria-label="Next pin" class="w-12 h-12 p-3 mt-24 -mr-6 bg-white rounded-full shadow-lg focus:outline-none group lg:mt-0" @click="nextPage">
          <svg class="w-full h-full text-gray-500 transition-colors duration-200 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
          </svg>
        </button>
      </div>
    </div>
    <!-- <LatestPinSteps :total-steps="pinSet.length" :current-step="page" @choice="changeNum" /> -->
  </section>
</template>

<script>
export default {
  name: 'LatestPins',
  props: {
    pinSet: {
      type: Array,
      default () {
        return [
          {
            title: 'Educational Pins',
            price: '$1.99',
            pics: [
              require('~/static/pin01.png'),
              require('~/static/pinback01.png')
            ],
            desc: 'Cast in polished gold with a hard enamel finish, these sleek pins honor special education instructors in elementary schools.'
          },
          {
            title: 'Festival Pins',
            price: '$1.66',
            pics: [
              require('~/static/GlitterPin.png'),
              require('~/static/pinback01.png')
            ],
            desc: 'These are a perfect keepsake for remembering an event. Cast in antiqued silver with a hard enamel finish, this pin is the perfect keepsake.'
          },
          {
            title: 'Movie Pins',
            price: '$1.75',
            pics: [
              require('~/static/MoviePin.png'),
              require('~/static/pinback01.png')
            ],
            desc: 'Movie pins are a perfect keepsake for friends & family. Cast in antiqued silver with a hard enamel finish, this movie pin is the perfect keepsake.'
          }
        ]
      }
    }
  },
  data () {
    return {
      currentPic: 0,
      page: 0
    }
  },
  methods: {
    resetPic () {
      this.currentPic = 0
    },
    lastPage () {
      if (this.page > 0) {
        this.page -= 1
      } else {
        this.page = this.pinSet.length - 1
      }
    },
    nextPage () {
      if (this.page < this.pinSet.length - 1) {
        this.page += 1
      } else {
        this.page = 0
      }
    },
    changePic () {
      if (this.currentPic === 0) {
        this.currentPic = 1
      } else if (this.currentPic === 1) {
        this.currentPic = 0
      }
    }
  }
}
</script>
