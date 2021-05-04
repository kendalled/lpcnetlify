<template>
  <div>
    <div class="mt-6 space-y-1">
      <label for="quote-pond" class="block text-sm font-medium leading-5 text-gray-700">
        Reference file(s)
      </label>
      <input id="hiddenFiles" v-model="files" aria-label="Hidden input for saving file URL(s)" name="Files" type="hidden">
      <client-only>
        <div class="w-full h-auto">
          <!-- <file-pond
            id="quote-pond"
            ref="pond"
            class="PondWrap"
            name="test"
            label-idle="Drop files here or <span class='filepond--label-action focus:outline-none'>browse</span>"
            :allow-multiple="true"
            :server="{
              process: handleProcessing,
              fetch: null,
              revert: null
            }"
            @init="handleFilePondInit"
          /> -->
          <file-pond
            id="quote-pond"
            ref="pond"
            class="PondWrap"
            name="test"
            label-idle="Drop files here or <span class='filepond--label-action focus:outline-none'>browse</span>"
            :allow-multiple="true"
            @init="handleFilePondInit"
          />
        </div>
        <span class="sr-only" aria-label="Upload progress in percent">{{ uploadValue }}</span>
      </client-only>
    </div>
  </div>
</template>

<script>
// Import FilePond styles
import 'filepond/dist/filepond.min.css'
// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import { vueFilePond, FilePondPluginImagePreview } from '~/plugins/filepond.client.js'
// import { storage } from '~/plugins/firebase'
const FilePond = vueFilePond(FilePondPluginImagePreview)
export default {
  name: 'CustomFileInput',
  components: {
    FilePond
  },
  data () {
    return {
      files: [],
      uploading: false,
      uploadDone: false,
      link: '',
      uploadValue: 0,
      message: '',
      picture: ''
    }
  },
  computed: {
    thiles () {
      return this.$refs.pond
    }
  },
  methods: {
    mockProcess (file) {
      console.log(file)
    },
    // handleProcessing (fieldName, file, metadata, load, error, progress, abort) {
    //   // handle file upload here
    //   const storageRef = storage.ref()
    //   // console.log(storageRef.child(file.name).fullPath)

    //   const fileUpload = file

    //   const task = storageRef.child(file.name).put(fileUpload)
    //   const vm = this
    //   task.on('state_changed', (snapshort) => {
    //     // console.log(snapshort.bytesTransferred, snapshort.totalBytes)
    //     const percentage = (snapshort.bytesTransferred / snapshort.totalBytes) * 100
    //     // Process
    //     vm.uploadValue = percentage
    //     if (percentage === 100) {
    //       load()
    //     }
    //   }, (error) => {
    //     // Error
    //     vm.message = `Upload error : ${error.message}`
    //   }, () => {
    //     // Success
    //     vm.message = 'Upload Success'
    //     vm.picture = task.snapshot.downloadURL
    //     const ref = storageRef
    //     // Get metadata
    //     ref.child(file.name).getMetadata().then((metadata) => {
    //       // Metadata now contains the metadata for 'filepond/${file.name}'
    //       ref.child(file.name).getDownloadURL().then((url) => {
    //         // const metadataFile = {
    //         //   name: metadata.name,
    //         //   size: metadata.size,
    //         //   contentType: metadata.contentType,
    //         //   fullPath: metadata.fullPath,
    //         //   downloadURL: url

    //         // }
    //         vm.files.push(url)
    //         vm.$emit('file', url)
    //         vm.uploading = false
    //         vm.uploadDone = true
    //         // // Process save metadata
    //         // console.log(downloadURL)
    //         // this.databaseRef.child(this.props.uid).child('files').push({ metadataFile })
    //         // this.databaseRef.child(this.props.uid).child('log').push().set({
    //         //   action: `${file.name} uploaded`,
    //         //   timestamp: new Date()
    //         // })
    //       })
    //       // alert('Uploaded Successfully')
    //     }).catch(function (error) {
    //       console.log(error)
    //     })
    //   })
    // },
    handleFilePondInit () {
      console.log('FilePond has initialized')
      // FilePond instance methods are available on `this.$refs.pond`
    }
  }
}
</script>

<style>
.PondWrap > .filepond--root {
  margin: 0 !important;
}
</style>
