<template>
  <div class="badgeSet">
    <div v-for="choice in choiceList" :key="choice.text">
      <!-- <span v-if="optionNum === choice.val" :class="[choice.inverted ? ('bg-' + choice.color + '-500' + ' text-' + choice.color + '-50') : ('bg-' + choice.color + '-100' + ' text-' + choice.color + '-800')]" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4">
        <svg :class="[choice.inverted ? ('text-' + choice.color + '-50') : ('text-' + choice.color + '-400')]" class="mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        {{ choice.text }}
      </span> -->
      <span v-if="choice.val <= 1 && optionNum === choice.val" class="bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 text-gray-700 inline-flex items-center px-2 py-0.5 hover:bg-gray-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4">
        <svg class="text-gray-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        {{ choice.text }}
      </span>
      <span v-if="choice.val >= 2 && choice.val < 6 && optionNum === choice.val" class="bg-yellow-100 focus:outline-none focus:ring-yellow text-yellow-700 inline-flex items-center px-2 py-0.5 hover:bg-yellow-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4">
        <svg class="text-yellow-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        {{ choice.text }}
      </span>
      <span v-if="choice.val >= 6 && choice.val < 9 && optionNum === choice.val" class="bg-blue-100 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-blue-700 inline-flex items-center px-2 py-0.5 hover:bg-blue-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4">
        <svg class="text-blue-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        {{ choice.text }}
      </span>
      <span v-if="choice.val >= 9 && choice.val <= 12 && optionNum === choice.val" class="bg-green-100 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 text-green-700 inline-flex items-center px-2 py-0.5 hover:bg-green-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4">
        <svg class="text-green-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        {{ choice.text }}
      </span>
      <span v-if="choice.val === 13 && optionNum === choice.val" class="bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 text-gray-700 inline-flex items-center px-2 py-0.5 hover:bg-gray-200 transition duration-150 ease-in-out rounded text-xs font-medium leading-4">
        <svg class="text-gray-700 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        {{ choice.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadgeSet',
  props: {
    optionNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      choiceList: [
        {
          val: -2,
          color: 'gray',
          inverted: false,
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
          inverted: false,
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
          inverted: true,
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
          inverted: true,
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
          inverted: true,
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
          inverted: true,
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
          inverted: true,
          text: 'Tracking'
        },
        {
          val: 11,
          color: 'green',
          inverted: true,
          text: 'In transit'
        },
        {
          val: 12,
          color: 'green',
          inverted: true,
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
  }
}
</script>
