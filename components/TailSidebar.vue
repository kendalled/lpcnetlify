<template>
  <nav id="nav" class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
    <div class="relative w-24 mb-8 -mx-2 lg:hidden">
      <form><label><span class="sr-only">Tailwind CSS Version</span><select class="block py-1 pl-2 pr-8 text-base font-medium text-gray-500 bg-transparent appearance-none focus:outline-none focus:text-gray-800"><option value="v1">v<!-- -->1.8.7</option><option value="v0">v0.7.4</option></select></label></form><div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div><div class="mb-10">
      <a href="/docs/installation" class="flex items-center px-2 py-1 -mx-2 font-medium text-gray-600 hover:text-gray-900"><svg class="w-6 h-6" viewBox="0 0 24 24"><path class="text-gray-400 fill-current" d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z" /><path class="text-gray-700 fill-current" d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z" /></svg><span class="ml-3">Documentation</span></a><a href="https://tailwindui.com/components?utm_source=tailwindcss&amp;utm_medium=navigation" class="flex items-center px-2 py-1 mt-3 -mx-2 font-medium text-gray-600 hover:text-gray-900 lg:mt-1"><svg class="w-6 h-6" viewBox="0 0 24 24"><path class="text-gray-400 fill-current" d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z" /><polygon class="text-gray-700 fill-current" points="21 6 12 10 12 22 21 18" /></svg><span class="ml-3">Components</span></a><a href="/course" class="flex items-center px-2 py-1 mt-3 -mx-2 font-medium text-gray-600 hover:text-gray-900 lg:mt-1"><svg class="w-6 h-6" viewBox="0 0 24 24"><path class="text-gray-400 fill-current" d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v2h2V5H4zm0 4v2h2V9H4zm0 4v2h2v-2H4zm0 4v2h2v-2H4zM18 5v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z" /><path class="text-gray-700 fill-current" d="M9 5h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 8h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" /></svg><span class="ml-3">Screencasts</span></a><a href="https://blog.tailwindcss.com" class="flex items-center px-2 py-1 mt-3 -mx-2 font-medium text-gray-600 hover:text-gray-900 lg:mt-1"><svg class="w-6 h-6" viewBox="0 0 24 24"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#CBD5E0" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm2 3a1 1 0 00-1 1v4a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H7z" /><path fill="#4A5568" d="M13 7a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm-7 8a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm8-5a1 1 0 100 2h3a1 1 0 100-2h-3z" /></g></svg><span class="ml-3">Blog</span></a><a href="/resources" class="flex items-center px-2 py-1 mt-3 -mx-2 font-medium text-gray-600 hover:text-gray-900 lg:mt-1"><svg class="w-6 h-6" viewBox="0 0 24 24"><path class="text-gray-400 fill-current" d="M9 22c.19-.14.37-.3.54-.46L17.07 14H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9zM4 2h4a2 2 0 0 1 2 2v14a4 4 0 1 1-8 0V4c0-1.1.9-2 2-2zm2 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /><path class="text-gray-700 fill-current" d="M11 18.66V7.34l2.07-2.07a2 2 0 0 1 2.83 0l2.83 2.83a2 2 0 0 1 0 2.83L11 18.66z" /></svg><span class="ml-3">Resources</span></a><a href="/community" class="flex items-center px-2 py-1 mt-3 -mx-2 font-medium text-gray-600 hover:text-gray-900 lg:mt-1"><svg class="w-6 h-6" viewBox="0 0 24 24"><path class="text-gray-400 fill-current" d="M20.3 12.04l1.01 3a1 1 0 0 1-1.26 1.27l-3.01-1a7 7 0 1 1 3.27-3.27zM11 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /><path class="text-gray-700 fill-current" d="M15.88 17.8a7 7 0 0 1-8.92 2.5l-3 1.01a1 1 0 0 1-1.27-1.26l1-3.01A6.97 6.97 0 0 1 5 9.1a9 9 0 0 0 10.88 8.7z" /></svg><span class="ml-3">Community</span></a>
    </div><div class="mb-8">
      <h5 class="mb-3 text-sm font-bold tracking-wide text-gray-500 uppercase lg:mb-2 lg:text-xs">
        Examples
      </h5><ul>
        <li class="mb-3 lg:mb-1">
          <a class="relative block px-2 py-1 -mx-2 font-medium text-gray-600 transition duration-200 ease-in-out hover:translate-x-2px hover:text-gray-900" href="/components/alerts"><span class="absolute inset-0 bg-teal-200 rounded opacity-0" /><span class="relative">Alerts</span></a>
        </li><li class="mb-3 lg:mb-1">
          <a class="relative block px-2 py-1 -mx-2 font-medium text-gray-600 transition duration-200 ease-in-out hover:translate-x-2px hover:text-gray-900" href="/components/buttons"><span class="absolute inset-0 bg-teal-200 rounded opacity-0" /><span class="relative">Buttons</span></a>
        </li><li class="mb-3 lg:mb-1">
          <a class="relative block px-2 py-1 -mx-2 font-medium text-gray-600 transition duration-200 ease-in-out hover:translate-x-2px hover:text-gray-900" href="/components/cards"><span class="absolute inset-0 bg-teal-200 rounded opacity-0" /><span class="relative">Cards</span></a>
        </li><li class="mb-3 lg:mb-1">
          <a class="relative block px-2 py-1 -mx-2 font-medium text-gray-600 transition duration-200 ease-in-out hover:translate-x-2px hover:text-gray-900" href="/components/forms"><span class="absolute inset-0 bg-teal-200 rounded opacity-0" /><span class="relative">Forms</span></a>
        </li><li class="mb-3 lg:mb-1">
          <a class="relative block px-2 py-1 -mx-2 font-medium text-gray-600 transition duration-200 ease-in-out hover:translate-x-2px hover:text-gray-900" href="/components/flexbox-grids"><span class="absolute inset-0 bg-teal-200 rounded opacity-0" /><span class="relative">Flexbox Grids</span></a>
        </li><li class="mb-3 lg:mb-1">
          <a class="relative block px-2 py-1 -mx-2 font-medium text-teal-600 transition duration-200 ease-in-out" href="/components/navigation"><span class="absolute inset-0 bg-teal-200 rounded opacity-25" /><span class="relative">Navigation</span></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TailSidebar'
}
</script>
