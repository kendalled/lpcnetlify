<template>
  <!-- @click.away="open = false" -->
  <div class="relative inline-block text-left" @keydown.escape="open = false">
    <div>
      <span class="rounded-md shadow-sm">
        <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-gray-50 active:text-gray-800" @click="open = !open">
          Account
          <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </span>
    </div>
    <div
      v-if="open"
      class="fixed inset-0"
      tabindex="-1"
      @click="open = false"
    />
    <transition
      enter-class="transform scale-95 opacity-0"
      enter-active-class="transition duration-200 ease-out"
      enter-to-class="transform scale-100 opacity-100"
      leave-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-show="open" class="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg">
        <div class="bg-white rounded-md ring-1 ring-black ring-opacity-5">
          <div class="px-4 py-3">
            <p class="text-sm leading-5">
              Signed in as
            </p>
            <p class="text-sm font-medium leading-5 text-gray-900">
              tom@example.com
            </p>
          </div>
          <div class="border-t border-gray-100" />
          <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Account settings</a>
            <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Support</a>
            <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">License</a>
          </div>
          <div class="border-t border-gray-100" />
          <div class="py-1">
            <form method="POST" action="#">
              <button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccountDropdown',
  data () {
    return {
      open: false
    }
  }
}
</script>
