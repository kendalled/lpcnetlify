<template>
  <div>
    <!-- <div  class="flex items-center justify-center w-full h-auto mb-0">
      <label class="flex flex-col items-center w-full px-4 py-1 tracking-wide text-gray-100 bg-blue-500 rounded shadow cursor-pointer transition-colors hover:bg-blue-600 hover:text-white">

        <input type="file" name="File(s)" class="hidden" accept="image/x-png, image/png, image/jpg, image/jpeg" @change="changeSweg">
      </label>
    </div> -->
    <div class="mt-6">
      <span class="block text-sm font-medium text-gray-700 leading-5">
        Reference file(s)
      </span>
      <section class="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md h-36">
        <span v-show="uploadDone && !uploading">
          <div class="text-center">
            <svg
              class="w-12 h-12 mx-auto text-green-400"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            ><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p class="mt-1 text-xs text-gray-500">
              File uploaded.
            </p>
            <p class="mt-1 text-sm text-gray-600">
              <label class="font-medium text-blue-600 cursor-pointer transition duration-150 ease-in-out hover:underline hover:text-blue-500 focus:outline-none focus:underline">
                Upload another
                <input type="file" name="File(s)" class="hidden" accept="image/x-png, image/png, image/jpg, image/jpeg" @change="changeSweg">
                <input v-model="link" type="hidden" name="File URL">
              </label>
              <!-- or drag and drop -->
            </p>
          </div>
        </span>
        <span v-show="!uploading && !uploadDone">
          <div class="text-center">
            <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="mt-1 text-sm text-gray-600">
              <label class="font-medium text-blue-600 cursor-pointer transition duration-150 ease-in-out hover:underline hover:text-blue-500 focus:outline-none focus:underline">
                Upload a file
                <input type="file" name="File(s)" class="hidden" accept="image/x-png, image/png, image/jpg, image/jpeg" @change="changeSweg">
              </label>
              or drag and drop
            </p>
            <p class="mt-1 text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </span>
        <FileLoader v-show="uploading" />
      </section>
    </div>
  </div>
</template>

<script>
import FileLoader from '~/components/FileLoader'
// import { storage } from '~/plugins/firebase'
export default {
  name: 'CustomFileInputOriginal',
  components: {
    FileLoader
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
      //   const storageRef = storage.ref()
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
      console.log('upload logic')
    }
  }
}
</script>
