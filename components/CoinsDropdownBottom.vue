<template>
  <div class="coins-dropdown" style="width: 400px;">
    <div class="mt-2 text-xs antialiased font-semibold text-gray-700 uppercase dropdown--section_title">
      Coin Types
    </div>
    <div class="pl-2 dropdown-wrap">
      <a href="#" class="dropdown-wrap__content type1 group transition-colors duration-300">
        <div class="px-1 py-1 bg-blue-200 rounded-full shadow group-hover:bg-blue-600 transition-colors duration-300">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-blue-800 group-hover:text-gray-100"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>        </div>
        <span class="text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Police Coins</span>
      </a>
      <a href="#" class="dropdown-wrap__content type1 group transition-colors duration-300">
        <div class="px-1 py-1 bg-blue-200 rounded-full shadow group-hover:bg-blue-600 transition-colors duration-300">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-blue-800 group-hover:text-gray-100"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
        </div>
        <span class="text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Military Coins</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoinsDropdownBottom'
}
</script>
