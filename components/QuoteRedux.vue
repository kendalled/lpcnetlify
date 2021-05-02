<template>
  <div class="mx-auto mt-5 max-w-8xl">
    <form class="px-5 pt-6 bg-white shadow rounded-md sm:px-6">
      <transition-group name="fade">
        <div v-for="page in pages" v-show="page.active" :key="page.pid" class="radio-wrap">
          <Iradio v-if="page.active" :choice-list="page.data" :option-set="page.ind" :title="page.title" @choice="choiceMade" />
        </div>
      </transition-group>
      <!-- change this mt-value to set height (for now) -->
      <div class="flex items-center justify-between py-3 mt-8 bg-white border-t border-gray-200">
        <div class="hidden sm:block">
          <p class="text-sm text-gray-700 leading-5">
            Step
            <span class="font-medium">{{ currentPage }} </span>
            of
            <span class="font-medium">5</span>
          </p>
        </div>
        <div class="flex justify-between flex-1 sm:justify-end">
          <button class="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 border border-transparent transition duration-150 ease-in-out rounded-md hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-200" @click.prevent="changePage(0)">
            Back
          </button>
          <button class="px-4 py-2 ml-2 text-sm font-medium text-white bg-blue-600 border border-transparent transition duration-150 ease-in-out rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:bg-blue-500 active:bg-blue-600" @click.prevent="changePage(1)">
            Continue
          </button>
        </div>
      </div>
      <!-- <span class="absolute mt-12 -ml-10 text-base font-semibold text-gray-500 uppercase">{{ currentPage }} / 5</span> -->
    </form>
  </div>
</template>

<!--
<div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <form class="px-5 py-6 bg-white rounded-lg shadow sm:px-6">
      <transition-group name="fade">
        <div v-for="page in pages" v-show="page.active" :key="page.pid" class="radio-wrap">
          <Iradio v-if="page.active" :choice-list="page.data" :option-set="page.ind" :title="page.title" @choice="choiceMade" />
        </div>
      </transition-group>
      <div class="inline-flex justify-center w-full mt-8">
        <button class="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-l transition-colors hover:bg-gray-400 focus:outline-none" @click.prevent="changePage(0)">
          Prev
        </button>
        <button class="px-4 py-2 ml-4 font-bold text-gray-800 bg-gray-300 rounded-r transition-colors hover:bg-gray-400 focus:outline-none" @click.prevent="changePage(1)">
          Next
        </button>
      </div>
      <span class="absolute mt-20 -ml-10 text-base font-semibold text-gray-500 uppercase nunito">{{ currentPage }} / 5</span>
    </form>
  </div>
-->

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
.max-w-8xl {
  max-width: 90rem;
}
</style>

<script>
import Iradio from '~/components/Iradio'
export default {
  name: 'QuoteRedux',
  components: {
    Iradio
  },
  data () {
    return {
      currentPage: 1,
      pages: [
        {
          ind: 0,
          pid: 'p1',
          active: true,
          title: 'Production',
          data:
          [
            {
              id: 0,
              sid: 'pr0',
              name: 'Die Struck',
              src: 'https://lapelpinsandcoins.com/images/quote/diestruck2.png'
            },
            {
              id: 1,
              sid: 'pr1',
              name: 'Soft Enamel',
              src: 'https://lapelpinsandcoins.com/images/quote/softenamel.png'
            },
            {
              id: 2,
              sid: 'pr2',
              name: 'Cloisonné',
              src: 'https://lapelpinsandcoins.com/images/quote/cloisonne.png'
            },
            {
              id: 3,
              sid: 'pr3',
              name: 'Silk Screen',
              src: 'https://lapelpinsandcoins.com/images/quote/silkscreen.png'
            },
            {
              id: 4,
              sid: 'pr4',
              name: 'Offset Printed',
              src: 'https://lapelpinsandcoins.com/images/quote/offset2.png'
            }
          ]
        },
        {
          ind: 1,
          pid: 'p2',
          active: false,
          title: 'Plating',
          data:
          [
            {
              id: 0,
              sid: 'pl0',
              name: 'Antique Gold',
              src: 'https://lapelpinsandcoins.com/images/quote/AGold.png'
            },
            {
              id: 1,
              sid: 'pl1',
              name: 'Antique Silver',
              src: 'https://lapelpinsandcoins.com/images/quote/ASilver.png'
            },
            {
              id: 2,
              sid: 'pl2',
              name: 'Antique Copper',
              src: 'https://lapelpinsandcoins.com/images/quote/ACopper.png'
            },
            {
              id: 3,
              sid: 'pl3',
              name: 'Dual Plated',
              src: 'https://lapelpinsandcoins.com/images/quote/DualPlated.png'
            },
            {
              id: 4,
              sid: 'pl4',
              name: 'Color Coated',
              src: 'https://lapelpinsandcoins.com/images/quote/ColorCoated.png'
            }
          ]
        },
        {
          ind: 2,
          pid: 'p3',
          active: false,
          title: 'Sizing',
          data:
          [
            {
              id: 0,
              sid: 'sz0',
              name: '0.75 inch',
              src: 'https://lapelpinsandcoins.com/images/newsizing/penny.png'
            },
            {
              id: 1,
              sid: 'sz1',
              name: '1.00 inch',
              src: 'https://lapelpinsandcoins.com/images/newsizing/quarter.png'
            },
            {
              id: 2,
              sid: 'sz2',
              name: '1.25 inch',
              src: 'https://lapelpinsandcoins.com/images/newsizing/50centcoin.png'
            },
            {
              id: 3,
              sid: 'sz3',
              name: '1.50 inch',
              src: 'https://lapelpinsandcoins.com/images/newsizing/dollarcoin.png'
            },
            {
              id: 4,
              sid: 'sz4',
              name: '1.75 inch',
              src: 'https://lapelpinsandcoins.com/images/newsizing/golfball.png'
            }
          ]
        },
        {
          ind: 3,
          pid: 'p4',
          active: false,
          title: 'Backing',
          data:
          [
            {
              id: 0,
              sid: 'bk0',
              name: 'Butterfly Clutch',
              src: 'https://lapelpinsandcoins.com/images/quote/butterfly.png'
            },
            {
              id: 1,
              sid: 'bk1',
              name: 'Black Rubber',
              src: 'https://lapelpinsandcoins.com/images/quote/blackrubber.png'
            },
            {
              id: 2,
              sid: 'bk2',
              name: 'Yellow Rubber',
              src: 'https://lapelpinsandcoins.com/images/quote/yellowrubber.png'
            },
            {
              id: 3,
              sid: 'bk3',
              name: 'Safety Pin',
              src: 'https://lapelpinsandcoins.com/images/quote/safetypin.png'
            },
            {
              id: 4,
              sid: 'bk4',
              name: 'Deluxe Clutch',
              src: 'https://lapelpinsandcoins.com/images/quote/deluxe.png'
            }
          ]
        },
        {
          ind: 4,
          pid: 'p5',
          active: false,
          title: 'Packaging',
          data:
          [
            {
              id: 0,
              sid: 'pk0',
              name: 'Poly Bag',
              src: 'https://lapelpinsandcoins.com/images/quote/poly.jpg'
            },
            {
              id: 1,
              sid: 'pk1',
              name: 'Velvet Bag',
              src: 'https://lapelpinsandcoins.com/images/quote/velvet.jpg'
            },
            {
              id: 2,
              sid: 'pk2',
              name: 'Acrylic Case',
              src: 'https://lapelpinsandcoins.com/images/quote/acryliccase.jpg'
            },
            {
              id: 3,
              sid: 'pk3',
              name: 'Velvet Case',
              src: 'https://lapelpinsandcoins.com/images/quote/velvetcase.jpg'
            }
          ]
        }
      ]
    }
  },
  watch: {
    currentPage () {
      const index = this.currentPage - 1
      for (let i = 0; i < this.pages.length; i++) {
        if (i !== index) {
          this.pages[i].active = false
        }
      }
      this.pages[this.currentPage - 1].active = true
    }
  },
  methods: {
    changePage (dir) {
      // down
      if (dir === 0 && this.currentPage !== 1) {
        this.currentPage -= 1
      }
      // up
      if (dir === 1 && this.currentPage !== 5) {
        this.currentPage += 1
      }
    },
    choiceMade (title, choice) {
      this.$emit('select', title, choice)
    },
    updateQuote (data) {
      this.$store.commit('quote/setQuote', data)
    }
  }
}
</script>
