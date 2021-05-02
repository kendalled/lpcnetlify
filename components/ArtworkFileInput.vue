<template>
  <div class="relative">
    <!-- <div  class="flex items-center justify-center w-full h-auto mb-0">
      <label class="flex flex-col items-center w-full px-4 py-1 tracking-wide text-gray-100 transition-colors bg-blue-500 rounded shadow cursor-pointer hover:bg-blue-600 hover:text-white">

        <input type="file" name="File(s)" class="hidden" accept="image/x-png, image/png, image/jpg, image/jpeg" @change="changeSweg">
      </label>
    </div> -->
    <label v-show="!uploading && !uploadDone" :class="[rounded ? 'rounded-full' : 'rounded-sm']" class="inline-flex items-center justify-center w-16 h-16 text-gray-400 transition duration-150 ease-in-out border-2 border-gray-200 border-dashed cursor-pointer hover:text-gray-500" aria-label="Add team member">
      <input type="file" name="File(s)" class="hidden" accept="image/x-png, image/png, image/jpg, image/jpeg" @change="changeSweg">
      <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>
    </label>
    <svg v-if="uploading" class="absolute inset-x-0 w-16 h-16 text-blue-500 top-5 left-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  </div>
</template>

<script>
// import { storage } from '~/plugins/firebase'
export default {
  name: 'ArtworkFileInput',
  props: {
    rounded: {
      type: Boolean,
      default: false
    },
    big: {
      type: Boolean,
      default: true
    },
    customer: {
      type: String,
      default: 'No ID'
    }
  },
  data () {
    return {
      file: '',
      uploading: false,
      uploadDone: false,
      link: ''
    }
  },
  methods: {
    changeSweg (event) {
      // if (event.target.files[0]) {
      //   this.uploading = true
      //   let url = ''
      //   const vm = this
      //   this.file = event.target.files[0]
      //   const storageRef = storage.ref(this.customer)
      //   const thisRef = storageRef.child(this.file.name)
      //   thisRef.put(this.file).then(function (snapshot) {
      //   // gets download url to update client and post to firestore upon saving
      //     snapshot.ref.getDownloadURL().then(function (e) {
      //       url = e.toString()
      //       vm.$emit('file', url)
      //       vm.link = url
      //       vm.uploading = false
      //       vm.uploadDone = true
      //     })
      //   })
      // }
      console.log('event happened')
    }
  }
}
</script>
