<template>
  <div v-show="open" class="relative inline-block text-left" @keydown.escape="open = false" @click.away="open = false">
    <div>
      <button class="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600" @click="open = !open">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
    </div>
    <div
      x-show="open"
      x-transition:enter="transition ease-out duration-100"
      x-transition:enter-start="transform opacity-0 scale-95"
      x-transition:enter-end="transform opacity-100 scale-100"
      x-transition:leave="transition ease-in duration-75"
      x-transition:leave-start="transform opacity-100 scale-100"
      x-transition:leave-end="transform opacity-0 scale-95"
      class="absolute right-0 w-56 mt-2 shadow-lg origin-top-right rounded-md"
    >
      <div class="bg-white rounded-md ring-1 ring-black ring-opacity-5">
        <div class="py-1">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 leading-5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Account settings</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 leading-5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Support</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 leading-5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">License</a>
          <form method="POST" action="#">
            <button type="submit" class="block w-full px-4 py-2 text-sm text-left text-gray-700 leading-5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data () {
    return {
      open: false
    }
  }
}
</script>
