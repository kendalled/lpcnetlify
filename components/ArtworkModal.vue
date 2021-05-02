<template>
  <div v-if="showModal" class="fixed inset-0 z-30 flex items-center justify-center max-h-screen">
    <transition
      enter-active-class="transition-all duration-150 ease-out-quad"
      leave-active-class="transition-all duration-200 ease-in-quad"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      appear
      @before-leave="backdropLeaving = true"
      @after-leave="backdropLeaving = false"
    >
      <div v-if="showBackdrop">
        <div class="absolute inset-0 bg-black opacity-25" />
      </div>
    </transition>

    <transition
      enter-active-class="transition-all duration-150 ease-out-quad"
      leave-active-class="transition-all duration-200 ease-in-quad"
      enter-class="scale-90 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-90 opacity-0"
      appear
      @before-leave="cardLeaving = true"
      @after-leave="cardLeaving = false"
    >
      <div v-if="showContent" v-click-outside="emitClickOutside" class="relative px-4 py-5 mt-6 transform bg-white rounded-lg shadow max-w-7xl sm:p-6">
        <div class="md:grid md:grid-cols-6 md:gap-6">
          <div class="md:col-span-2">
            <section class="flex items-center justify-between w-full h-auto">
              <h3 class="inline-block w-auto text-lg font-medium leading-6 text-gray-900">
                Viewing: <span class="font-semibold text-blue-600">{{ title }}</span>
              </h3>
              <BadgeSetExpand :status="openProj.status" @chosen="changeStatus" />
            </section>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              You can edit, save changes, or delete the project.
            </p>
            <!-- hidden on mobile -->
            <div class="mt-3 lg:block">
              <!-- <button v-if="!delDialog" type="button" class="inline-flex items-center justify-center w-full py-2 font-medium text-gray-700 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md hover:bg-gray-50 focus:outline-none focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 active:bg-gray-200 sm:text-sm sm:leading-5" @click="deleteProject(0)">
                Delete project
              </button>
              <button v-if="delDialog" type="button" class="inline-flex items-center justify-center w-full py-2 font-medium text-red-700 transition duration-150 ease-in-out bg-red-100 border border-transparent rounded-md hover:bg-red-50 focus:outline-none focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 active:bg-red-200 sm:text-sm sm:leading-5" @click="deleteProject(1)">
                Are you sure?
              </button>
              <button type="button" class="items-center justify-center block w-full py-2 mt-4 font-medium text-blue-700 transition duration-150 ease-in-out bg-blue-100 border border-transparent rounded-md hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-300 sm:text-sm sm:leading-5" @click="sendArtist">
                Send to Artist
              </button> -->
              <div class="my-3">
                <h3 class="mb-2 text-sm font-medium leading-5 text-gray-900">
                  Reference File<span v-if="multipleFiles">s</span>
                </h3>
                <div>
                  <div class="flex space-x-2">
                    <a
                      v-for="(file, ind) in openProj.customerData.referenceFiles"
                      :key="file + ind"
                      class="w-16 h-16 overflow-hidden transition-colors duration-200 border border-gray-200 rounded-full hover:border-gray-300"
                      :href="file"
                      target="_blank"
                      rel="nofollow"
                    >
                      <img class="inline-block object-cover w-full h-full" :src="file" :alt="'Reference file ' + ind">
                    </a>
                    <ArtworkFileInput :customer="openProj.customer" :rounded="true" @file="addFile" />
                  </div>
                  <!-- TODO: Show button with question mark and make it select status as 'need info' <div v-else class="inline-block bg-gray-400 rounded-full h-15 w-15" /> -->
                </div>
              </div>
              <div class="hidden space-y-2 md:block">
                <h3 class="text-sm font-medium leading-5 text-gray-900">
                  Art Proof<span v-if="multipleProofs">s</span>
                </h3>
                <div>
                  <div class="flex space-x-2">
                    <a
                      v-for="(file, ind) in openProj.customerData.proofs"
                      :key="file + ind"
                      class="w-16 h-16 overflow-hidden transition-colors duration-200 border border-gray-200 hover:border-gray-300"
                      :href="file"
                      target="_blank"
                      rel="nofollow"
                    >
                      <img class="inline-block object-cover w-full h-full" :src="file" :alt="'Reference file ' + ind">
                    </a>
                    <ArtworkFileInput :big="true" :customer="openProj.customer" :rounded="false" @file="addProof" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-4">
            <slot />
            <p class="pt-5 text-sm text-gray-500 lg:pt-0 lg:absolute lg:left-6 lg:bottom-5 lg:pb-1">
              ID: {{ uid }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.card {
  backface-visibility: hidden;
}
.ease-out-quad {
  transition-timing-function: cubic-bezier(.25, .46, .45, .94);
}
.ease-in-quad {
  transition-timing-function: cubic-bezier(.55, .085, .68, .53);
}
</style>

<script>
import vClickOutside from 'v-click-outside'
import BadgeSetExpand from '~/components/BadgeSetExpand'
import ArtworkFileInput from '~/components/ArtworkFileInput'
export default {
  name: 'ArtworkModal',
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    BadgeSetExpand,
    ArtworkFileInput
  },
  props: {
    openProj: {
      type: Object,
      default () {
        return {}
      }
    },
    uid: {
      type: String,
      default: '00001'
    },
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Project Title'
    }
  },
  data () {
    return {
      choices: [
        { name: 'Unread', key: -2 },
        { name: 'Read', key: -1 },
        { name: 'Need info', key: 0 },
        { name: 'Sent to Artist', key: 1 },
        { name: 'Initial Proof WIP', key: 2 },
        { name: 'Busy, up next', key: 3 },
        { name: 'Revisions / multiple', key: 4 },
        { name: 'Proof complete', key: 5 },
        { name: 'Generating quote / sending', key: 6 },
        { name: 'Discussing / Revisions', key: 7 },
        { name: 'Proof approved, await payment', key: 8 },
        { name: 'Payment received, await tracking', key: 9 },
        { name: 'Tracking sent', key: 10 },
        { name: 'In transit', key: 11 },
        { name: 'Order Complete', key: 12 },
        { name: 'Inactive', key: 13 }
      ],
      showModal: false,
      showBackdrop: false,
      showContent: false,
      backdropLeaving: false,
      cardLeaving: false,
      delDialog: false
    }
  },
  computed: {
    leaving () {
      return this.backdropLeaving || this.cardLeaving
    },
    multipleProofs () {
      if (this.openProj.customerData.proofs) {
        return (this.openProj.customerData.proofs.length > 1)
      }
      return false
    },
    multipleFiles () {
      if (this.openProj.customerData.referenceFiles) {
        return (this.openProj.customerData.referenceFiles.length > 1)
      }
      return false
    }
  },
  watch: {
    open: {
      handler (newValue) {
        if (newValue) {
          this.show()
        } else {
          this.close()
        }
      },
      immediate: true
    },
    leaving (newValue) {
      if (newValue === false) {
        this.showModal = false
        this.$emit('close')
      }
    }
  },
  // created () {
  //   const onEscape = (e) => {
  //     if (this.open && e.keyCode === 27) {
  //       this.close()
  //     }
  //   }

  //   document.addEventListener('keydown', onEscape)

  //   this.$once('hook:destroyed', () => {
  //     document.removeEventListener('keydown', onEscape)
  //   })
  // },
  methods: {
    addFile (link) {
      this.openProj.customerData.referenceFiles.push(link)
      this.emitSave()
    },
    addProof (link) {
      this.openProj.customerData.proofs.push(link)
      this.emitSave()
    },
    emitSave () {
      this.$emit('save')
      // this.closeHandler()
    },
    updateStatus (val) {
      this.$emit('status', val.key)
    },
    changeStatus (val) {
      this.$emit('status', val)
    },
    show () {
      this.showModal = true
      this.showBackdrop = true
      this.showContent = true
    },
    deleteProject (step) {
      if (step === 1 && this.delDialog) {
        this.$emit('delete')
      } else {
        this.delDialog = true
      }
    },
    sendArtist () {
      this.$emit('sending')
    },
    // closeHandler (v-click-outside)
    emitClickOutside () {
      this.$emit('outside')
    },
    close () {
      this.delDialog = false
      this.showBackdrop = false
      this.showContent = false
    }
  }
}
</script>
