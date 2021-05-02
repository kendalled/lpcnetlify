<template>
  <!-- <div class="mt-4 bg-transparent sm:mt-8">
    <div class="relative z-0 px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <p class="text-sm font-semibold tracking-wider text-center text-gray-600 uppercase leading-6">
        Trusted by hundreds of companies
      </p>
      <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div class="flex items-center justify-center col-span-1 lg:justify-start md:col-span-2 lg:col-span-1">
          <img class="h-12 lg:-mt-1 lg:ml-1.5" src="~/static/workcation-logo.svg" alt="Workcation">
        </div>
        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img class="h-12" src="~/static/att_logo.svg" alt="AT&amp;T">
        </div>
        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img class="w-auto h-8" src="~/static/dell_logo.svg" alt="Dell">
        </div>
        <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
          <img class="w-auto h-12 lg:ml-8" src="~/static/unity_logo.svg" alt="Unity">
        </div>
        <div class="flex items-center justify-center col-span-2 lg:justify-end md:col-span-3 lg:col-span-1">
          <img class="w-auto h-9" src="~/static/1320video_logo.svg" alt="1320 Video">
        </div>
      </div>
    </div>
  </div> -->
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="bg-white">
    <div class="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:py-16 lg:px-8">
      <p class="text-base font-semibold tracking-wider text-center text-gray-600 uppercase leading-6">
        Trusted by hundreds of companies
      </p>
      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div class="flex justify-center px-8 py-8 col-span-1 bg-gray-50">
          <img class="max-h-12" src="~/static/att_logo.svg" alt="AT&amp;T">
        </div>
        <div class="flex justify-center px-8 py-8 col-span-1 bg-gray-50">
          <img class="max-h-12" src="~/static/unity_logo.svg" alt="Unity">
        </div>
        <div class="flex justify-center px-8 py-8 col-span-1 bg-gray-50">
          <img class="max-h-10" src="~/static/reebok_logo.svg" alt="StaticKit">
        </div>
        <div class="flex justify-center px-8 py-8 col-span-1 bg-gray-50">
          <img class="max-h-10" src="~/static/dell_logo.svg" alt="Laravel">
        </div>
        <div class="flex justify-center px-8 py-8 col-span-1 bg-gray-50">
          <img class="max-h-10" src="~/static/1320video_logo.svg" alt="1320 Video">
        </div>
        <div class="flex items-center justify-center px-8 py-8 col-span-1 bg-gray-50">
          <img class="max-h-8" src="~/static/gnc_logo.svg" alt="Statamic">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleLogoCloud'
}
</script>
