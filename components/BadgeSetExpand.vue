<template>
  <div class="inline-block -mt-0.5">
    <button v-if="status <= 1" class="bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 text-gray-700 inline-flex items-center px-2 py-0.5 hover:bg-gray-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4" @click="opened = !opened">
      <svg class="text-gray-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      {{ correctTitle }}
    </button>
    <button v-if="status >= 2 && status < 6" class="bg-yellow-100 focus:outline-none focus:ring-yellow text-yellow-700 inline-flex items-center px-2 py-0.5 hover:bg-yellow-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4" @click="opened = !opened">
      <svg class="text-yellow-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      {{ correctTitle }}
    </button>
    <button v-if="status >= 6 && status < 9" class="bg-blue-100 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-blue-700 inline-flex items-center px-2 py-0.5 hover:bg-blue-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4" @click="opened = !opened">
      <svg class="text-blue-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      {{ correctTitle }}
    </button>
    <button v-if="status >= 9 && status <= 12" class="bg-green-100 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 text-green-700 inline-flex items-center px-2 py-0.5 hover:bg-green-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4" @click="opened = !opened">
      <svg class="text-green-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      {{ correctTitle }}
    </button>
    <button v-if="status === 13" class="bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 text-gray-700 inline-flex items-center px-2 py-0.5 hover:bg-gray-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4" @click="opened = !opened">
      <svg class="text-gray-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      {{ correctTitle }}
    </button>
    <transition
      enter-class="transform scale-95 opacity-0"
      enter-active-class="transition duration-200 ease-out"
      enter-to-class="transform scale-100 opacity-100"
      leave-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-to-class="transform scale-95 opacity-0"
    >
      <section v-if="opened" v-click-outside="vcoConfig" class="absolute z-50 w-auto h-auto origin-top-right bg-white rounded-md shadow-lg md:origin-top-left top-12 md:top-16 left-24 md:left-1/4">
        <div class="grid grid-cols-2 gap-3 px-4 py-4 rounded-md ring-1 ring-black ring-opacity-5 badgeSet">
          <section class="flex flex-col h-full col-span-1 space-y-2">
            <div v-for="choice in choiceListOne" :key="choice.text">
              <button v-if="choice.color === 'gray'" class="bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 text-gray-700 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4" @click="emitChoice(choice)">
                <svg class="text-gray-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                {{ choice.text }}
              </button>
              <button v-if="choice.color === 'yellow'" class="bg-yellow-100 focus:outline-none focus:ring-yellow text-yellow-700 inline-flex items-center px-2 py-0.5 hover:bg-yellow-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4" @click="emitChoice(choice)">
                <svg class="text-yellow-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                {{ choice.text }}
              </button>
            </div>
          </section>
          <section class="flex flex-col h-full col-span-1 space-y-2">
            <div v-for="choice in choiceListTwo" :key="choice.text" @click="emitChoice(choice)">
              <button v-if="choice.color === 'blue'" class="bg-blue-100 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-blue-700 inline-flex items-center px-2 py-0.5 hover:bg-blue-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4">
                <svg class="text-blue-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                {{ choice.text }}
              </button>
              <button v-if="choice.color === 'green'" class="bg-green-100 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 text-green-700 inline-flex items-center px-2 py-0.5 hover:bg-green-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4">
                <svg class="text-green-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                {{ choice.text }}
              </button>
              <button v-if="choice.color === 'gray'" class="bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 text-gray-700 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4" @click="emitChoice(choice)">
                <svg class="text-gray-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                {{ choice.text }}
              </button>
            </div>
          </section>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'BadgeSetExpand',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      opened: false,
      choiceList: [
        {
          val: -2,
          color: 'gray',
          inverted: true,
          text: 'Unread'
        },
        {
          val: -1,
          color: 'gray',
          inverted: false,
          text: 'Read'
        },
        {
          val: 0,
          color: 'gray',
          inverted: true,
          text: 'Need info'
        },
        {
          val: 1,
          color: 'gray',
          inverted: false,
          text: 'Sent'
        },
        {
          val: 2,
          color: 'yellow',
          inverted: false,
          text: 'Intial WIP'
        },
        {
          val: 3,
          color: 'yellow',
          inverted: true,
          text: 'Backlog'
        },
        {
          val: 4,
          color: 'yellow',
          inverted: false,
          text: 'Revising'
        },
        {
          val: 5,
          color: 'yellow',
          inverted: true,
          text: 'Art done'
        },
        {
          val: 6,
          color: 'blue',
          inverted: false,
          text: 'Quoting'
        },
        {
          val: 7,
          color: 'blue',
          inverted: true,
          text: 'Discussing'
        },
        {
          val: 8,
          color: 'blue',
          inverted: false,
          text: 'Need $'
        },
        {
          val: 9,
          color: 'green',
          inverted: true,
          text: 'Await label'
        },
        {
          val: 10,
          color: 'green',
          inverted: false,
          text: 'Tracking'
        },
        {
          val: 11,
          color: 'green',
          inverted: false,
          text: 'In transit'
        },
        {
          val: 12,
          color: 'green',
          inverted: false,
          text: 'Complete'
        },
        {
          val: 13,
          color: 'gray',
          inverted: false,
          text: 'Inactive'
        }
      ]
    }
  },
  computed: {
    choiceListOne () {
      const data = [...this.choiceList]
      return (data.splice(0, 8))
    },
    choiceListTwo () {
      const data = [...this.choiceList]
      return (data.splice(8))
    },
    correctTitle () {
      const offset = 2
      return this.choiceList[this.status + offset].text
    },
    vcoConfig () {
      return {
        handler: this.close,
        events: ['click'],
        // activate / deactivate click-outside directive dynamically
        isActive: this.opened
      }
    }
  },
  methods: {
    close () {
      this.opened = false
    },
    emitChoice (choice) {
      this.$emit('chosen', choice.val)
      this.close()
    }
  }
}
</script>
