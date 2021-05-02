<template>
  <div class="bg-white rounded-md shadow-xl">
    <!-- our team component -->
    <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12">
      <div v-for="(section, s) in data" :key="s" class="space-y-12" :class="[s > 0 ? 'mt-12' : 'mt-0']">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-800 transition-colors duration-200 cursor-pointer hover:text-gray-600" @click="toggleOpen(s)">
          {{ labels[s].title }} <span class="text-base font-normal text-gray-600">({{ section.length }}<span class="hidden md:inline-block md:ml-1">projects</span>)</span>
        </h2>
        <ul v-if="labels[s].open" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li v-for="project in section" :key="project.id" class="px-4 py-5 transition-colors duration-150 ease-in-out rounded-md cursor-pointer hover:bg-gray-50" @click="openProject(project)">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover rounded-lg shadow-lg" :src="getProjImg(project)" alt="Customer artwork or reference files.">
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <div class="flex justify-between w-full">
                      <h4 class="inline-block">
                        {{ project.customerData.name || 'No name' }}
                      </h4>
                      <Badge-set class="ml-4 -mt-0.5" :option-num="project.status" />
                    </div>
                    <p class="font-normal text-blue-600">
                      {{ project.category }} &middot; {{ convert(project.deadline.seconds) }}
                    </p>
                  </div>
                  <div class="leading-7">
                    <p class="text-gray-500 line-clamp-3">
                      {{ getDesc(project) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>

        <!-- More people... -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BadgeSet from '~/components/BadgeSet'
export default {
  name: 'ArtworkPanels',
  components: {
    BadgeSet
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
      labels: [
        {
          title: 'Work in progress',
          open: true
        },
        {
          title: 'Design approved',
          open: false
        },
        {
          title: 'Order complete',
          open: false
        }
      ]
    }
  },
  methods: {
    isImage (url) {
      const exts = ['.jpg', '.gif', '.svg', '.jpeg', '.png', '.webp']
      for (let i = 0; i < exts.length; i++) {
        if (url.includes(exts[i])) {
          return true
        }
      }
      return false
    },
    openProject (project) {
      this.$emit('edit', project)
    },
    getDesc (proj) {
      return (proj.customerData.description.length > 0 ? proj.customerData.description : 'No description provided - see files.')
    },
    toggleOpen (num) {
      this.labels[num].open = !this.labels[num].open
    },
    getProjImg (proj) {
      let file
      if (proj.customerData.referenceFiles[0] !== undefined) {
        file = (this.isImage(proj.customerData.referenceFiles[0].toLowerCase()) ? proj.customerData.referenceFiles[0] : 'https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins-5f3f1.appspot.com/o/noPreview.jpg?alt=media&token=979e8e29-dd17-491c-b25a-9e6c7ef7094f')
      } else {
        file = 'https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins-5f3f1.appspot.com/o/noArtwork.jpg?alt=media&token=566ee3a8-e00f-482c-b535-829341ab7d9a'
      }
      return file
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
    }
  }
}
</script>
