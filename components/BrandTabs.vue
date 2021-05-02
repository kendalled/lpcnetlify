<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="mb-4">
    <div class="sm:hidden">
      <select aria-label="Selected tab" class="block w-full form-select">
        <option>My Account</option>
        <option>Company</option>
        <option selected>
          Team Members
        </option>
        <option>Billing</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="flex -mb-px">
          <a
            v-for="(choice, c) in choices"
            :key="choice.title"
            href="#"
            :class="[active === c ? 'text-blue-600 border-blue-500 focus:text-blue-800 focus:border-blue-700' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300', c > 0 ? 'ml-8' : 'ml-0']"
            class="inline-flex items-center px-1 py-4 text-sm font-medium leading-5 border-b-2 group focus:outline-none"
            @click.prevent="active = c"
          >
            <!-- Heroicon name: user -->
            <svg :class="[active === c ? 'text-blue-500 group-focus:text-blue-600' : 'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600']" class="-ml-0.5 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path v-if="c === 0" fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
              <path v-if="c === 1" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              <path v-if="c === 2" d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path v-if="c === 2" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
            </svg>
            <span>{{ choice.title }}</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandTabs',
  data () {
    return {
      active: 0,
      choices: [
        {
          title: 'Description'
        },
        {
          title: 'User Reviews'
        },
        {
          title: 'Pin Pricing'
        }
      ]
    }
  }
}
</script>
