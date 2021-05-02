<template>
  <section>
    <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6 rounded-t-md">
      <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
        <div class="mt-4 ml-4">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Active Projects
            <button ref="questionicon" class="absolute mt-1 ml-3 text-gray-300 transition-colors duration-150 focus:outline-none hover:text-gray-400 focus:text-gray-400" aria-roledescription="Opens description modal" @click.prevent="emitDate">
              <svg v-if="newFirst" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5"><path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" /></svg>
              <svg v-else fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5"><path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" /></svg>
            </button>
          </h3>
          <p class="mt-1 text-sm leading-5 text-gray-500">
            Edit information by clicking the edit button.
          </p>
        </div>
        <div class="flex-shrink-0 mt-4 ml-4">
          <span class="inline-flex rounded-md shadow-sm">
            <button type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700" @click="newItem">
              <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              <span>New Project</span>
            </button>
          </span>
        </div>
      </div>
    </div>
    <!-- start wide list -->
    <div class="overflow-hidden bg-white shadow rounded-b-md">
      <div v-for="(section, s) in data" :key="s">
        <ListTab :opened="show[s].open" :length="section.length" :ind="s" :title="labels[s]" @toggle="toggleShow" />
        <RecycleScroller
          v-if="show[s].open"
          v-slot="{ item }"
          page-mode
          class="scroller"
          :items="section"
          :item-size="81"
        >
          <!-- <transition-group
            enter-active-class="transition-opacity duration-200 ease-out"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-150 ease-in"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          > -->
          <ul>
            <li class="border-b border-gray-200 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
              <a href="#" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50" @click.prevent="openProject(item)">
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="flex items-center flex-1 min-w-0">
                    <div class="flex-1 min-w-0 px-4 md:grid md:grid-cols-3 md:gap-4">
                      <div>
                        <div class="text-sm font-medium leading-5 text-blue-600 truncate">{{ item.customerData.name }}</div>
                        <div class="flex items-center mt-2 text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 w-5 h-5 mr-1 text-gray-400"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          ><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          <span class="truncate">{{ item.customerData.email }}</span>
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div class="text-sm font-medium leading-5 text-gray-800 truncate">{{ item.category }}</div>
                        <div class="flex items-center mt-2 text-sm leading-5 text-gray-500">
                          <svg
                            fill="none"
                            class="flex-shrink-0 w-5 h-5 mr-1 text-gray-400"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          ><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                          <span class="truncate">{{ formatPhone(item.customerData.phone) }}</span>
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div class="flex flex-col justify-between h-full">
                          <div class="text-sm leading-5 text-gray-900">
                            Submitted on
                            <time datetime="2020-01-07">{{ convert(item.deadline.seconds) }}</time>
                          </div>
                          <BadgeSet :option-num="item.status" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <!-- </transition-group> -->
        </RecycleScroller>
      </div>
    </div>

    <!-- end list -->
  </section>
</template>

<script>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { RecycleScroller } from 'vue-virtual-scroller'

import BadgeSet from '~/components/BadgeSet'
import ListTab from '~/components/ListTab'
export default {
  name: 'ProjectList',
  components: {
    RecycleScroller,
    BadgeSet,
    ListTab
  },
  props: {
    data: {
      type: Array,
      default () {
        return [{ cost: 0, sentArtist: false, customerData: { zip: '32714', referenceFiles: [], email: 'kendallkj00@gmail.com', city: 'Altamonte Springs', quantity: '50', name: 'Kendall Jackson', description: 'A great lapel pin', state: 'FL', address: '689 Ashford Oaks Dr, #203', phone: '4077168966', country: 'United States' }, deadline: { seconds: 1584547200, nanoseconds: 0 }, status: -1, customer: '8po0sZzHdWXflXgFsgVRligLu7G2', id: 'project-8po0sZzHdWXflXgFsgVRligLu7G2', choices: [{ selected: 'Hard Enamel', title: 'Production' }, { selected: 'Polished Nickel', title: 'Plating' }, { selected: '1.75 inch', title: 'Sizing' }, { title: 'Backing', selected: 'Safety Pin' }, { title: 'Packaging', selected: 'Acrylic Case' }], active: true, category: 'Lapel Pins' }]
      }
    }
  },
  data () {
    return {
      newFirst: true,
      show: [
        {
          open: false
        },
        {
          open: false
        },
        {
          open: false
        },
        {
          open: false
        }
      ],
      labels: [
        'Proofing',
        'Design approved',
        'Order complete',
        'Inactive'
      ]
    }
  },
  watch: {
    data (newVal) {
      if (newVal !== null) {
        this.show[0].open = true
      }
    }
  },
  methods: {
    emitDate () {
      this.newFirst = !this.newFirst
      this.$emit('date')
    },
    toggleShow (num) {
      this.show[num].open = !this.show[num].open
    },
    formatPhone (phone) {
      // Filter only numbers from the input
      const cleaned = ('' + phone).replace(/\D/g, '')

      // Check if the input is of correct length
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)

      if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
      };

      return null
    },
    convert (ts) {
      // Unixtimestamp
      const unixtimestamp = ts

      // Months array
      const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

      // Convert timestamp to milliseconds
      const date = new Date(unixtimestamp * 1000)

      // Year
      const year = date.getFullYear()

      // Month
      const month = monthArr[date.getMonth()]

      // Day
      const day = date.getDate()

      // Hours
      // const hours = date.getHours()

      // // Minutes  + ' - ' + hours + ':' + minutes.substr(-2)
      // const minutes = '0' + date.getMinutes()

      return (month + ' ' + day + ', ' + year)
    },
    newItem () {
      console.log('seen from widelist component')
      this.$emit('new-item')
    },
    openProject (project) {
      this.$emit('edit', project)
    }
  }
}
</script>
