<template>
  <header class="py-10">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <h2 class="text-2xl antialiased font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
            {{ heading }}
          </h2>
        </div>

        <div class="flex mt-4 md:mt-0 md:ml-4">
          <span class="rounded-md shadow-sm">
            <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 focus:border-gray-800">
              Edit
            </button>
          </span>
          <span class="ml-3 rounded-md shadow-sm">
            <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-600" @click="saveChanges">
              Publish
            </button>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AdminHeader',
  props: {
    heading: {
      type: String,
      default: 'Default heading'
    }
  },
  methods: {
    saveChanges () {
      this.$emit('save')
    }
  }
}
</script>
