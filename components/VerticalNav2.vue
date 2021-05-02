<template>
  <nav>
    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 leading-5 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200" aria-current="page">
      <span class="truncate">
        Dashboard
      </span>
    </a>
    <a href="#" class="flex items-center px-3 py-2 mt-1 text-sm font-medium text-gray-600 leading-5 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100">
      <span class="truncate">
        Team
      </span>
    </a>
    <a href="#" class="flex items-center px-3 py-2 mt-1 text-sm font-medium text-gray-600 leading-5 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100">
      <span class="truncate">
        Projects
      </span>
    </a>
    <a href="#" class="flex items-center px-3 py-2 mt-1 text-sm font-medium text-gray-600 leading-5 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100">
      <span class="truncate">
        Calendar
      </span>
    </a>
    <a href="#" class="flex items-center px-3 py-2 mt-1 text-sm font-medium text-gray-600 leading-5 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100">
      <span class="truncate">
        Documents
      </span>
    </a>
    <a href="#" class="flex items-center px-3 py-2 mt-1 text-sm font-medium text-gray-600 leading-5 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100">
      <span class="truncate">
        Reports
      </span>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'VerticalNav2',
  data () {
    return {
      selected: 'Dashboard'
    }
  }
}
</script>
