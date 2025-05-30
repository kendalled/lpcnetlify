<template>
  <div v-if="showWrapper" class="fixed inset-0 overflow-hidden" @keydown.escape="closeHandler">
    <div class="absolute inset-0 overflow-hidden">
      <transition
        appear
        enter-active-class="duration-300 ease-in-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-500 ease-in-out"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="open" class="absolute inset-0 bg-gray-700 transition-opacity bg-opacity-75" />
      </transition>
      <section class="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <transition
          appear
          enter-active-class="transition duration-500 ease-in-out transform sm:duration-700"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition duration-500 ease-in-out transform sm:duration-700"
          leave-class="translate-x-0"
          leave-to-class="translate-x-full"
          @after-leave="showWrapper = false"
        >
          <div v-if="open" v-click-outside="closeHandler" class="w-screen max-w-md">
            <div class="flex flex-col h-full bg-white shadow-xl divide-y divide-gray-200">
              <div class="flex-1 h-0 overflow-y-auto">
                <header class="px-4 py-6 bg-blue-700 space-y-1 sm:px-6">
                  <div class="flex items-center justify-between space-x-3">
                    <h2 class="text-lg font-medium text-white leading-7">
                      {{ openProj.customerData.name }}
                    </h2>
                    <div class="flex items-center h-7">
                      <button aria-label="Close panel" class="text-blue-200 transition duration-150 ease-in-out hover:text-white" @click="closeHandler">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p class="text-sm text-blue-300 leading-5">
                      {{ truncDesc }}
                    </p>
                  </div>
                </header>
                <div class="flex flex-col justify-between flex-1">
                  <div class="px-4 divide-y divide-gray-200 sm:px-6">
                    <div class="pt-6 pb-5 space-y-6">
                      <div class="space-y-1">
                        <span class="block text-sm font-medium text-gray-900 leading-5">
                          Description
                        </span>
                        <div class="relative bg-gray-100 border rounded-md">
                          <p id="description" class="px-4 py-2 text-sm antialiased text-gray-800">
                            {{ openProj.customerData.description }}
                          </p>
                        </div>
                      </div>
                      <div class="space-y-2">
                        <h3 class="text-sm font-medium text-gray-900 leading-5">
                          Reference Files
                        </h3>
                        <div>
                          <div class="flex space-x-2">
                            <a
                              v-for="(file, ind) in openProj.customerData.referenceFiles"
                              :key="file + ind"
                              class="overflow-hidden border border-gray-200 rounded-full transition-colors duration-200 hover:border-gray-300"
                              :href="file"
                              target="_blank"
                              rel="nofollow"
                            >
                              <img class="inline-block object-cover w-10 h-10" :src="file" :alt="'Reference file ' + ind">
                            </a>
                            <ArtworkFileInput :customer="openProj.customer" :rounded="true" @file="addFile" />
                          </div>
                        </div>
                      </div>
                      <div class="space-y-2">
                        <h3 class="text-sm font-medium text-gray-900 leading-5">
                          Art Proof<span v-if="multipleProofs">s</span>
                        </h3>
                        <div>
                          <div class="flex space-x-2">
                            <a
                              v-for="(file, ind) in openProj.customerData.proofs"
                              :key="file + ind"
                              class="overflow-hidden border border-gray-200 rounded-sm transition-colors duration-200 hover:border-gray-300"
                              :href="file"
                              target="_blank"
                              rel="nofollow"
                            >
                              <img class="inline-block object-cover w-10 h-10" :src="file" :alt="'Reference file ' + ind">
                            </a>
                            <ArtworkFileInput :customer="openProj.customer" :rounded="false" @file="addProof" />
                          </div>
                        </div>
                      </div>
                      <fieldset class="space-y-2">
                        <legend class="text-sm font-medium text-gray-900 leading-5">
                          Project Status
                        </legend>
                        <div class="space-y-5">
                          <div class="relative flex items-start">
                            <div class="absolute flex items-center h-5">
                              <input
                                id="privacy_public"
                                v-model="openProj.status"
                                :value="0"
                                aria-describedby="privacy_public_description"
                                type="radio"
                                name="privacy"
                                class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
                              >
                            </div>
                            <div class="text-sm leading-5 pl-7">
                              <label for="privacy_public" class="font-medium text-gray-900">
                                Just received
                              </label>
                              <p id="privacy_public_description" class="text-gray-500">
                                For new projects or masterpieces in progress.
                              </p>
                            </div>
                          </div>
                          <div>
                            <div class="relative flex items-start">
                              <div class="absolute flex items-center h-5">
                                <input
                                  id="privacy_private-to-project"
                                  v-model="openProj.status"
                                  :value="1"
                                  aria-describedby="privacy_private-to-project_description"
                                  type="radio"
                                  name="privacy"
                                  class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
                                >
                              </div>
                              <div class="text-sm leading-5 pl-7">
                                <label for="privacy_private-to-project" class="font-medium text-gray-900">
                                  Proof in progress
                                </label>
                                <p id="privacy_private-to-project_description" class="text-gray-500">
                                  Proof work has begun in Adobe Illustrator.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="relative flex items-start">
                              <div class="absolute flex items-center h-5">
                                <input
                                  id="privacy_private"
                                  v-model="openProj.status"
                                  :value="2"
                                  aria-describedby="privacy_private-to-project_description"
                                  type="radio"
                                  name="privacy"
                                  class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
                                >
                              </div>
                              <div class="text-sm leading-5 pl-7">
                                <label for="privacy_private" class="font-medium text-gray-900">
                                  Proof completed
                                </label>
                                <p id="privacy_private_description" class="text-gray-500">
                                  Saves any new files, then marks proof as done.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div class="pt-4 pb-6 space-y-4">
                      <div class="flex text-sm leading-5">
                        <a href="#" class="inline-flex items-center font-medium text-blue-600 space-x-2 transition duration-150 ease-in-out group hover:text-blue-500">
                          <svg class="w-5 h-5 text-blue-500 transition duration-150 ease-in-out group-hover:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                          </svg>
                          <span>
                            Copy link
                          </span>
                        </a>
                      </div>
                      <div class="flex text-sm leading-5">
                        <a href="#" class="inline-flex items-center text-gray-500 space-x-2 transition duration-150 ease-in-out group hover:text-gray-900">
                          <svg class="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                          </svg>
                          <span>
                            Learn more about sharing
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end flex-shrink-0 px-4 py-4 space-x-4">
                <span class="inline-flex rounded-md shadow-sm">
                  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 leading-5 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-gray-50 active:text-gray-800">
                    Cancel
                  </button>
                </span>
                <span class="inline-flex rounded-md shadow-sm">
                  <button type="submit" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent leading-5 transition duration-150 ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700" @click.prevent="emitSave">
                    Save
                  </button>
                </span>
              </div>
            </div>
          </div>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import ArtworkFileInput from '~/components/ArtworkFileInput'
export default {
  name: 'SlideOver',
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    ArtworkFileInput
  },
  props: {
    shown: {
      type: Boolean,
      default: false
    },
    current: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      open: false,
      openProj: {},
      showWrapper: false
    }
  },
  computed: {
    multipleProofs () {
      if (this.openProj.customerData.proofs) {
        return (this.openProj.customerData.proofs.length > 1)
      }
      return false
    },
    truncDesc () {
      return (this.truncate(this.openProj.customerData.description, 108, true))
    }
  },
  watch: {
    shown (newVal) {
      if (newVal) {
        this.showWrapper = true
        this.open = true
      }
    },
    current (newVal) {
      console.log('i see that my prop value has changed (obj)')
      this.openProj = newVal
    }
  },
  methods: {
    addFile (link) {
      this.openProj.customerData.referenceFiles.push(link)
      this.emitSave()
    },
    addProof (link) {
      this.openProj.customerData.proofs.push(link)
      this.emitSave()
    },
    truncate (str, n, useWordBoundary) {
      if (str.length <= n) { return str }
      const subString = str.substr(0, n - 1) // the original check
      return (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(' '))
        : subString) + ' ...'
    },
    emitSave () {
      this.$emit('save')
      this.closeHandler()
    },
    closeHandler () {
      if (this.open) {
        this.open = false
        this.$emit('closed')
      }
    }
  }
}
</script>
